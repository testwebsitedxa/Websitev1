const menuToggle = document.getElementById('menu-toggle');
const navigation = document.getElementById('navigation');

menuToggle.addEventListener('click', () => {
  navigation.style.display = navigation.style.display === 'none' ? 'block' : 'none';
});

// Hero Text Scrolling Animation (using GSAP)
const heroText = document.querySelector('.animated-text');
const textWrapper = document.createElement('span');
textWrapper.textContent = heroText.textContent;
heroText.innerHTML = '';
heroText.appendChild(textWrapper);

gsap.to(textWrapper, {
  duration: 5,
  ease: "power3.inOut",
  from: { y: 0 },
  to: { y: -textWrapper.scrollHeight },
  repeat: -1
});

// Progress Bar Animation
const progressBars = document.querySelectorAll('.progress-bar');

const animateProgressBars = () => {
  progressBars.forEach((progressBar, index) => {
    gsap.to(progressBar, {
      duration: 2,
      ease: "power3.easeOut",
      from: { width: '0%' },
      to: { width: `${index + 1}00%` },
      delay: index * 0.5
    });
  });
};

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const servicesSection = document.querySelector('.services');
  const servicesTop = servicesSection.offsetTop;
  const servicesHeight = servicesSection.offsetHeight;

  if (scrollY > servicesTop - window.innerHeight / 2 && scrollY < servicesTop + servicesHeight - window.innerHeight / 2) {
    animateProgressBars();
  }
});
