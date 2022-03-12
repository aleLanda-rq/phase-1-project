const url="http://localhost:3000"
fetch(url + `/cats/${Math.floor(Math.random()*10)+1}`)
.then((res)=>res.json())
.then((data)=>catDetails(data))

const card=document.querySelector('.container')
const textBox=document.querySelector('#text_box')
const facts=document.querySelector("#cat-description")
const image=document.querySelector('#image1')
const commentText=document.querySelector('#comment-text-box')

function catDetails(cat){
image.src=cat.image
facts.innerText=cat.fact
textBox.innerHTML=cat.comment
console.log(textBox.innerHTML)
}


const hearts = document.querySelector("#btn")

hearts.addEventListener("click",() =>{
    hearts.innerHTML = " ❤ "
})


const submit=document.querySelector('#submit')
submit.addEventListener('click',(e)=>{
    e.preventDefault()
    addComment()
})


function addComment(){
   const newComment=document.createElement('ul')
newComment.textContent=commentText.value
textBox.append(newComment)
}











