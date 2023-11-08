document.addEventListener("DOMContentLoaded", () => {
  const myDiv = document.querySelector(".myDiv");
  myDiv.addEventListener("mouseover", () => {
    myDiv.style = "background-color:#0094ff;";
  });
  myDiv.addEventListener("mouseout", () => {
    myDiv.style = "background-color:red;";
  });
  myDiv.addEventListener("click", () => {
    alert("Salem!!!");
  });
  const btn = myDiv.querySelector("button");
  btn.addEventListener("click", (ev) => {
    window.location.href = "https://elorda.com";
    ev.stopPropagation();
  });

  const links = document.querySelectorAll("a");
  links.forEach((el) => {
    el.addEventListener("click", (ev) => {
      window.location.href = "ht"+"tps://an"+"kui.kz";
      ev.preventDefault();
      ev.stopPropagation();
    });
  });

  const txt = document.querySelector('#txt');
  txt.addEventListener('keypress',(ev) => {
      if(ev.keyCode == 65){
       let content = txt.value;
       const start = txt.selectionStart;//index
       let newText = content.substring(0,start);
       newText += '@';
       newText += content.substring(start);
        txt.value = newText;
        txt.selectionStart = txt.selectionEnd = start + 1;
        ev.preventDefault();
     
      }else  if(ev.keyCode == 97){
        alert('a');
        ev.preventDefault();
      }
  });
});
