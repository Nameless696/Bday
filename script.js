// Create floating flowers
function createFloatingFlowers() {
    const container = document.getElementById('floatingFlowers');
    const flowers = ['🌹', '🌸', '🌺', '🌷', '💐', '🌼'];
    
    setInterval(() => {
        const flower = document.createElement('div');
        flower.className = 'floating-flower';
        flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
        flower.style.left = Math.random() * 100 + '%';
        flower.style.animationDuration = (Math.random() * 5 + 8) + 's';
        flower.style.fontSize = (Math.random() * 20 + 20) + 'px';
        
        container.appendChild(flower);
        
        setTimeout(() => {
            flower.remove();
        }, 15000);
    }, 800);
}

// Create sparkles
function createSparkles() {
    const container = document.getElementById('sparkles');
    
    setInterval(() => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 2 + 's';
        
        container.appendChild(sparkle);
        
        setTimeout(() => {
            sparkle.remove();
        }, 2000);
    }, 300);
}

// Create confetti explosion
function createConfetti() {
    const container = document.getElementById('confettiContainer');
    const colors = ['#FF69B4', '#FF1493', '#87CEEB', '#FFD700', '#FF6347', '#9370DB', '#00CED1'];
    const shapes = ['●', '■', '▲', '★', '♥'];
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.textContent = shapes[Math.floor(Math.random() * shapes.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-20px';
            confetti.style.color = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.fontSize = (Math.random() * 20 + 15) + 'px';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            confetti.style.animationDelay = (Math.random() * 0.5) + 's';
            
            container.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }, i * 20);
    }
}

// Create hearts trail that follows cursor
function createHeartsTrail() {
    const container = document.getElementById('heartsTrail');
    const hearts = ['💕', '💖', '💗', '💝', '💘'];
    
    document.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.8) { // Only create occasionally
            const heart = document.createElement('div');
            heart.className = 'trail-heart';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.left = e.clientX + 'px';
            heart.style.top = e.clientY + 'px';
            
            container.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 1000);
        }
    });
}

// Create wish bubbles
let activeBubbles = 0;
const maxBubbles = 15; // Increased from 8 to 15 for more screen coverage

function createWishBubbles() {
    const container = document.getElementById('wishBubbles');
    const wishes = [
        'You\'re amazing! 💖',
        'Beautiful soul ✨',
        'My happiness 🌸',
        'Forever yours 💕',
        'You complete me 💝',
        'My sunshine ☀️',
        'Sweet angel 👼',
        'Perfect for me 💗',
        'My everything 🌟',
        'Always & forever 💍',
        'You\'re precious 💎',
        'My dream girl 🦋',
        'So grateful for you 🙏',
        'You light up my life 💫',
        'My best friend 🤗'
    ];
    
    wishes.forEach((wish, index) => {
        setTimeout(() => {
            createSingleBubble(wish, container, wishes);
        }, index * 1000);
    });
}

function createSingleBubble(wish, container, wishesArray) {
    if (activeBubbles >= maxBubbles) return;
    
    const bubble = document.createElement('div');
    bubble.className = 'wish-bubble';
    bubble.textContent = wish;
    bubble.style.left = (Math.random() * 85 + 5) + '%';
    bubble.style.top = (Math.random() * 70 + 10) + '%';
    bubble.style.animationDelay = (Math.random() * 2) + 's';
    
    activeBubbles++;
    
    bubble.addEventListener('click', function() {
        this.classList.add('pop');
        activeBubbles--;
        
        setTimeout(() => {
            this.remove();
            
            // Create a new bubble after a short delay
            setTimeout(() => {
                const randomWish = wishesArray[Math.floor(Math.random() * wishesArray.length)];
                createSingleBubble(randomWish, container, wishesArray);
            }, 500);
        }, 500);
    });
    
    container.appendChild(bubble);
}

