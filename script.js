// DOM Elements
const present = document.getElementById('present');
const presentContent = document.getElementById('presentContent');
const heart = document.getElementById('heart');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const clickIndicator = document.getElementById('clickIndicator');

// Create snowfall
function createSnowfall() {
    const snowflakesContainer = document.querySelector('.snowflakes');
    const snowflakeCount = 50;
    
    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        
        // Random size between 3px and 8px
        const size = Math.random() * 5 + 3;
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        
        // Random starting position
        snowflake.style.left = `${Math.random() * 100}vw`;
        
        // Random opacity
        snowflake.style.opacity = Math.random() * 0.6 + 0.3;
        
        // Random animation duration between 5 and 12 seconds
        const duration = Math.random() * 7 + 5;
        snowflake.style.animationDuration = `${duration}s`;
        
        // Random animation delay
        snowflake.style.animationDelay = `${Math.random() * 5}s`;
        
        snowflakesContainer.appendChild(snowflake);
    }
}

// Present click handler
present.addEventListener('click', function() {
    // Animate present opening
    present.style.transform = 'scale(1.1) rotate(5deg)';
    present.style.transition = 'transform 0.5s ease';
    
    // Hide the present after a short delay
    setTimeout(() => {
        present.style.display = 'none';
        // Show the present content
        presentContent.style.display = 'flex';
        
        // Show the click indicator after a short delay
        setTimeout(() => {
            clickIndicator.style.display = 'flex';
        }, 500);
    }, 500);
});

// Heart click handler
heart.addEventListener('click', function() {
    // Animate heart
    heart.style.transform = 'scale(1.3)';
    setTimeout(() => {
        heart.style.transform = 'scale(1)';
    }, 300);
    
    // Hide the click indicator
    clickIndicator.style.display = 'none';
    
    // Show modal after a short delay
    setTimeout(() => {
        modalOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }, 500);
});

// Modal close handler
modalClose.addEventListener('click', function() {
    modalOverlay.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside of it
modalOverlay.addEventListener('click', function(e) {
    if (e.target === modalOverlay) {
        modalOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modalOverlay.style.display === 'flex') {
        modalOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Create snowfall
    createSnowfall();
    
    // Initially hide the click indicator
    clickIndicator.style.display = 'none';
    
    // Add subtle hover effect to present
    present.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    present.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    // Add a Christmas greeting to the console
    console.log(
        "%c🎄 Merry Christmas, Grandma! 🎄",
        "color: #e74c3c; font-size: 18px; font-weight: bold;"
    );
});