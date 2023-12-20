let intro = document.querySelector('.intro');
let logo = document.querySelector('.header');
let logoSpan = document.querySelectorAll('.intro-logo');

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 175)
        });

        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{

                setTimeout(()=>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 175)
            })
        }, 1450);

        setTimeout(()=>{
            intro.style.top = '-100vh';
        }, 2700)

        console.log('working...');
})
});
