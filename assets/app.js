
function revScroll(dir){var t=document.getElementById('revtrack');if(!t)return;var c=t.querySelector('.rev');var step=c?c.offsetWidth+20:340;t.scrollBy({left:dir*step,behavior:'smooth'});}
