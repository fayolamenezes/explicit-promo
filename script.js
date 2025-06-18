gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".card-wrapper",
    start: "top top",
    end: "+=250%",
    scrub: true,
    pin: ".hero",
    markers: false
  }
});

// 1. Move card diagonally, straighten rotation, scale up
tl.to("#animatedCard", {
  y: "-50vh",
  rotate: 0,
  scale: 1.1,
  duration: 1,
  ease: "power3.out"
}, 0);

// 2. Shrink hero content
tl.to(".hero h1, .hero p, .hero-buttons", {
  scale: 0.6,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
}, 0);

// 3. Flip the card on Y axis
tl.to(".flip-card-inner", {
  rotateY: 180,
  duration: 1,
  ease: "power2.inOut"
}, 1);

// 4. Expand the back face to full screen (simulate takeover)
tl.to("#animatedCard", {
  width: "100vw",
  height: "100vh",
  borderRadius: 0,
  duration: 1,
  ease: "power2.inOut"
}, 1.1);
