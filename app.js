// Alphabet data with words and emojis
const alphabetData = {
    'A': { word: 'Apple', emoji: '🍎', color: '#ff6b6b' },
    'B': { word: 'Ball', emoji: '⚽', color: '#4ecdc4' },
    'C': { word: 'Cat', emoji: '🐱', color: '#ffe66d' },
    'D': { word: 'Dog', emoji: '🐶', color: '#a8edea' },
    'E': { word: 'Elephant', emoji: '🐘', color: '#ff6b6b' },
    'F': { word: 'Fish', emoji: '🐟', color: '#4ecdc4' },
    'G': { word: 'Giraffe', emoji: '🦒', color: '#ffe66d' },
    'H': { word: 'House', emoji: '🏠', color: '#a8edea' },
    'I': { word: 'Ice Cream', emoji: '🍦', color: '#ff6b6b' },
    'J': { word: 'Jellyfish', emoji: '🪼', color: '#4ecdc4' },
    'K': { word: 'Kite', emoji: '🪁', color: '#ffe66d' },
    'L': { word: 'Lion', emoji: '🦁', color: '#a8edea' },
    'M': { word: 'Monkey', emoji: '🐵', color: '#ff6b6b' },
    'N': { word: 'Nest', emoji: '🪺', color: '#4ecdc4' },
    'O': { word: 'Octopus', emoji: '🐙', color: '#ffe66d' },
    'P': { word: 'Penguin', emoji: '🐧', color: '#a8edea' },
    'Q': { word: 'Queen', emoji: '👑', color: '#ff6b6b' },
    'R': { word: 'Rabbit', emoji: '🐰', color: '#4ecdc4' },
    'S': { word: 'Sun', emoji: '☀️', color: '#ffe66d' },
    'T': { word: 'Tiger', emoji: '🐯', color: '#a8edea' },
    'U': { word: 'Umbrella', emoji: '☂️', color: '#ff6b6b' },
    'V': { word: 'Violin', emoji: '🎻', color: '#4ecdc4' },
    'W': { word: 'Whale', emoji: '🐋', color: '#ffe66d' },
    'X': { word: 'X-ray', emoji: '🩻', color: '#a8edea' },
    'Y': { word: 'Yacht', emoji: '⛵', color: '#ff6b6b' },
    'Z': { word: 'Zebra', emoji: '🦓', color: '#4ecdc4' }
};

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    initializeAlphabet();
    initializeModeSelector();
    initializeCounting();
    initializeGameModal();
});

// Create alphabet buttons
function initializeAlphabet() {
    const alphabetGrid = document.querySelector('.alphabet-grid');
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    
    letters.forEach(letter => {
        const button = document.createElement('button');
        button.className = 'letter-btn';
        button.textContent = letter;
        button.addEventListener('click', () => showLetter(letter));
        alphabetGrid.appendChild(button);
    });
}

// Show letter information
function showLetter(letter) {
    const data = alphabetData[letter];
    const letterDisplay = document.getElementById('letter-display');
    const letterTitle = document.getElementById('letter-title');
    const letterPhrase = document.getElementById('letter-phrase');
    const letterImage = document.getElementById('letter-image');
    const playGameBtn = document.getElementById('play-game');
    
    letterTitle.textContent = letter;
    letterPhrase.textContent = `${letter} for ${data.word}`;
    letterImage.textContent = data.emoji;
    letterImage.style.background = `linear-gradient(135deg, ${data.color}, ${adjustBrightness(data.color, -20)})`;
    
    // Store current letter for game
    playGameBtn.dataset.letter = letter;
    
    letterDisplay.classList.remove('hidden');
    
    // Scroll to letter display
    letterDisplay.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Close letter display
document.getElementById('close-letter')?.addEventListener('click', () => {
    document.getElementById('letter-display').classList.add('hidden');
});

// Mode selector
function initializeModeSelector() {
    const modeButtons = document.querySelectorAll('.mode-btn');
    const alphabetSection = document.getElementById('alphabet-section');
    const countingSection = document.getElementById('counting-section');
    
    modeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const mode = btn.dataset.mode;
            
            // Update active button
            modeButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Show/hide sections
            if (mode === 'alphabet') {
                alphabetSection.classList.add('active');
                countingSection.classList.remove('active');
            } else {
                alphabetSection.classList.remove('active');
                countingSection.classList.add('active');
            }
        });
    });
}

// Counting functionality
function initializeCounting() {
    const numberButtons = document.querySelectorAll('.number-btn');
    const countingDisplay = document.getElementById('counting-display');
    const countingTitle = document.getElementById('counting-title');
    const countingItems = document.getElementById('counting-items');
    
    numberButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const number = parseInt(btn.dataset.number);
            countingTitle.textContent = `Count to ${number}!`;
            countingItems.innerHTML = '';
            
            // Create items with delay for animation
            for (let i = 0; i < number; i++) {
                setTimeout(() => {
                    const item = document.createElement('div');
                    item.className = 'counting-item';
                    item.textContent = getRandomEmoji();
                    item.style.animationDelay = `${i * 0.1}s`;
                    countingItems.appendChild(item);
                }, i * 100);
            }
            
            countingDisplay.classList.remove('hidden');
            countingDisplay.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
    });
    
    // Close counting display
    document.getElementById('close-counting')?.addEventListener('click', () => {
        countingDisplay.classList.add('hidden');
    });
}

// Get random emoji for counting
function getRandomEmoji() {
    const emojis = ['⭐', '🌟', '💫', '✨', '🎈', '🎉', '🎊', '🎁', '🍎', '🍌', '🍇', '🍓', '🍊', '🍋', '🍉', '🍑', '🍒', '🥝', '🍍', '🥭'];
    return emojis[Math.floor(Math.random() * emojis.length)];
}

