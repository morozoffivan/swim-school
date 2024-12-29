document.addEventListener("DOMContentLoaded", () => {
  const navBtn = document.querySelector(".menu"),
        nav = document.querySelector(".navbar"),
        closeBtn = document.querySelector('.close'),
        body = document.querySelector('body');

  function adaptive() {
    function adaptiveWindow(selector_1, selector_2) {
      window.innerWidth < 1000
      ? selector_1.classList.toggle("hidden")
      : selector_2.classList.toggle("hidden");
    }

    adaptiveWindow(nav, navBtn);
  }

  function hide(selector){
    selector.classList.toggle('hidden');
    selector.classList.toggle('nav-column');
    selector.classList.toggle('font-size-nav-mobile');
    selector.classList.toggle('fixed-position');
}

  adaptive();
  
  navBtn.addEventListener('click', ()=>{
    hide(nav);
    body.classList.toggle('background-color-body');
  })

  closeBtn.addEventListener('click', () =>{
    hide(nav);
    body.classList.toggle('background-color-body');
  })
});
