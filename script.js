window.addEventListener('scroll',function() {
   let scroll = document.querySelector('.up');
   scroll.classList.toggle('active', window.scrollY> 300);
});

function scrollTopTop() {
   window.scrollTo({
      behavior: 'smooth',
      top: 0,
      left: 0 
   });
}