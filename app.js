// let title = document.getElementById("mainheading");
// console.log(title);
        // let listitems = document.getElementsByClassName("listitems");
        // console.log(listitems);

// selecting elements by tag name
        // let itemstag= document.getElementsByTagName('li');
        // console.log(itemstag);
//selecting elements by query selector
        // let x = document.querySelectorAll('div');
        // console.log(x);
// adding color to a dom code 
        //         const x= document.getElementById('mainheading');
        //         console.log(x);
        //         x.style.color='red';

// Adding color to multiple elements 

        // const x = document.getElementsByTagName('li');
        // console.log(x);
        // for (let i = 0; i < x.length; i++){ 
        //     x[i].style.color = 'blue';
        // }

//create a new element 

const ul = document.querySelector('ul');
const li = document.createElement('li');
ul.append(li);
li.innerText=" The shumilator";

//modifying attributes classes and 
// li.setAttribute('id', 'main_heading');

//add a class 
    li.classList.add('listitems');