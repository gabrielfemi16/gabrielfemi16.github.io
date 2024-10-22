const menu = document.getElementById("menu2");

const nav = document.getElementById("nav2")

const close = document.getElementById("close1")

menu.addEventListener("click", () => {
  nav.style.transform="translateX(150px)"
  console.log()
});

close.addEventListener("click",()=>{
    nav.style.transform="translateX(-150px)"
})
