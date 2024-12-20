let allImgs = Array.from( document.querySelectorAll('.position-relative img') );
let leftArrow = document.querySelector(".left");
let rightArrow =document.querySelector(".right");
let xMark = document.querySelector('.x-mark');
let mainLayer = document.querySelector('.main-layer');
let layer = document.querySelector('.main-layer');
let innerImg = document.querySelector('.inner-img');
let indexOfClickedImage;

for(let i =0 ;i< allImgs.length; i++){

    allImgs[i].addEventListener('click', function(e){
        let imgSrc = e.target.getAttribute('src');
       layer.classList.remove('d-none');

       let clickedImage = e.target;
     innerImg.style.backgroundImage = `url(${imgSrc})`
   

    indexOfClickedImage = allImgs.indexOf(clickedImage);


        
    })
}
function getPrevImg(){
    indexOfClickedImage--;

    if( indexOfClickedImage === -1){

        indexOfClickedImage = allImgs.length -1;

    }

    innerImg.style.backgroundImage = `url(${allImgs[indexOfClickedImage].getAttribute('src')})`;
    
}

function getNextImg(){
    indexOfClickedImage++;

    if( indexOfClickedImage === allImgs.length){

        indexOfClickedImage =0;

    }

    innerImg.style.backgroundImage = `url(${allImgs[indexOfClickedImage].getAttribute('src')})`;
    
}
function closeImg(){
    layer.classList.add('d-none');
}
leftArrow.addEventListener('click',getPrevImg);
rightArrow.addEventListener('click',getNextImg);
xMark.addEventListener('click',closeImg);


document.addEventListener('keydown', function(e){

    if(layer.classList.contains('d-none')){


        return;
    } 
    
    console.log(e.code);
    
    if(e.code === 'Escape'){
        closeImg();
    }
    else if(e.code === 'ArrowLeft'){
        getPrevImg();
    }
    else if(e.code === 'ArrowRight'){
        getNextImg();
    }

})

mainLayer.addEventListener('click',function(e){

    if(e.target === mainLayer){

        closeImg();
    }
})
