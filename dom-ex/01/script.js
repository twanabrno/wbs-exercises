
const heroHeading = document.querySelector('.hero-content h1');
console.log(heroHeading);

const navLinks = document.querySelectorAll('.nav-list a');
console.log(navLinks);

const button = document.querySelector('.btn');
console.log(button);




const header = document.querySelector('.header');
header.style.backgroundColor = '#b5651d';

heroHeading.style.fontSize = '3rem';

navLinks.forEach(link => {
  link.style.color = '#faf0e6';
});




const heroContent = document.querySelector('.hero-content');
const newParagraph = document.createElement('p');
newParagraph.textContent = 'Open daily from 7 AM to 9 PM.';
heroContent.appendChild(newParagraph);