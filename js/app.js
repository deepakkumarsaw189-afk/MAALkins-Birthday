
const btn=document.getElementById('openBtn');
const music=document.getElementById('bgMusic');

btn.addEventListener('click',()=>{
music.play().catch(()=>{});
document.querySelector('.book-section').scrollIntoView({behavior:'smooth'});

gsap.to('.cover',{rotateY:-170,duration:2});

const txt=`Heyy there!!

Namasteee Namsteeee!!

Tannu jee 😋,

Happiest Birthday to you bacchaaa 😚😚

You're one of my favorite humans!

Keep shining and keep sparkling just the way you do!! 💗🎀`;

let i=0;
const el=document.getElementById('letter');
function type(){
 if(i<txt.length){el.innerHTML+=txt.charAt(i);i++;setTimeout(type,30);}
}
setTimeout(type,1000);

confetti({particleCount:250,spread:180});
});

setInterval(()=>{
const s=document.createElement('div');
s.className='sparkle';
s.innerHTML='✨';
s.style.left=Math.random()*100+'vw';
s.style.top=Math.random()*100+'vh';
document.body.appendChild(s);
setTimeout(()=>s.remove(),2500);
},400);

setInterval(()=>{
const h=document.createElement('div');
h.className='heart';
h.innerHTML='💖';
h.style.left=Math.random()*100+'vw';
h.style.bottom='0';
document.body.appendChild(h);
h.animate([{transform:'translateY(0)'},{transform:'translateY(-110vh)'}],{duration:7000});
setTimeout(()=>h.remove(),7000);
},1000);
