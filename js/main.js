
// let h1Arr = document.getElementsByClassName('title'); //document.getElementsByTagName('h1');
// for(let index in h1Arr){
//   h1Arr[index].innerText = "Salem Alem!!";
// }
// console.log(h1Arr);

// let discraption = document.getElementById('discraption');
// discraption.style = "font-size:25px";
// discraption.innerText = "hello";
// discraption.innerHTML = '<a href="https://elorda.com">Elorda IT</a>';

// let discraption =  document.querySelector('.title');

// let subTitles =  document.querySelectorAll('h1');
// for(var item of subTitles){
//   item.innerHTML = 'Wa hhahaahhaha';
// }


// let names = new Array('Nurbol','Erlan','Asyl','Talant','Jhon');
// let ul = document.querySelector('#student-list');
// for(let name of names){
//   let li = document.createElement('li');
//   li.innerText = name;
//   ul.appendChild(li);
// }


const getWords = async ()=>{
  const response = await fetch('https://www.sozdikqor.org/api/query/all',
  {"method":'post'});
  const words = await response.json();

  let tbody = document.querySelector('.word-list tbody'); //Html element
  let trIndex = 0; //Number
  for(let key in words){
    let tr = document.createElement('tr'); //Html Element
    //Index #
    let tdIndex  = document.createElement('td');
    tdIndex.innerText = ++trIndex;
    tr.appendChild(tdIndex);
    //local Key
    let td  = document.createElement('td');
    td.innerText = key;
    tr.appendChild(td);
    //local value

    let innerJson = words[key];

    for(let innerKey in innerJson){
      let innerTd  = document.createElement('td');
      innerTd.innerText = words[key][innerKey];
      tr.appendChild(innerTd);
    }
    // Manage
     let tdManage = document.createElement('td');
     tdManage.innerHTML = '<button>View</button>';
     tr.appendChild(tdManage);
    //tbody
    tbody.appendChild(tr);
  }
  const loadingDiv = document.querySelector('#loading');
  loadingDiv.style = 'display:none;';
};
document.addEventListener('DOMContentLoaded',getWords);