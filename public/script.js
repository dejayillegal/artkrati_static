document.addEventListener('DOMContentLoaded',()=>{
  const year=document.querySelector('[data-year]');
  if(year)year.textContent=new Date().getFullYear();
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',e=>{
      const id=a.getAttribute('href');
      const target=document.querySelector(id);
      if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'});}
    });
  });
  document.querySelectorAll('.filter-pill').forEach(pill=>{
    pill.addEventListener('click',()=>{
      const pressed=pill.getAttribute('aria-pressed')==='true';
      pill.setAttribute('aria-pressed',(!pressed).toString());
    });
  });
  document.querySelectorAll('.card').forEach(card=>{
    card.addEventListener('pointermove',e=>{
      const r=card.getBoundingClientRect();
      card.style.setProperty('--mx',`${e.clientX-r.left}px`);
      card.style.setProperty('--my',`${e.clientY-r.top}px`);
    });
  });
  document.querySelectorAll('[data-lightbox]').forEach(img=>{
    img.addEventListener('click',()=>{
      const src=img.getAttribute('src');
      const overlay=document.createElement('div');
      overlay.className='lightbox';
      overlay.innerHTML=`<img src="${src}" alt="">`;
      overlay.addEventListener('click',()=>overlay.remove());
      document.body.appendChild(overlay);
    });
  });
  document.querySelectorAll('.ba-slider').forEach(slider=>{
    const input=slider.querySelector('input[type="range"]');
    const before=slider.querySelector('.before');
    const update=()=>{before.style.width=`${input.value}%`;};
    input.addEventListener('input',update);
    update();
  });
});
