



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

var count = 0;
function showProjects() {  
  const resumeElem = document.querySelector("#resume");
  const projectsElem = document.querySelector("#projects");
  // const codeBtn = document.querySelector("#btn-code");
  // const homeBtn = document.querySelector("#btn-home");

  setTimeout(()=>{ 
    resumeElem.classList.toggle("hide");
    projectsElem.classList.toggle("hide");
    
    document.body.scrollTop = 0; // For Chrome, Safari and Opera 
    document.documentElement.scrollTop = 0; // For IE and Firefox
  }, 500);

  if (count%2!==0) {    
    projectsElem.classList.toggle("fade-out");
    setTimeout(()=>{
      projectsElem.classList.toggle("fade-out");
    }, 500);
  } else {
    resumeElem.classList.toggle("fade-out");
    setTimeout(()=>{
      resumeElem.classList.toggle("fade-out");
    }, 500);
  }
  
    
  count++;
}

function showModal(event) {
  // FIXME: needs to be completed with auto-loading of content, disabled to make link directly to site
  // Get the modal
  var modal = document.getElementById('myModal');
  
  // When the user clicks on the button, open the modal 
  modal.style.display = "block";
  // modal.classList.toggle("fade-in");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      setTimeout(()=>{modal.style.display = "none";modal.classList.toggle("fade-out");},700);
      modal.classList.toggle("fade-out");
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target === modal) {
        setTimeout(()=>{modal.style.display = "none";modal.classList.toggle("fade-out");},700);
        modal.classList.toggle("fade-out");
      }
  }





  // replace modal data with correct info
  // console.log(event.target.tagName);
  const elem = event.target;
  const tag = event.target.tagName;
  var data, name;
  if (tag==="BUTTON") {
    data = elem.dataset.target;
    name = elem.id;
    // console.log(data);
  }

}

function getInnerText(el) {
  var sel, range, innerText = "";
  if (typeof document.selection != "undefined" && typeof document.body.createTextRange != "undefined") {
      range = document.body.createTextRange();
      range.moveToElementText(el);
      innerText = range.text;
  } else if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
      sel = window.getSelection();
      sel.selectAllChildren(el);
      innerText = "" + sel;
      sel.removeAllRanges();
  }
  return innerText;
}

function convertHTML() {
  // Converting live html for "code" tag on resume
  let htmlElem = document.body;
  
  let codeElem = document.getElementById("codeTag");
  codeElem.innerText = "";

  let htmlText = htmlElem.parentNode.innerHTML;
  let find1 = "</"; let re1 = new RegExp(find1, "g");
  let find2 = "<"; let re2 = new RegExp(find2, "g");
  let find3 = ">"; let re3 = new RegExp(find3, "g");

  htmlText = htmlText.replace(re1, "&lt;&sol;");
  htmlText = htmlText.replace(re2, "&lt;");
  htmlText = htmlText.replace(re3, "&gt;");

  codeElem.innerHTML = htmlText;
}

convertHTML();

// event listeners
document.getElementById("btn-code").addEventListener("click", () => {
  showCode();
});

document.getElementById("link-portfolio").addEventListener("click", () => {
  showProjects();
});

document.getElementById("btn-home").addEventListener("click", () => {
  showProjects();
});

// Event listener for modal
// const siteElems = document.getElementsByClassName("site");
// for (var elem of siteElems) {
//   elem.addEventListener("click", (event) => {
//     showModal(event);
//   });
// }

