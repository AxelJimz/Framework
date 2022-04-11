$nav__disable = document.querySelector(".nav__disable");
$nav__menu = document.querySelector(".nav__menu");

let nav__disable = true;

$nav__menu.addEventListener("click", () => {
  if (nav__disable === true) {
    $nav__disable.classList.remove("nav__disable--left");
    nav__disable = false;
    console.log("Hola")
  } else {
    $nav__disable.classList.add("nav__disable--left");
    nav__disable = true;
  }
});
