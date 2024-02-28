document.addEventListener('DOMContentLoaded', () => {
    const content = [
        {
            phrase: "crater",
            text: "A hole as a passage from one realm to another",
            imgSrc: "gateway.png",
            imgAlt: "Crater Image"
        },
        {
            phrase: "revelation",
            text: "A hole as a passage from one realm to another",
            imgSrc: "gateway.png",
            imgAlt: "Revelation Image"
        },
        {
            phrase: "orifice",
            text: "A hole as a passage from one realm to another",
            imgSrc: "gateway.png",
            imgAlt: "Orifice Image"
        },
        {
            phrase: "exit",
            text: "A hole as a passage from one realm to another",
            imgSrc: "gateway.png",
            imgAlt: "Exit Image"
        },
        {
            phrase: "gateway",
            text: "A hole as a passage from one realm to another",
            imgSrc: "gateway.png",
            imgAlt: "Gateway Image"
        },
        {
            phrase: "vacancy",
            text: "A hole as a passage from one realm to another",
            imgSrc: "chasm.png",
            imgAlt: "Vacancy Image"
        },
        {
            phrase: "wound",
            text: "A hole as a passage from one realm to another",
            imgSrc: "chasm.png",
            imgAlt: "Wound Image"
        }
    ];
    let currentIndex = 0;
    const wordElement = document.getElementById('word');
    const infoText = document.getElementById('infoText');
    const infoImage = document.getElementById('infoImage');
    const textContainer = document.querySelector('.text-container');

    function updateContent() {
        const currentContent = content[currentIndex];
        wordElement.textContent = currentContent.phrase;
        infoText.textContent = currentContent.text;
        infoImage.src = currentContent.imgSrc;
        infoImage.alt = currentContent.imgAlt;
        currentIndex = (currentIndex + 1) % content.length;
    }

    let animationInterval = setInterval(updateContent, 700);

    // Pause the animation when hovering over the text container
    textContainer.addEventListener('mouseover', () => {
        clearInterval(animationInterval);
    });

    // Resume the animation when the mouse leaves the text container
    textContainer.addEventListener('mouseout', () => {
        animationInterval = setInterval(updateContent, 700);
    });

    

    // Overlay controls
    const aboutLink = document.getElementById('aboutLink');
    const contactLink = document.getElementById('contactLink');
    const aboutOverlay = document.getElementById('aboutOverlay');
    const contactOverlay = document.getElementById('contactOverlay');

    aboutLink.addEventListener('click', (event) => {
        event.preventDefault();
        aboutOverlay.style.display = aboutOverlay.style.display === 'block' ? 'none' : 'block';
    });

    contactLink.addEventListener('click', (event) => {
        event.preventDefault();
        contactOverlay.style.display = contactOverlay.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', (event) => {
        if (!aboutOverlay.contains(event.target) && !aboutLink.contains(event.target) && aboutOverlay.style.display === 'block') {
            aboutOverlay.style.display = 'none';
        }
        if (!contactOverlay.contains(event.target) && !contactLink.contains(event.target) && contactOverlay.style.display === 'block') {
            contactOverlay.style.display = 'none';
        }
    });

    aboutOverlay.addEventListener('click', () => aboutOverlay.style.display = 'none');
    contactOverlay.addEventListener('click', () => contactOverlay.style.display = 'none');
});
