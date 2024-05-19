let count = 10;
const apiKey = "h2sOAb1U_VuTkPdIEPiZj0WZUnGPhdA2tGG6enhzT30";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
let dataArr = [];
let allImgCon = document.getElementById("con");


function display(){
    dataArr.forEach((photo)=>{
        let atag = document.createElement("a");
        atag.href = photo.links.html;
        atag.target = "_blank";
        let img = document.createElement("img");
        img.src = photo.urls.regular;
        atag.append(img);
        allImgCon.append(atag);
    })
}


async function modual(){
    let repo = await fetch(apiUrl);
    dataArr = await repo.json();
    display();
}
window.addEventListener("scroll" , ()=>{
    if(window.scrollY + window.innerHeight >=  document.body.offsetHeight){
        modual();
    }
})

modual();