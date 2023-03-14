let menu=document.getElementById("menu");
let li=document.createElement('li');
li.textContent=`Home`;

menu.replaceChild(li,menu.firstElementChild);
menu.replaceChild(li,menu.lastElementChild);
menu.removeChild(li,menu.firstElementChild);

//how to clone

let cloneNode=menu.cloneNode(true);
cloneNode.id='clone_id'
document.body.appendChild(cloneNode);

//working with attribute
let classis=document.querySelector('.myclass');
classis.setAttribute('id','myId');
console.log(classis);

const btn=document.getElementsByTagName('button')[0];
btn.setAttribute('name',"myBt");
console.log(btn);

if(btn){
    let target=btn.getAttribute('name');
    console.log(target)
}

console.log(btn.removeAttribute('name'));
console.log(btn);

let isAttribute=classis.hasAttribute('id');
console.log(isAttribute)

//style element
btn.style.color='yellow';
btn.style.backgroundColor='red';
btn.style.padding='5px 15px'
btn.style.borderRadius='5px';
btn.style.border='none';
btn.style.width='100px';
btn.style.cursor='pointer';
btn.style.margin='0 auto';

//manipulating style
 let parahgraph=document.getElementById('para');
 console.log(parahgraph)
 let style=getComputedStyle(parahgraph ,"::first-letter");
 console.log(style.width);
 console.log(style.height);
 console.log(style.fontSize);

 //className
 const p=document.getElementsByClassName('p_tag')[0];
 console.log(p);
 p.className='you';
 console.log(p);
 console.log(p.className);

 //classList
 const menuu=document.querySelector('.menu');
 menuu.classList.add("c_1")
 menuu.style.color='red'
// menuu.classList.remove('c_1')
menuu.classList.replace('c_1','c_2')
 console.log(menuu)

 //element width and Height
let m1=document.getElementById('sy');
let width=m1.offsetWidth;
let height=m1.offsetHeight;
//using cline height and clint weight
let cw=m1.clientWidth;
let ch=m1.clientHeight;
console.log(m1,width,height,cw,ch);

//working width events
//bubling event

function clickeHere() {
    console.log("I am clicking")
  }

  let b1=document.getElementById('b1');
  b1.addEventListener('click',()=>{
    console.log("Button is clicking")
  })

  //event handling
  let a1=document.getElementById('a1');
  a1.onclick=()=>{
    alert("Hi baby")
  }
  console.log(a1);

  //h2
  let h2=document.getElementById('h2');
  h2.addEventListener=('click',()=>{
    console.log("I love u")
  })
  console.log(h2);

  //page load event
  //1.DOMContentLoaded
   document.addEventListener('DOMContentLoaded',()=>{
    alert("Dom is fully loaded");
   })

   //2.load

   addEventListener('load',()=>{
    alert('content is loaded')
   })

  //3.eforeunload
   addEventListener('beforeunload',(e)=>{
    e.preventDefault();
    e.returnValue=''
   })

   //4.unload
   addEventListener('unload',()=>{
    console.log("All data has unloaded");
   })

   //mouse event starts from here
   let truck=document.getElementById('truck');
   console.log(truck)
   truck.innerText='rifat'
   //1.mousedown
   truck.addEventListener('mousedown',(e)=>{
     console.log(e.type)
   })

   //2.mouseup
   truck.addEventListener('mouseup',(e)=>{
    console.log(e.type)
   })

   //3.click
   truck.addEventListener('click',()=>{
    alert('Hi I am abu al shahriar Rifat')
   })

   //4.double click
   truck.addEventListener('dblclick',()=>{
    console.log(`I am a full stack software Enginner`)
   })

    //5.mouseover
    truck.addEventListener('mouseover',()=>{
        console.log(`mouseover is clicking`)
    })

    //6.mousedown
    truck.addEventListener('mousedown',()=>{
        console.log("MouseOver is clicking");
    })

    //7.mousecenter
    truck.addEventListener('mouseenter',()=>{
        console.log('Mousecenter is clicking');
    })

    //8.mouseleave
    truck.addEventListener('mouseleave',()=>{
        console.log("Mouseleave is clicking");
    })
    //9.mousemove
    truck.addEventListener('mousemove',()=>{
        console.log("Mouse is moving");
    })

   //mouse event ends from here

  // key events starts from here
   let message=document.getElementById('message');
   console.log(message)
   //1.keyup
   message.addEventListener('keyup',(e)=>{
    console.log("Key up is clicking",e.type)
   })
   //2.keydown
   message.addEventListener('keydown',(e)=>{
    console.log("Keydown is clicking",e.type)
   })

   //3.keypress
   message.addEventListener('keypress',(e)=>{
    console.log("Key down is clicking",e.key);
   })
  //key events ends from here  

