const menuToggle = document.getElementById('menu-toggle');
const navigation = document.getElementById('navigation');

menuToggle.addEventListener('click', () => {
  navigation.style.display = navigation.style.display === 'none' ? 'block' : 'none';
});
