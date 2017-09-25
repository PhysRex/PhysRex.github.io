

function showCode() {
  const codeElems = document.getElementsByTagName("pre");
  const resumeElem = document.querySelector("#resume");
  const btnElem = document.getElementById("btn-code");
  
  for (elem of codeElems) {
    // setTimeout(()=>{
      elem.classList.toggle("view");
      elem.classList.toggle("slide");
    // }, 500);
    
  }

  btnElem.classList.toggle("invert");

  
  resumeElem.classList.toggle("shift");
  

}



// event listener
document.getElementById("btn-code").addEventListener("click", ()=> {
  showCode();
});
