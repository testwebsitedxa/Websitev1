// Error Handling (optional but recommended)
try {
  // JavaScript code here
} catch (error) {
  console.error("Error in script.js:", error);
  // Handle errors gracefully (e.g., display an error message to the user)
}

const menuToggle = document.getElementById('menu-toggle');
const navigation = document.getElementById('navigation');

menuToggle.addEventListener('click', () => {
  navigation.style.display = navigation.style.display === 'none' ? 'block' : 'none';
});

// Hero Text Scrolling Animation (using GSAP)
const heroText = document.querySelector('.animated-text');
if (heroText) { // Check if element exists to avoid errors
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
} else {
  console.warn("Hero text element with class 'animated-text' not found.");
}

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
  if (servicesSection) { // Check if element exists to avoid errors
    const servicesTop = servicesSection.offsetTop;
    const servicesHeight = servicesSection.offsetHeight;

    if (scrollY > servicesTop - window.innerHeight / 2 && scrollY < servicesTop + servicesHeight - window.innerHeight / 2) {
      animateProgressBars();
    }
  } else {
    console.warn("Services section element with class 'services' not found.");
  }
});
