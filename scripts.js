// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Animation for hero section
gsap.from(".hero", {
    opacity: 0,
    duration: 1,
    y: -50,
    scrollTrigger: {
        trigger: ".hero",
        start: "top 80%", // Start animation when 80% of .hero is in view
        end: "bottom 20%", // End animation when 20% of .hero is in view
        scrub: 1, // Smooth scrubbing effect
    }
});

// Animation for features section
gsap.from(".features", {
    opacity: 0,
    duration: 1,
    y: 50,
    scrollTrigger: {
        trigger: ".features",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
    }
});

// Animation for testimonials section
gsap.from(".testimonials", {
    opacity: 0,
    duration: 1,
    y: 50,
    scrollTrigger: {
        trigger: ".testimonials",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
    }
});
