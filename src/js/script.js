function toggleNav() {
  let navButtonLines = document.querySelectorAll(
    ".nav-element-burger-line"
  );
  let navMenu = document.querySelector("nav");
  navMenu.classList.toggle("isOpen");
  navButtonLines.forEach(line => {
    line.classList.toggle("animation");
  });
  // let svgPath = document.querySelector('#logo-path');
  let svgPath = document.querySelector('.logo-svg')
  svgPath.classList.toggle("animation");
  console.log(svgPath);

  
}
