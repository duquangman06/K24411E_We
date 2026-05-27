// Smooth scrolling animation

const links = document.querySelectorAll('nav a');

links.forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
        });

    });

});


// Simple scroll animation

window.addEventListener('scroll', () => {

    const cards = document.querySelectorAll('.card, .price-card, .review-card');

    cards.forEach(card => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100){
            card.style.opacity = 1;
            card.style.transform = 'translateY(0px)';
        }

    });

});
