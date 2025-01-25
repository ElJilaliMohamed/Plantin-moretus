// const init = () => {
//   const tl = gsap.timeline();
//   gsap.registerPlugin(ScrollTrigger);

  // tl.fromTo('.main__bg', { filter: 'blur(5px)', scale: 0 }, { scale: 1, filter: 'blur(0px)', duration: 2 });
  // gsap.fromTo('.main__title', { opacity: 0, filter: 'blur(10px)' }, { opacity: 1, filter: 'blur(0px)', stagger: 0.1, delay: 1 });
  // gsap.fromTo('.main__img', { opacity: 0, filter: 'blur(10px)' }, { opacity: 1, filter: 'blur(0px)', delay: 1.2 });
  // tl.fromTo(
  //   '.all-content',
  //   { display: 'hidden', opacity: 0 },
  //   {
  //     display: 'block',
  //     opacity: 1,
  //     duration: 1,
  //   }
  // );
  // gsap.fromTo('.section__writegroup', { x: -600 }, { x: 0 });
  // gsap.fromTo(
  //   '.section__printgroup',
  //   { x: 600 },
  //   {
  //     x: 0,
  //     duration: 1,
  //     scrollTrigger: {
  //       trigger: '.section__printgroup',
  //       markers: true,
  //       toggleActions: 'restart none restart',
  //     },
  //   }
  // );
//   gsap.fromTo(
//     '.book-fall3',
//     { opacity: 0, y: -700 },
//     {
//       opacity: 1,
//       y: 0,
//       stagger: 0.1,
//       scrollTrigger: {
//         trigger: '.text__group',
//       },
//     }
//   );
//   gsap.fromTo(
//     '.book-fall2',
//     { opacity: 0, y: -700 },
//     {
//       opacity: 1,
//       y: 0,
//       stagger: 0.1,
//       delay: 0.03,
//       scrollTrigger: {
//         trigger: '.text__group',
//       },
//     }
//   );
//   gsap.fromTo(
//     '.book-fall1',
//     { opacity: 0, y: -700 },
//     {
//       opacity: 1,
//       y: 0,
//       stagger: 0.1,
//       delay: 0.1,
//       scrollTrigger: {
//         trigger: '.text__group',
//       },
//     }
//   );

//   gsap.fromTo(
//     '.wood-stamp',
//     { opacity: 0, y: -700 },
//     {
//       opacity: 1,
//       y: 0,
//       stagger: 0.1,
//       delay: 0.4,
//       scrollTrigger: {
//         trigger: '.text__group',
//       },
//     }
//   );
//   gsap.fromTo(
//     '.letter',
//     { y: 500 },
//     {
//       y: 0,
//       stagger: 0.1,
//       scrollTrigger: {
//         trigger: '.text__group',
//       },
//     }
//   );

//   gsap.fromTo('.section__caravaggio', { x: 0 }, { x: -100, rotate: -7, scrollTrigger: { trigger: '.section__writertitle', toggleActions: 'restart reverse' } });
//   gsap.fromTo('.section__rippedpaper', { x: 0 }, { x: -100, rotate: -7, scrollTrigger: { trigger: '.section__writertitle', toggleActions: 'restart reverse' } });

//   gsap.fromTo('.section__printpress', { x: 0 }, { x: 100, rotate: 7, scrollTrigger: { trigger: '.section__writertitle', toggleActions: 'restart reverse' } });
//   gsap.fromTo('.section__rippedpaper--flipped', { x: 0 }, { x: 100, scrollTrigger: { trigger: '.section__writertitle', toggleActions: 'restart reverse' } });
// };
// init();
