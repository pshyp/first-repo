// let title = document.getElementById("mainheading");
// console.log(title);
        // let listitems = document.getElementsByClassName("listitems");
        // console.log(listitems);

// selecting elements by tag name
        // let itemstag= document.getElementsByTagName('li');
        // console.log(itemstag);
//selecting elements by query selector
        // let x = document.querySelectorAll('div');
//         // console.log(x);
// // adding color to a dom code 
//         //         const x= document.getElementById('mainheading');
//         //         console.log(x);
//         //         x.style.color='red';

// // Adding color to multiple elements 

//         // const x = document.getElementsByTagName('li');
//         // console.log(x);
//         // for (let i = 0; i < x.length; i++){ 
//         //     x[i].style.color = 'blue';
// //         // }

// // //create a new element 

// // const ul = document.querySelector('ul');
// // const li = document.createElement('li');
// // ul.append(li);
// // li.innerText=" The shumilator";

// // //modifying attributes classes and 
// // // li.setAttribute('id', 'main_heading');

// // //add a class 
// //     li.classList.add('listitems');
// // //remove from list 
// // li.remove();

// // TRAVERSING THE DOM 

// // let x =document.querySelector('ul');
// // // console.log(x.childNodes);
// // x.childNodes[1].style.backgroundColor='green';


// // x.firstElementChild.style.backgroundColor='blue';
// // x.lastElementChild.style.color= 'red';

// // x.nextSibling.style.backgroundColor='green';
// // x.previousSibling.style.backgroundColor='green';

// // EVENT LISTENERS 
//  const buttonmain= document.querySelector('.enter');

// function altertbtn (){
//     alert("i love java");
// }

// buttonmain.addEventListener("click", altertbtn);

// const ChangeColor =document.querySelector('.event_1');

// function changeBoxcolor(){
//     ChangeColor.style.backgroundColor="red";

// }
// ChangeColor.addEventListener("mouseover", changeBoxcolor);


// const hiddenContent = document.querySelector('.hidden');
// const revealButton = document.querySelector('.material-symbols-outlined');

// function revealContent() {
//   hiddenContent.classList.toggle('hidden');
// }

// revealButton.addEventListener('click', revealContent);

// //  revealcontent.addEventListener('click', revealcontent);



//  //EVENT PROPAGATION

//  window.addEventListener("click", function(){
//         console.log("window");
//  },true);


//  document.addEventListener("click", function(){

//         console.log("document");
//  },true);

//  document.querySelector(".first_circle").addEventListener("click", function(){
//         console.log("first circle");
//  },true);

//  document.querySelector(".second_circle").addEventListener("click",function(){
//         console.log("second circle")
//  }, true);
//  document.querySelector(".click").addEventListener("click", function(e){
//         console.log(e.target.innerText="clicked!");
//  }, true);

//  //event delegation
//  document.querySelector('.football').addEventListener('click', function(e){
//         console.log("football is clicked")
//         const target=e.target;

//         if (target.matches('li')){
//                 target.style.backgroundColor ='lightgrey'
//         }
//  })

 //automating this 
document.querySelector('.lastlast').addEventListener('click', function(e){
    console.log(e.target.getAttribute("id") + ' is clicked');
    const target = e.target;
    if (target.matches('li')){
        target.style.backgroundColor = 'lightgrey';
    }
});
