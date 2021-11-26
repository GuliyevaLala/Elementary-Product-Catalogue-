let items=document.querySelectorAll(".dress-image img")
let baseImage=document.querySelector(".image-box img")
items.forEach(item => {
    item.onclick=function(){
       let imgattr=item.getAttribute("src")
       console.log(imgattr);
       baseImage.setAttribute("src",imgattr)
    }
});