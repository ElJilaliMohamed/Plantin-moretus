// const bookSelect = () => {
//   const oratore = document.querySelector('.js-oratore');
//   const proArchia = document.querySelector('.js-archia');

//   const showPopup = (element) => {
//     element.innerHTML = `<div class="popup">
//       <p class="section__title section__title--secondary">De Oratore</p>
//       <picture>
//         <img sizes="(max-width: 536px) 100vw, 536px" srcset="
//         src/oratore-responsive/de-oratore_uyspv7_c_scale,w_350.avif 350w,
//         src/oratore-responsive/de-oratore_uyspv7_c_scale,w_536.avif 536w" src="src/oratore-responsive/de-oratore_uyspv7_c_scale,w_536.avif" height="300" alt="">
//       </picture>
//       <p class="normal__text pro-archia-space">
//         Dit was een standaard werk in humanistische opleiding in die tijd, het kon gebrukt worden om taalvaardigheid te bevorderen en het aanleren van ethische principes voor redenaars.
//       </p>
//     </div>`;
//   };

//   const hidePopup = (element) => {
//     const popup = document.querySelector('.popup');
//     if (popup) {
//       popup.remove();
//     }
//   };

//   oratore.addEventListener('mouseover', () => showPopup(oratore));
//   oratore.addEventListener('mouseout', () => hidePopup(oratore));

//   proArchia.addEventListener('mouseover', () => showPopup(proArchia));
//   proArchia.addEventListener('mouseout', () => hidePopup(proArchia));
// };

// const init = function () {
//   bookSelect();
// };

// document.addEventListener('DOMContentLoaded', init);
