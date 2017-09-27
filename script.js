

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
  const htmlElem = document.body;
  
  let codeElem = document.getElementById("codeTag");
  codeElem.innerText = "";

  let htmlText = htmlElem.parentNode.innerHTML;
  htmlText = htmlText.replace("</", "&lt;&sol;");
  htmlText = htmlText.replace("<", "&lt;");
  htmlText = htmlText.replace(">", "&gt;");

  codeElem.innerHTML = htmlText;

}

convertHTML();

// event listener
document.getElementById("btn-code").addEventListener("click", ()=> {
  showCode();
});
