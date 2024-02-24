document.addEventListener('DOMContentLoaded', () => {
    const content = [
        {
            phrase: "crater",
            text: "A crater can symbolize impact and transformation.",
            imgSrc: "gateway.png", // Update path as needed
            imgAlt: "Crater Image"
        },
        {
            phrase: "revelation",
            text: "A revelation opens new horizons.",
            imgSrc: "gateway.png", // Update path as needed
            imgAlt: "Revelation Image"
        },
        {
            phrase: "orifice",
            text: "An orifice signifies a beginning or an end.",
            imgSrc: "gateway.png", // Update path as needed
            imgAlt: "Orifice Image"
        },
        {
            phrase: "exit",
            text: "Every exit is an entrance to somewhere else.",
            imgSrc: "gateway.png", // Update path as needed
            imgAlt: "Exit Image"
        },
        {
            phrase: "gateway",
            text: "A gateway to new beginnings.",
            imgSrc: "gateway.png", // Update path as needed
            imgAlt: "Gateway Image"
        },
        {
            phrase: "vacancy",
            text: "Vacancy holds the potential for fulfillment.",
            imgSrc: "vacancy.png", // Update path as needed
            imgAlt: "Vacancy Image"
        },
        {
            phrase: "wound",
            text: "A wound marks the site of a past battle.",
            imgSrc: "wound.png", // Update path as needed
            imgAlt: "Wound Image"
        }
    ];
    let currentIndex = 0;
    const wordElement = document.getElementById('word');
    const infoText = document.getElementById('infoText');
    const infoImage = document.getElementById('infoImage');
    const hoverContent = document.getElementById('hoverContent');
    let animationInterval;

    function changeWord() {
        const currentContent = content[currentIndex];
        wordElement.textContent = currentContent.phrase;
        currentIndex = (currentIndex + 1) % content.length;
    }

    function startAnimation() {
        animationInterval = setInterval(changeWord, 700);
    }

    function stopAnimation() {
        clearInterval(animationInterval);
    }

    function updateHoverContent(word) {
        const normalizedWord = word.toLowerCase().trim();
        const contentItem = content.find(item => item.phrase === normalizedWord) || content[0]; // Fallback to the first item if not found
        infoText.textContent = contentItem.text;
        infoImage.src = contentItem.imgSrc;
        infoImage.alt = contentItem.imgAlt;
        hoverContent.style.display = 'flex'; // Ensure flex display to align items as designed
    }

    document.getElementById('text').addEventListener('mouseover', function() {
        stopAnimation(); // Stop the animation when hovering
        updateHoverContent(wordElement.textContent); // Update the hover content based on the current word
    });

    document.getElementById('text').addEventListener('mouseout', function() {
        hoverContent.style.display = 'none'; // Hide the hover content
        startAnimation(); // Resume the animation when not hovering
    });

    startAnimation(); // Start the text animation on load
});






document.addEventListener('DOMContentLoaded', () => {
    const aboutLink = document.getElementById('aboutLink');
    const contactLink = document.getElementById('contactLink');
    const aboutOverlay = document.getElementById('aboutOverlay');
    const contactOverlay = document.getElementById('contactOverlay');

    aboutLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default link behavior
        aboutOverlay.style.display = 'block'; // Show the about overlay
    });

    contactLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default link behavior
        contactOverlay.style.display = 'block'; // Show the contact overlay
    });

    // Close overlays when clicking outside or on overlay itself
    document.addEventListener('click', (event) => {
        if (!aboutOverlay.contains(event.target) && !aboutLink.contains(event.target)) {
            aboutOverlay.style.display = 'none'; // Hide about overlay if clicked outside
        }
        if (!contactOverlay.contains(event.target) && !contactLink.contains(event.target)) {
            contactOverlay.style.display = 'none'; // Hide contact overlay if clicked outside
        }
    });

    // Close overlays when clicking on them
    aboutOverlay.addEventListener('click', () => {
        aboutOverlay.style.display = 'none';
    });

    contactOverlay.addEventListener('click', () => {
        contactOverlay.style.display = 'none';
    });
});