// Game modal
function initializeGameModal() {
    const playGameBtn = document.getElementById('play-game');
    const gameModal = document.getElementById('game-modal');
    const closeGameBtn = document.getElementById('close-game');
    
    playGameBtn?.addEventListener('click', () => {
        const letter = playGameBtn.dataset.letter;
        if (letter === 'A') {
            startAppleCuttingGame();
        } else {
            startGenericGame(letter);
        }
    });
    
    closeGameBtn?.addEventListener('click', () => {
        gameModal.classList.add('hidden');
    });
    
    // Close on outside click
    gameModal.addEventListener('click', (e) => {
        if (e.target === gameModal) {
            gameModal.classList.add('hidden');
        }
    });
}

// Apple cutting game
function startAppleCuttingGame() {
    const gameModal = document.getElementById('game-modal');
    const gameTitle = document.getElementById('game-title');
    const gameArea = document.getElementById('game-area');
    const gameInstruction = document.getElementById('game-instruction');
    
    gameTitle.textContent = '🍎 Cut the Apple! 🍎';
    gameInstruction.textContent = 'Click on the apples to cut them!';
    gameArea.innerHTML = '<div class="score">Score: <span id="score">0</span></div>';
    
    let score = 0;
    let applesCut = 0;
    const totalApples = 10;
    
    function createApple() {
        if (applesCut >= totalApples) {
            gameArea.innerHTML = `
                <div style="text-align: center; padding: 50px;">
                    <h2 style="font-size: 3em; color: #667eea;">🎉 Great Job! 🎉</h2>
                    <p style="font-size: 1.5em; margin-top: 20px;">You cut ${score} apples!</p>
                </div>
            `;
            return;
        }
        
        const apple = document.createElement('div');
        apple.className = 'apple';
        apple.textContent = '🍎';
        apple.style.left = Math.random() * (gameArea.offsetWidth - 80) + 'px';
        apple.style.top = Math.random() * (gameArea.offsetHeight - 80) + 'px';
        
        apple.addEventListener('click', () => {
            apple.classList.add('cut');
            score++;
            applesCut++;
            document.getElementById('score').textContent = score;
            
            // Create cut effect
            setTimeout(() => {
                apple.remove();
                if (applesCut < totalApples) {
                    setTimeout(createApple, 500);
                } else {
                    setTimeout(() => {
                        gameArea.innerHTML = `
                            <div style="text-align: center; padding: 50px;">
                                <h2 style="font-size: 3em; color: #667eea;">🎉 Great Job! 🎉</h2>
                                <p style="font-size: 1.5em; margin-top: 20px;">You cut ${score} apples!</p>
                            </div>
                        `;
                    }, 500);
                }
            }, 500);
        });
        
        gameArea.appendChild(apple);
    }
    
    // Start with multiple apples
    for (let i = 0; i < 3; i++) {
        setTimeout(() => createApple(), i * 300);
    }
    
    gameModal.classList.remove('hidden');
}

// Generic game for other letters
function startGenericGame(letter) {
    const data = alphabetData[letter];
    const gameModal = document.getElementById('game-modal');
    const gameTitle = document.getElementById('game-title');
    const gameArea = document.getElementById('game-area');
    const gameInstruction = document.getElementById('game-instruction');
    
    gameTitle.textContent = `${letter} for ${data.word}!`;
    gameInstruction.textContent = `Click on the ${data.word.toLowerCase()}s to collect them!`;
    gameArea.innerHTML = '<div class="score">Collected: <span id="score">0</span></div>';
    
    let score = 0;
    let itemsCollected = 0;
    const totalItems = 8;
    
    function createItem() {
        if (itemsCollected >= totalItems) {
            gameArea.innerHTML = `
                <div style="text-align: center; padding: 50px;">
                    <h2 style="font-size: 3em; color: #667eea;">🎉 Well Done! 🎉</h2>
                    <p style="font-size: 1.5em; margin-top: 20px;">You collected ${score} ${data.word.toLowerCase()}s!</p>
                </div>
            `;
            return;
        }
        
        const item = document.createElement('div');
        item.className = 'apple';
        item.textContent = data.emoji;
        item.style.left = Math.random() * (gameArea.offsetWidth - 80) + 'px';
        item.style.top = Math.random() * (gameArea.offsetHeight - 80) + 'px';
        
        item.addEventListener('click', () => {
            item.classList.add('cut');
            score++;
            itemsCollected++;
            document.getElementById('score').textContent = score;
            
            setTimeout(() => {
                item.remove();
                if (itemsCollected < totalItems) {
                    setTimeout(createItem, 500);
                } else {
                    setTimeout(() => {
                        gameArea.innerHTML = `
                            <div style="text-align: center; padding: 50px;">
                                <h2 style="font-size: 3em; color: #667eea;">🎉 Well Done! 🎉</h2>
                                <p style="font-size: 1.5em; margin-top: 20px;">You collected ${score} ${data.word.toLowerCase()}s!</p>
                            </div>
                        `;
                    }, 500);
                }
            }, 500);
        });
        
        gameArea.appendChild(item);
    }
    
    // Start with multiple items
    for (let i = 0; i < 3; i++) {
        setTimeout(() => createItem(), i * 300);
    }
    
    gameModal.classList.remove('hidden');
}

// Helper function to adjust color brightness
function adjustBrightness(color, percent) {
    const num = parseInt(color.replace("#", ""), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.min(255, Math.max(0, (num >> 16) + amt));
    const G = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + amt));
    const B = Math.min(255, Math.max(0, (num & 0x0000FF) + amt));
    return "#" + (0x1000000 + R * 0x10000 + G * 0x100 + B).toString(16).slice(1);
}
