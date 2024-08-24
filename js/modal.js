const albums=document.querySelectorAll('.img-for-modal');
const modal=document.querySelector('.modal');
const closeModal=document.querySelector('.close-modal');
const img=document.querySelector('.image-modal');

albums.forEach((album) => {
    album.addEventListener('click', ()=>{
        const imgURL=album.src || album.getAttribute('src');
        img.src=imgURL;
        modal.style.display='block';
    });
});

closeModal.addEventListener('click', ()=>{
    modal.style.display='none';
});





