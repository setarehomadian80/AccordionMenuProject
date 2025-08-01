const headers = document.querySelectorAll(".h2");
const myP = document.querySelectorAll(".accordion > .accordion-item > div > p");
const p = document.getElementsByTagName('p')

for (let i = 0; i < myP.length; i++) {
  let temp = myP[i].clientHeight;
  // myP[i].setAttribute('name' , 'value')
  myP[i].setAttribute("data-h", temp);
  myP[i].style.height = "0";
}

headers.forEach((headers, index) => {
  headers.addEventListener("click", () => {
    for (let i = 0; i < myP.length; i++) {
      if (i === index) {
        toggleclick(myP[i]);
      } 
    }
  });
});

function toggleclick(p){
  
  let temp = p.getAttribute("data-h");
  let h = p.style.height;

  if (h === "0px" || h === "") {
    p.style.height  = temp + "px";
  } else {
    p.style.height = "0px";
  }
}