// Add interactive hover effects to messages
function addInteractiveEffects() {
    const messages = document.querySelectorAll('.message');
    
    messages.forEach(message => {
        message.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        message.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// Create hearts on click
function createHeart(x, y) {
    const heart = document.createElement('div');
    heart.textContent = '💕';
    heart.style.position = 'fixed';
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    heart.style.fontSize = '30px';
    heart.style.pointerEvents = 'none';
    heart.style.zIndex = '1000';
    heart.style.animation = 'floatUp 2s ease-out forwards';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 2000);
}

// Add click effect
document.addEventListener('click', (e) => {
    createHeart(e.clientX, e.clientY);
});

// Add float up animation
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
        100% {
            opacity: 0;
            transform: translateY(-100px) scale(1.5);
        }
    }
`;
document.head.appendChild(style);

// Create boom effect
function createBoom(x, y) {
    const boomEmojis = ['💥', '✨', '🎆', '🎇', '⭐'];
    
    // Create multiple boom effects
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const boom = document.createElement('div');
            boom.className = 'boom';
            boom.textContent = boomEmojis[Math.floor(Math.random() * boomEmojis.length)];
            boom.style.left = (x + (Math.random() - 0.5) * 100) + 'px';
            boom.style.top = (y + (Math.random() - 0.5) * 100) + 'px';
            
            document.body.appendChild(boom);
            
            setTimeout(() => {
                boom.remove();
            }, 1000);
        }, i * 100);
    }
}

// Create flying kiss effect
function createFlyingKisses(x, y) {
    const kissEmojis = ['💋', '😘', '💕', '💖', '💗'];
    
    // Create multiple flying kisses in different directions
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const kiss = document.createElement('div');
            kiss.className = 'flying-kiss';
            kiss.textContent = kissEmojis[Math.floor(Math.random() * kissEmojis.length)];
            kiss.style.left = x + 'px';
            kiss.style.top = y + 'px';
            
            // Random direction
            const angle = (i * 45) * Math.PI / 180;
            const distance = 200 + Math.random() * 100;
            const endX = Math.cos(angle) * distance;
            const endY = Math.sin(angle) * distance;
            
            kiss.style.setProperty('--endX', endX + 'px');
            kiss.style.setProperty('--endY', endY + 'px');
            
            // Update animation to use custom properties
            kiss.style.animation = `flyingKiss${i} 2s ease-out forwards`;
            
            const styleSheet = document.createElement('style');
            styleSheet.textContent = `
                @keyframes flyingKiss${i} {
                    0% {
                        opacity: 1;
                        transform: translate(0, 0) scale(1) rotate(0deg);
                    }
                    100% {
                        opacity: 0;
                        transform: translate(${endX}px, ${endY}px) scale(0.5) rotate(360deg);
                    }
                }
            `;
            document.head.appendChild(styleSheet);
            
            document.body.appendChild(kiss);
            
            setTimeout(() => {
                kiss.remove();
                styleSheet.remove();
            }, 2000);
        }, i * 50);
    }
}

// Global music state
let isMusicPlaying = false;

// Play background music
function playMusic() {
    const music = document.getElementById('bgMusic');
    const musicControl = document.getElementById('musicControl');
    if (music && !isMusicPlaying) {
        music.volume = 0.3; // Set volume to 30%
        music.play().then(() => {
            isMusicPlaying = true;
            if (musicControl) {
                musicControl.textContent = '🎶';
                musicControl.classList.add('playing');
                musicControl.title = 'Click to pause music';
            }
        }).catch(e => {
            console.log('Music autoplay prevented. User interaction required.');
        });
    }
}

// Handle reveal button click
function handleRevealClick(event) {
    const button = event.target.closest('.reveal-button');
    if (!button) return;
    
    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    
    // Play music
    playMusic();
    
    // Create boom effect
    createBoom(x, y);
    
    // Create flying kisses after a short delay
    setTimeout(() => {
        createFlyingKisses(x, y);
    }, 300);
    
    // Create confetti explosion
    setTimeout(() => {
        createConfetti();
    }, 600);
    
    // Hide button and show messages after effects
    setTimeout(() => {
        document.getElementById('buttonContainer').style.display = 'none';
        const messageBox = document.getElementById('messageBox');
        messageBox.classList.remove('hidden');
        messageBox.classList.add('show');
    }, 1000);
}

// Initialize all effects when page loads
window.addEventListener('load', () => {
    createFloatingFlowers();
    createSparkles();
    addInteractiveEffects();
    createHeartsTrail();
    
    // Create wish bubbles after a delay
    setTimeout(() => {
        createWishBubbles();
    }, 3000);
    
    // Add button click listener
    const revealButton = document.getElementById('revealButton');
    if (revealButton) {
        revealButton.addEventListener('click', handleRevealClick);
    }
    
    // Setup music control - FIXED VERSION
    setupMusicControl();
    
    // Setup Hello Kitty hover effect
    setupHelloKittyEffect();
    
    // Setup photo modal
    setupPhotoModal();
});

// Music control setup function
function setupMusicControl() {
    const musicControl = document.getElementById('musicControl');
    const bgMusic = document.getElementById('bgMusic');
    
    if (!musicControl || !bgMusic) {
        console.log('Music elements not found');
        return;
    }
    
    // Use both click and touchstart for mobile support
    const toggleMusic = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        if (isMusicPlaying) {
            bgMusic.pause();
            musicControl.textContent = '🎵';
            musicControl.classList.remove('playing');
            musicControl.title = 'Click to play music';
            isMusicPlaying = false;
        } else {
            bgMusic.volume = 0.3;
            const playPromise = bgMusic.play();
            
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    musicControl.textContent = '🎶';
                    musicControl.classList.add('playing');
                    musicControl.title = 'Click to pause music';
                    isMusicPlaying = true;
                }).catch(err => {
                    console.log('Music playback failed:', err);
                    alert('Please tap the music button again to play');
                });
            }
        }
    };
    
    musicControl.addEventListener('click', toggleMusic);
    musicControl.addEventListener('touchstart', toggleMusic, { passive: false });
}

// Hello Kitty hover effect
function setupHelloKittyEffect() {
    const helloKitty = document.querySelector('.hello-kitty');
    if (helloKitty) {
        helloKitty.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        helloKitty.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    }
}

// Photo modal setup function
function setupPhotoModal() {
    const couplePhoto = document.querySelector('.couple-photo');
    const photoModal = document.getElementById('photoModal');
    const closeModal = document.getElementById('closeModal');

    if (couplePhoto && photoModal) {
        couplePhoto.addEventListener('click', function(e) {
            e.stopPropagation();
            photoModal.classList.add('active');
        });
    }

    if (closeModal && photoModal) {
        closeModal.addEventListener('click', function(e) {
            e.stopPropagation();
            photoModal.classList.remove('active');
        });
        
        // Close modal when clicking outside the image
        photoModal.addEventListener('click', function(e) {
            if (e.target === photoModal) {
                photoModal.classList.remove('active');
            }
        });
    }
}

