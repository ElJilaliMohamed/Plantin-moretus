const init = () => {
  const tl = gsap.timeline();
  gsap.registerPlugin(ScrollTrigger);

  tl.fromTo('.main__bg', { filter: 'blur(5px)', scale: 0 }, { scale: 1, filter: 'blur(0px)', duration: 2 });
  gsap.fromTo('.main__title', { opacity: 0, filter: 'blur(10px)' }, { opacity: 1, filter: 'blur(0px)', stagger: 0.1, delay: 1 });
  gsap.fromTo('.main__img', { opacity: 0, filter: 'blur(10px)' }, { opacity: 1, filter: 'blur(0px)', delay: 1.2 });
  gsap.fromTo(
    '.all-content',
    { display: 'hidden', opacity: 0 },
    {
      display: 'block',
      opacity: 1,
      duration: 1,
      delay: 0.7,
    }
  );

  ScrollTrigger.create({
    trigger: '.section__motion',
    pin: true,
    start: 'top top',
    end: '+=1000',
    scrub: true,
  });

  gsap.fromTo(
    '.book-fall3',
    { opacity: 0, y: -700 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.gsap-trigger-books',
      },
    }
  );

  gsap.fromTo(
    '.book-fall2',
    { opacity: 0, y: -700 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      delay: 0.03,
      scrollTrigger: {
        trigger: '.gsap-trigger-books',
      },
    }
  );

  gsap.fromTo(
    '.book-fall1',
    { opacity: 0, y: -700 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      delay: 0.1,
      scrollTrigger: {
        trigger: '.gsap-trigger-books',
      },
    }
  );

  gsap.fromTo(
    '.wood-stamp',
    { opacity: 0, y: -700 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      delay: 0.4,
      scrollTrigger: {
        trigger: '.gsap-trigger-books',
      },
    }
  );

  gsap.fromTo(
    '.block__img',
    { y: 500 },
    {
      y: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.gsap-trigger-books',
      },
    }
  );

  gsap.fromTo(
    '.gsap-panel',
    { opacity: 0, y: 100 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.09,
      scrollTrigger: {
        trigger: '.panel3',
        scrub: true,
      },
    }
  );
  gsap.fromTo('.gsap-trigger-img', { x: 50 }, { x: 0, rotate: -7, scrollTrigger: { trigger: '.gsap-title-trigger', scrub: true, toggleActions: 'restart reverse' } });
  gsap.fromTo('.gsap-trigger-paper', { x: 50 }, { x: 0, rotate: -7, scrollTrigger: { trigger: '.gsap-title-trigger', scrub: true, toggleActions: 'restart reverse' } });

  gsap.fromTo('.gsap-print', { x: -50 }, { x: 0, rotate: 7, scrollTrigger: { trigger: '.gsap-title-trigger', scrub: true, toggleActions: 'restart reverse' } });
  gsap.fromTo('.gsap-trigger-flipped', { x: -50 }, { x: 0, scrollTrigger: { trigger: '.gsap-title-trigger', scrub: true, toggleActions: 'restart reverse' } });

  gsap.set('.gsap-trigger-officina', { filter: 'blur(10px)' });
  gsap.to('.gsap-trigger-officina', {
    filter: 'blur(0px)',
    scrollTrigger: {
      trigger: '.gsap-officina',
      start: 'top center',
      end: 'bottom bottom',
      scrub: true,
      markers: true,
    },
  });
};

init();
