// let counter = 0
// function hello(){
 
//  document.querySelector('h1').innerHTML = ++counter
    //document.querySelector('h1').innerHTML = 'Good bye Brother'
//     if ( counter % 5 === 0){
//         alert(`${counter} is a multiple of five`)
//     }

// }
//  document.addEventListener('DOMContentLoaded', () =>{
//     document.querySelector('button').onclick = hello
//  })

const form = document.querySelector('form')
const input = document.querySelector('#name')

form.onsubmit = ()=>{
    alert(`${input.value}`)
}

// document.addEventListener('DOMContentLoaded', ()=>{

//  form.addEventListener('onsubmit',() =>{
//     alert(`hello ${input.value}`)
//    }  )
// })
//----------------------------------------
// form.addEventListener('submit', ()=>{
//     alert(`${input.value}`)
// })

//-----------------------------------------------------
// document.addEventListener('DOMContentLoaded', ()=>{

//     document.querySelector('#red').onclick = () =>{
//         document.querySelector('h1').style.color = 'red'
//         document.querySelector('h1').style.fontSize ='100px' 
//     }

//     document.querySelector('#blue').onclick = () =>{
//         document.querySelector('h1').style.color = 'blue'
//         document.querySelector('h1').style.fontSize ='150px' 
//     }

//     document.querySelector('#green').onclick = () =>{
//         document.querySelector('h1').style.color = 'green'
//         document.querySelector('h1').style.fontSize ='200px' 
//     }
//  })