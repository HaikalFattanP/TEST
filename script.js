document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('carousel-container');
    const nextBtn = document.getElementById('carousel-next');
    const prevBtn = document.getElementById('carousel-prev');

    const getScrollAmount = () => {
        const firstChild = container.querySelector('div');
        // Jarak geser adalah lebar satu slide + gap (24px)
        return firstChild ? firstChild.offsetWidth + 24 : 300;
    };

    if (nextBtn && prevBtn && container) {
        nextBtn.addEventListener('click', () => {
            container.scrollBy({ 
                left: getScrollAmount(), 
                behavior: 'smooth' 
            });
        });

        prevBtn.addEventListener('click', () => {
            container.scrollBy({ 
                left: -getScrollAmount(), 
                behavior: 'smooth' 
            });
        });
    }
});