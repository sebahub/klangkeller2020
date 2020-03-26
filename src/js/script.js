console.log("Hello");
let navBurger = document.querySelector('.nav_hamburger');
let navBurgerLines = document.querySelectorAll('.line');
let navOffCanvas = document.querySelector('.nav_offCanvas');

console.log(navBurger);
console.log(navBurgerLines);



navBurger.addEventListener('click', function() {
  this.classList.toggle('animation')
    navBurgerLines.forEach(line => {
      line.classList.toggle('animation');
    });
  navOffCanvas.classList.toggle('animation')

})

