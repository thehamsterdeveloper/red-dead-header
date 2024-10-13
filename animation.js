const logo = document.querySelector(".logo");
const link = document.querySelectorAll(".link");
const line = document.querySelector(".line");
const arthur = document.querySelector(".arthur");
const rockstar = document.querySelector(".rockstar");
const buttons = document.querySelectorAll(".bottom-left-side button");
const text = document.querySelectorAll(".text");
const red_line = document.querySelector(".red-line");
const letter = document.querySelectorAll(".arthur-letters span");
const title = document.querySelector(".right-side h1");
const paragraph = document.querySelectorAll(".right-side p");
const CTA = document.querySelector(".right-side button");
const social_links = document.querySelectorAll(".social-links img");

let timer = 2;

// had la function ra7 tkhalina nkhdmo b gsap khetra m3a ga3 elements bash manb9awsh n3awdo
const animateElements = (elements, properties, delay = 0) => {
  gsap.to(elements, {
    ...properties,
    delay: delay,
  });
};

// w had la function rah temshi more ma ykhlase timer bash tji smooth
const runAnimations = () => {
  animateElements(logo, {
    top: 0,
    left: 0,
    translateX: "0",
    translateY: "0",
    width: "15%",
    position: "relative",
    ease: "sine.inOut",
    duration: 2,
  });

  animateElements(
    link,
    {
      translateY: 0,
      stagger: { each: 0.1, ease: "power2.inOut" },
    },
    2
  );

  animateElements(
    line,
    {
      height: "450px",
      ease: "power3.inOut",
    },
    2.5
  );

  animateElements(
    arthur,
    {
      opacity: 1,
      translateY: 0,
      ease: "sine.inOut",
    },
    2.5
  );

  animateElements(
    rockstar,
    {
      opacity: 1,
      left: 0,
      ease: "sine.inOut",
    },
    2.5
  );

  animateElements(
    buttons,
    {
      width: "fit-content",
      border: "1px solid #fff",
      padding: "15px 25px",
      stagger: { each: 0.1, ease: "sine.inOut" },
    },
    2.5
  );

  animateElements(
    text,
    {
      opacity: 0.2,
      translateY: 0,
      ease: "sine.inOut",
      stagger: { each: 0.1 },
    },
    2.5
  );

  animateElements(
    red_line,
    {
      width: "220px",
      ease: "sine.inOut",
    },
    2.5
  );

  animateElements(
    letter,
    {
      opacity: 1,
      translateX: 0,
      stagger: { each: 0.1, ease: "sine.inOut" },
      ease: "sine.inOut",
    },
    2.5
  );

  animateElements(
    title,
    {
      translateY: 0,
      opacity: 1,
      ease: "sine.inOut",
    },
    2.5
  );

  animateElements(
    paragraph,
    {
      opacity: 1,
      translateX: 0,
      stagger: { each: 0.1, ease: "sine.inOut" },
      ease: "sine.inOut",
    },
    2.5
  );

  animateElements(
    CTA,
    {
      translateY: 0,
      opacity: 1,
      ease: "sine.inOut",
    },
    2.5
  );

  animateElements(
    social_links,
    {
      translateY: 0,
      opacity: 1,
      stagger: { each: 0.1, ease: "sine.inOut" },
      ease: "sine.inOut",
    },
    2.5
  );
};

// Function to handle the timer and trigger animations
const getTimer = (time) => {
  const interval = setInterval(() => {
    if (time <= 0) {
      clearInterval(interval);
      runAnimations(); // Run animations after the timer ends
      return;
    }
    time--;
  }, 1000);
};

// Set initial position of the logo
gsap.set(logo, {
  position: "absolute",
  top: "50%",
  left: "50%",
  translateX: "-50%",
  translateY: "-50%",
  width: "50%",
});

// Start the timer
getTimer(timer);
