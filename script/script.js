document.addEventListener("DOMContentLoaded", () => {
  const navBtn = document.querySelector(".menu"),
        nav = document.querySelector(".navbar"),
        closeBtn = document.querySelector('.close');

  function adaptive() {
    window.innerWidth < 1000
      ? nav.classList.toggle("hidden")
      : navBtn.classList.toggle("hidden");
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
  })

  closeBtn.addEventListener('click', () =>{
    hide(nav);
  })
});
