// const progressLine = document.querySelector(".progress-line");
// const totalSetions = document.querySelectorAll("#panel").length;
// gsap.utils.toArray("#panel").forEach((panel, i) => {
//   ScrollTrigger.create({
//     trigger: panel,
//     start: "top center",
//     onEnter: () => {
//       let progress = ((i + 1) / totalSetions) * 100;
//       progressLine.style.width = progress + "%";
//     },
//   });
// });

// const line = gsap.timeline({ paused: "true" });
// line
//   .to(".progress-line", { width: "100%", duration: 0.6, ease: "power.inOut" })
//   .to(".progress-line", { width: "0%", duration: 0.6, ease: "power.inOut" });
// ScrollTrigger.create({
//   trigger: ".panel.two",
//   start: "top center",
//   onEnter: () => line.restart(),
// });
