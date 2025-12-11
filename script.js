const detailImage = document.querySelector('.detail-image');
const detailTitle = document.querySelector('.detail-title');
const detailComment = document.querySelector('.detail-comment');
const carousel = document.querySelector('.carousel');
const carouselTrack = document.querySelector('.carousel-track');
let isDown = false;
let startX = 0;
let scrollLeft = 0;
let isManual = false;
let animationId;
const autoScrollSpeed = 0.35;

const showDetail = (button) => {
  detailTitle.textContent = button.dataset.title;
  detailComment.textContent = button.dataset.comment;
  detailImage.style.background = button.dataset.image;
};

const createCarouselItem = (title, comment, imagePath) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'carousel-item';
  button.textContent = title;
  button.dataset.title = title;
  button.dataset.comment = comment;
  button.dataset.image = `url("${imagePath}")`;
  button.addEventListener('click', () => showDetail(button));
  carouselTrack.appendChild(button);
  return button;
};

const wrapScroll = () => {
  const half = carousel.scrollWidth / 2;
  if (!half) return;
  if (carousel.scrollLeft >= half) {
    carousel.scrollLeft -= half;
  } else if (carousel.scrollLeft <= 0) {
    carousel.scrollLeft += half;
  }
};

const animate = () => {
  if (!isManual) {
    carousel.scrollLeft += autoScrollSpeed;
    wrapScroll();
  }
  animationId = requestAnimationFrame(animate);
};

const handleDragStart = (pageX) => {
  isDown = true;
  isManual = true;
  startX = pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
  carousel.classList.add('active');
};

const handleDragMove = (pageX) => {
  if (!isDown) return;
  const x = pageX - carousel.offsetLeft;
  const walk = (x - startX) * 1.5;
  carousel.scrollLeft = scrollLeft - walk;
  wrapScroll();
};

const handleDragEnd = () => {
  isDown = false;
  isManual = false;
  carousel.classList.remove('active');
};

const loadGalleryConfig = async () => {
  try {
    const response = await fetch('photos/gallery.json');
    if (!response.ok) {
      console.error('gallery config not found');
      return [];
    }
    return response.json();
  } catch (error) {
    console.error('gallery config failed', error);
    return [];
  }
};

const fetchComment = async (path) => {
  try {
    const response = await fetch(path);
    if (!response.ok) return '';
    return (await response.text()).trim();
  } catch (error) {
    return '';
  }
};

const initGallery = async () => {
  const entries = await loadGalleryConfig();
  if (!entries.length) return;
  const prepared = [];
  for (const entry of entries) {
    const comment = await fetchComment(`photos/${entry.folder}/${entry.commentFile}`);
    const imagePath = `photos/${entry.folder}/${entry.image}`;
    prepared.push({ title: entry.title, comment, imagePath });
  }
  const baseButtons = [];
  prepared.forEach((item) => {
    const button = createCarouselItem(item.title, item.comment, item.imagePath);
    baseButtons.push(button);
  });
  prepared.forEach((item) => {
    createCarouselItem(item.title, item.comment, item.imagePath);
  });
  if (baseButtons[0]) {
    showDetail(baseButtons[0]);
  }
  animate();
};

carousel.addEventListener('mousedown', (e) => handleDragStart(e.pageX));
carousel.addEventListener('mouseleave', handleDragEnd);
carousel.addEventListener('mouseup', handleDragEnd);
carousel.addEventListener('mousemove', (e) => {
  e.preventDefault();
  handleDragMove(e.pageX);
});
carousel.addEventListener('touchstart', (e) => handleDragStart(e.touches[0].pageX));
carousel.addEventListener('touchmove', (e) => handleDragMove(e.touches[0].pageX));
carousel.addEventListener('touchend', handleDragEnd);

initGallery();
