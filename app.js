
let heading = document.querySelector('.hStyle');
function styleChange(){
    heading.classList.add('hStyle');
}
function remStyle(){
    heading.classList.remove('hStyle');
}
let btnMgn = document.getElementById('headrmBtn');
btnMgn.style.margin = '10px 0px ';
btnMgn.style.fontSize = '1rem';

// image box - jekan teke image slide hbe ( where img will be sliding from )

let imageBox = [ 'img/mohib1.jpg', 'img/mohib2.jpg' , 'img/mohib3.jpg' ];

// img sit - jekane bosbe (where will be sit )

let imageSit = document.querySelector( 'img' );

let disImage = 1;
let length = imageBox.length;
function next(){
    disImage++;
    if(disImage >= length){
        disImage = 0;
        imageSit.src = imageBox[disImage];
    }else{
        imageSit.src = imageBox[disImage];
    }
}
function previous(){
    disImage--;
    imageSit.src = imageBox[disImage];
    if(disImage < 0){
        disImage = length - 1;
        imageSit.src = imageBox[disImage];
    }else{
        imageSit.src = imageBox[disImage];
    }
}