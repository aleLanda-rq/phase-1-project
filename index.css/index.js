fetch('https://aws.random.cat/meow')
.then((res)=>res.json)
.then((data)=>console.log(data))

// function renderCat(cats){
//     const card=document.querySelector('#cat-card')
//     const container=document.createElement('img')
//     // card.src=
//     card.append(container)

// }

// const btn = document.querySelector("#btn");
// const img = document.querySelector("#photo");

// btn.addEventListener('click',()=> {
// console.log('i have been clicked')
// })

// // btn.addEventListener("click", ()=> {
// // //   const XHR = new XMLHttpRequest();
// // console.log('hi')
  
// // //   XHR.onreadystatechange = function() {
// // //     if (XHR.readyState == 4 && XHR.status == 200) {
// // //       img.src = JSON.parse(XHR.responseText).file;  
// // //     }
// // //   }
// // //   XHR.open("GET", "https://aws.random.cat/meow");
// // //   XHR.send();
// // });
