const header=document.querySelector('.header');
const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('#nav');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>115));
menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

document.querySelectorAll('.filters button').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('.filters button').forEach(b=>b.classList.remove('active'));
  button.classList.add('active');
  document.querySelectorAll('.project-card').forEach(card=>card.classList.toggle('hidden',button.dataset.filter!=='all'&&card.dataset.cat!==button.dataset.filter));
}));

document.querySelector('#quoteForm').addEventListener('submit',event=>{
  event.preventDefault();
  const toast=document.querySelector('#toast');
  toast.classList.add('show');
  event.currentTarget.reset();
  setTimeout(()=>toast.classList.remove('show'),3500);
});

const reveal=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting){entry.target.animate([{opacity:0,transform:'translateY(22px)'},{opacity:1,transform:'translateY(0)'}],{duration:650,easing:'cubic-bezier(.2,.7,.2,1)',fill:'both'});reveal.unobserve(entry.target)}
}),{threshold:.12});
document.querySelectorAll('.solution-card,.project-card,.process-grid article,.features>div').forEach(el=>reveal.observe(el));
