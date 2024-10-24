//declare number to hide
let numberToHide = "10";

//generate random number
boxId = Math.floor(Math.random() * 5) + 1;

//get div we want to hide the number in
divToHideNumbber = document.getElementById(boxId);

let wonAudio = document.getElementById("Won");

//hide number in the selected div
let p = divToHideNumbber.querySelector("p");

p.textContent = numberToHide;

allDivs = document.querySelectorAll(".box");

allDivs.forEach((div) => {
  div.addEventListener("click", () => {
    // window.location.reload()
    const door = div.querySelector(".door");
    const p = div.querySelector("p");

    if (door.style.transform === "translateX(-90px)") {
      door.style.transform = "translateX(0px)";
    } else {
      door.style.transform = "translateX(-90px)";
    }
    const boxText = document.getElementById("boxText");
    if (p.textContent === numberToHide) {
      boxText.textContent = "You clicked the right box";
      wonAudio.play();
    } else {
      boxText.textContent = "You failed";
    }
  });
});
