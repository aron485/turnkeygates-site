
function revScroll(dir){var t=document.getElementById('revtrack');if(!t)return;var c=t.querySelector('.rev');var step=c?c.offsetWidth+20:340;t.scrollBy({left:dir*step,behavior:'smooth'});}

/* LeadConnector popup on every CTA button */
(function(){
  var POP='https://api.leadconnectorhq.com/widget/form/9LfT887oA9b4mgyQvhjF?notrack=true';
  var modal=null;
  function build(){
    modal=document.createElement('div');
    modal.className='lc-modal';modal.setAttribute('role','dialog');modal.setAttribute('aria-modal','true');
    modal.innerHTML='<div class="lc-modal__bd"></div><div class="lc-modal__box"><button class="lc-modal__x" aria-label="Close form">&times;</button><div class="lc-modal__scroll"><iframe src="'+POP+'" title="Request a Free Estimate" scrolling="yes"></iframe></div></div>';
    document.body.appendChild(modal);
    modal.querySelector('.lc-modal__bd').addEventListener('click',close);
    modal.querySelector('.lc-modal__x').addEventListener('click',close);
    document.addEventListener('keydown',function(e){if(e.key==='Escape')close();});
  }
  function open(e){if(e){e.preventDefault();}if(!modal){build();}modal.classList.add('is-open');document.documentElement.style.overflow='hidden';}
  function close(){if(modal){modal.classList.remove('is-open');document.documentElement.style.overflow='';}}
  function isCTA(a){
    var href=(a.getAttribute('href')||'');
    var t=(a.textContent||'').toLowerCase().replace(/\s+/g,' ').trim();
    if(/free quote|free estimate|free consultation|get a quote|get a free/.test(t))return true;
    if(/(^|\/)contact-us\/?$/.test(href))return true;
    if(href==='#hero-form')return true;
    return false;
  }
  function wire(){
    var links=document.getElementsByTagName('a');
    for(var i=0;i<links.length;i++){var a=links[i];
      if(a.className.indexOf('city')>-1)continue;
      if(a.getAttribute('data-lc')==='1')continue;
      if(isCTA(a)){a.setAttribute('data-lc','1');a.addEventListener('click',open);}
    }
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',wire);else wire();
})();
