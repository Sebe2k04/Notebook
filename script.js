var plus=document.getElementById("plus");
var popupbox=document.querySelector(".popupbox");
var popupback=document.querySelector(".popupback");
var doneadd=document.getElementById("doneadd");
var canceladd=document.getElementById("canceladd");
var bookresult=document.getElementById("bookresult");
var authorresult=document.getElementById("authorresult");
var descriptionresult=document.getElementById("descriptionresult");
var book=document.getElementById("book");
var author=document.getElementById("author");
var description=document.getElementById("description");
var bookscontainer=document.querySelector(".bookscontainer");


plus.addEventListener("click",function(){
    popupbox.style.display="block";
    popupback.style.display="block";
})

doneadd.addEventListener("click",function(event){
    event.preventDefault();
    popupbox.style.display="none"; 
    popupback.style.display="none";
    var div=document.createElement("div")
    div.setAttribute("class","cards");
    div.innerHTML=`<h1>${book.value}</h1>
    <h4>${author.value}</h4>
    <p>${description.value}</p>`+
    '<button id="btndel" onclick="delcard(event)">delete</button>'
    bookscontainer.append(div);
})
canceladd.addEventListener("click",function(event){
    event.preventDefault();
    popupbox.style.display="none";
    popupback.style.display="none";
})

function delcard(event){
    event.target.parentElement.remove();
}


















// var overlay=document.querySelector(".overlay");
// var popupbox=document.querySelector(".popupbox");
// function show(){
//     overlay.style.display="block";
//     popupbox.style.display="block";
// }
// function closepopup(){
//     overlay.style.display="none";
//     popupbox.style.display="none";
// }

// var show=document.getElementById("show")
// show.addEventListener("click",function(){
//     alert('hello')
// })