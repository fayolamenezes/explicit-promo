gsap.registerPlugin(ScrollTrigger);

const isMobile = window.matchMedia("(max-width: 768px)").matches;
const isTablet = window.matchMedia("(max-width: 1024px)").matches;

// HERO CARD ANIMATION
if (!isMobile) {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "+=250%",
      scrub: true,
      pin: true
    }
  });

  tl.to("#animatedCard", {
    y: "-60vh",
    rotate: 0,
    scale: 1.05,
    ease: "power3.out"
  }, 0);

  tl.to(".hero-content", {
    scale: 0.7,
    opacity: 0,
    ease: "power2.out"
  }, 0);

  tl.to(".flip-card-inner", {
    rotateY: 180,
    ease: "power2.inOut"
  }, 1);

  tl.to("#animatedCard", {
    width: "100vw",
    height: "100vh",
    borderRadius: 0,
    top: 0,
    translateY: 0,
    ease: "power2.inOut"
  }, 1.1);

  tl.to(".card-back-content", {
    opacity: 1,
    y: -80,
    duration: 1,
    ease: "power3.out"
  }, 1.6);
} else {
  // Simplified animation for mobile
  gsap.set(".flip-card-inner", { rotateY: 180 });
  gsap.set(".hero-content", { scale: 0.9, opacity: 0 });
  gsap.set("#animatedCard", {
    width: "100vw",
    height: "auto",
    borderRadius: 0
  });
  gsap.set(".card-back-content", { opacity: 1 });
}

// FEATURES FADE-IN
gsap.utils.toArray(".feature-block").forEach((block, i) => {
  gsap.to(block, {
    scrollTrigger: {
      trigger: block,
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    opacity: 1,
    y: 0,
    duration: 0.2,
    ease: "power2.out",
    delay: i * 0.1
  });
});

// BLACK SLIDE TRANSITION
if (!isMobile) {
  let slideTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#whoCanUseWrapper",
      start: "top top",
      end: () => "+=" + window.innerHeight,
      scrub: true,
      pin: true
    }
  });

  slideTimeline
    .fromTo("#blackSlide", { x: "100vw" }, { x: "0vw", ease: "power2.inOut" }, 0.2)
    .to("#blackSlide", { x: "-100vw", ease: "power2.inOut" }, 0.7);
} else {
  // Mobile fallback: just fade it in
  gsap.from("#blackSlide", {
    scrollTrigger: {
      trigger: "#blackSlide",
      start: "top 90%",
    },
    x: "100vw",
    duration: 1,
    ease: "power2.out"
  });
}

// GROWTH SECTION TEXT
gsap.utils.toArray(".growth-step").forEach((step, i) => {
  gsap.to(step, {
    scrollTrigger: {
      trigger: step,
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  });
});

gsap.utils.toArray(".stat-content").forEach((content, i) => {
  gsap.to(content, {
    scrollTrigger: {
      trigger: content,
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  });
});

// TESTIMONIAL SWITCHING
document.querySelectorAll(".testimonial-preview").forEach(preview => {
  preview.addEventListener("click", () => {
    const id = preview.dataset.id;
    document.querySelectorAll(".testimonial-preview").forEach(p => p.classList.remove("active"));
    preview.classList.add("active");
    document.querySelectorAll(".testimonial-card").forEach(card => {
      card.classList.remove("active");
      if (card.dataset.id === id) card.classList.add("active");
    });
  });
});

// SCROLL BUTTONS FOR TESTIMONIAL
document.querySelector('.up-btn')?.addEventListener('click', () => {
  document.getElementById('testimonialList')?.scrollBy({ top: -80, behavior: 'smooth' });
});
document.querySelector('.down-btn')?.addEventListener('click', () => {
  document.getElementById('testimonialList')?.scrollBy({ top: 80, behavior: 'smooth' });
});

// TESTIMONIAL REVEAL
gsap.from(".testimonial-section", {
  scrollTrigger: {
    trigger: ".testimonial-section",
    start: "top bottom"
  },
  y: 100,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

// FAQ INTERACTION
document.querySelectorAll(".faq-item").forEach(item => {
  const toggle = item.querySelector(".toggle-btn");
  const close = item.querySelector(".close-btn");
  const answer = item.querySelector(".faq-answer");

  toggle.addEventListener("click", () => {
    answer.style.display = "block";
    toggle.style.display = "none";
  });

  close.addEventListener("click", () => {
    answer.style.display = "none";
    toggle.style.display = "inline-block";
  });
});

// CTA ANIMATION
gsap.from(".cta-section", {
  scrollTrigger: {
    trigger: ".cta-section",
    start: "top bottom"
  },
  y: 100,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out"
});

// NEWSLETTER FORM
document.getElementById("newsletter-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const emailInput = document.getElementById("newsletter-email");
  const errorMsg = document.getElementById("email-error");
  const email = emailInput.value.trim();

  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!isValid) {
    errorMsg.style.display = "block";
  } else {
    errorMsg.style.display = "none";
    alert("Subscribed with: " + email);
    emailInput.value = "";
  }
});
