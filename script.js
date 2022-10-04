/* Parallax section */
const parallax = document.querySelector('.parallax');
const front = document.querySelector('.front-layer');
const back = document.querySelector('.back-layer');

/* Sensitivty levels for both layers */

const sFront = 150;
const sBack = 400;

/* Mouse event */
parallax.addEventListener('mousemove', e => {
   /* X and Y mouse coordinates */
   const x = e.clientX;
   const y = e.clientY;
   /* Template literals that translates the front layer using coordinates and then applies the fronts sensitivity levels */
   front.style.transform = `
   translate(
      ${x / sFront}%,
      ${y / sFront}%
   )`;
   /* Does the same but for the back layer */
   back.style.transform = `
   translate(
      ${x / sBack}%,
      ${y / sBack}%
   )`;
});