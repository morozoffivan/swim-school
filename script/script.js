document.addEventListener("DOMContentLoaded", () => {
  const navBtn = document.querySelector(".menu"),
    nav = document.querySelector(".navbar");

  function adaptive() {
    window.innerWidth < 1000
      ? nav.classList.toggle("hidden")
      : navBtn.classList.toggle("hidden");
  }

  function hide(selector){
    selector.classList.toggle('hidden');
}

  adaptive();
  
  navBtn.addEventListener('click', ()=>{
        hide(nav);
  })
});
