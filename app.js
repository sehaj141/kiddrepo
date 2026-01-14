// Alphabet data with multiple words and emojis
const alphabetData = {
    'A': [
        { word: 'Apple', emoji: '🍎', color: '#ff6b6b', game: 'cutting' },
        { word: 'Airplane', emoji: '✈️', color: '#4ecdc4', game: 'collect' },
        { word: 'Ant', emoji: '🐜', color: '#ffe66d', game: 'collect' },
        { word: 'Alligator', emoji: '🐊', color: '#a8edea', game: 'collect' },
        { word: 'Arrow', emoji: '➡️', color: '#ff6b6b', game: 'collect' }
    ],
    'B': [
        { word: 'Ball', emoji: '⚽', color: '#4ecdc4', game: 'collect' },
        { word: 'Butterfly', emoji: '🦋', color: '#ffe66d', game: 'collect' },
        { word: 'Banana', emoji: '🍌', color: '#a8edea', game: 'collect' },
        { word: 'Bear', emoji: '🐻', color: '#ff6b6b', game: 'collect' },
        { word: 'Book', emoji: '📚', color: '#4ecdc4', game: 'collect' }
    ],
    'C': [
        { word: 'Cat', emoji: '🐱', color: '#ffe66d', game: 'collect' },
        { word: 'Car', emoji: '🚗', color: '#a8edea', game: 'race' },
        { word: 'Cake', emoji: '🎂', color: '#ff6b6b', game: 'collect' },
        { word: 'Crown', emoji: '👑', color: '#4ecdc4', game: 'collect' },
        { word: 'Crab', emoji: '🦀', color: '#ffe66d', game: 'collect' }
    ],
    'D': [
        { word: 'Dog', emoji: '🐶', color: '#a8edea', game: 'race' },
        { word: 'Duck', emoji: '🦆', color: '#ff6b6b', game: 'collect' },
        { word: 'Dolphin', emoji: '🐬', color: '#4ecdc4', game: 'collect' },
        { word: 'Dinosaur', emoji: '🦕', color: '#ffe66d', game: 'collect' },
        { word: 'Donut', emoji: '🍩', color: '#a8edea', game: 'collect' }
    ],
    'E': [
        { word: 'Elephant', emoji: '🐘', color: '#ff6b6b', game: 'collect' },
        { word: 'Egg', emoji: '🥚', color: '#4ecdc4', game: 'collect' },
        { word: 'Eagle', emoji: '🦅', color: '#ffe66d', game: 'collect' },
        { word: 'Earth', emoji: '🌍', color: '#a8edea', game: 'collect' },
        { word: 'Envelope', emoji: '✉️', color: '#ff6b6b', game: 'collect' }
    ],
    'F': [
        { word: 'Fish', emoji: '🐟', color: '#4ecdc4', game: 'collect' },
        { word: 'Flower', emoji: '🌸', color: '#ffe66d', game: 'collect' },
        { word: 'Frog', emoji: '🐸', color: '#a8edea', game: 'collect' },
        { word: 'Fire', emoji: '🔥', color: '#ff6b6b', game: 'collect' },
        { word: 'Fox', emoji: '🦊', color: '#4ecdc4', game: 'collect' }
    ],
    'G': [
        { word: 'Giraffe', emoji: '🦒', color: '#ffe66d', game: 'collect' },
        { word: 'Guitar', emoji: '🎸', color: '#a8edea', game: 'collect' },
        { word: 'Grapes', emoji: '🍇', color: '#ff6b6b', game: 'collect' },
        { word: 'Ghost', emoji: '👻', color: '#4ecdc4', game: 'collect' },
        { word: 'Gift', emoji: '🎁', color: '#ffe66d', game: 'collect' }
    ],
    'H': [
        { word: 'House', emoji: '🏠', color: '#a8edea', game: 'collect' },
        { word: 'Heart', emoji: '❤️', color: '#ff6b6b', game: 'collect' },
        { word: 'Horse', emoji: '🐴', color: '#4ecdc4', game: 'race' },
        { word: 'Hat', emoji: '🎩', color: '#ffe66d', game: 'collect' },
        { word: 'Hamburger', emoji: '🍔', color: '#a8edea', game: 'collect' }
    ],
    'I': [
        { word: 'Ice Cream', emoji: '🍦', color: '#ff6b6b', game: 'icecream' },
        { word: 'Igloo', emoji: '🧊', color: '#4ecdc4', game: 'collect' },
        { word: 'Island', emoji: '🏝️', color: '#ffe66d', game: 'collect' },
        { word: 'Ice', emoji: '🧊', color: '#a8edea', game: 'collect' },
        { word: 'Insect', emoji: '🐛', color: '#ff6b6b', game: 'collect' }
    ],
    'J': [
        { word: 'Jellyfish', emoji: '🪼', color: '#4ecdc4', game: 'collect' },
        { word: 'Jar', emoji: '🫙', color: '#ffe66d', game: 'collect' },
        { word: 'Jaguar', emoji: '🐆', color: '#a8edea', game: 'collect' },
        { word: 'Juice', emoji: '🧃', color: '#ff6b6b', game: 'collect' },
        { word: 'Jewel', emoji: '💎', color: '#4ecdc4', game: 'collect' }
    ],
    'K': [
        { word: 'Kite', emoji: '🪁', color: '#ffe66d', game: 'collect' },
        { word: 'Kangaroo', emoji: '🦘', color: '#a8edea', game: 'collect' },
        { word: 'Key', emoji: '🗝️', color: '#ff6b6b', game: 'collect' },
        { word: 'King', emoji: '🤴', color: '#4ecdc4', game: 'collect' },
        { word: 'Koala', emoji: '🐨', color: '#ffe66d', game: 'collect' }
    ],
    'L': [
        { word: 'Lion', emoji: '🦁', color: '#a8edea', game: 'collect' },
        { word: 'Leaf', emoji: '🍃', color: '#ff6b6b', game: 'collect' },
        { word: 'Lamp', emoji: '💡', color: '#4ecdc4', game: 'collect' },
        { word: 'Lollipop', emoji: '🍭', color: '#ffe66d', game: 'collect' },
        { word: 'Ladybug', emoji: '🐞', color: '#a8edea', game: 'collect' }
    ],
    'M': [
        { word: 'Monkey', emoji: '🐵', color: '#ff6b6b', game: 'collect' },
        { word: 'Moon', emoji: '🌙', color: '#4ecdc4', game: 'collect' },
        { word: 'Mouse', emoji: '🐭', color: '#ffe66d', game: 'collect' },
        { word: 'Mushroom', emoji: '🍄', color: '#a8edea', game: 'collect' },
        { word: 'Music', emoji: '🎵', color: '#ff6b6b', game: 'collect' }
    ],
    'N': [
        { word: 'Nest', emoji: '🪺', color: '#4ecdc4', game: 'collect' },
        { word: 'Nose', emoji: '👃', color: '#ffe66d', game: 'collect' },
        { word: 'Nurse', emoji: '👩‍⚕️', color: '#a8edea', game: 'collect' },
        { word: 'Nut', emoji: '🥜', color: '#ff6b6b', game: 'collect' },
        { word: 'Net', emoji: '🕸️', color: '#4ecdc4', game: 'collect' }
    ],
    'O': [
        { word: 'Octopus', emoji: '🐙', color: '#ffe66d', game: 'collect' },
        { word: 'Orange', emoji: '🍊', color: '#a8edea', game: 'collect' },
        { word: 'Owl', emoji: '🦉', color: '#ff6b6b', game: 'collect' },
        { word: 'Ocean', emoji: '🌊', color: '#4ecdc4', game: 'collect' },
        { word: 'Ostrich', emoji: '🦃', color: '#ffe66d', game: 'collect' }
    ],
    'P': [
        { word: 'Penguin', emoji: '🐧', color: '#a8edea', game: 'collect' },
        { word: 'Pizza', emoji: '🍕', color: '#ff6b6b', game: 'collect' },
        { word: 'Panda', emoji: '🐼', color: '#4ecdc4', game: 'collect' },
        { word: 'Pumpkin', emoji: '🎃', color: '#ffe66d', game: 'collect' },
        { word: 'Peacock', emoji: '🦚', color: '#a8edea', game: 'collect' }
    ],
    'Q': [
        { word: 'Queen', emoji: '👑', color: '#ff6b6b', game: 'collect' },
        { word: 'Quilt', emoji: '🛏️', color: '#4ecdc4', game: 'collect' },
        { word: 'Quail', emoji: '🐦', color: '#ffe66d', game: 'collect' },
        { word: 'Question', emoji: '❓', color: '#a8edea', game: 'collect' },
        { word: 'Quill', emoji: '🪶', color: '#ff6b6b', game: 'collect' }
    ],
    'R': [
        { word: 'Rabbit', emoji: '🐰', color: '#4ecdc4', game: 'collect' },
        { word: 'Rainbow', emoji: '🌈', color: '#ffe66d', game: 'collect' },
        { word: 'Robot', emoji: '🤖', color: '#a8edea', game: 'collect' },
        { word: 'Rose', emoji: '🌹', color: '#ff6b6b', game: 'collect' },
        { word: 'Rocket', emoji: '🚀', color: '#4ecdc4', game: 'collect' }
    ],
    'S': [
        { word: 'Sun', emoji: '☀️', color: '#ffe66d', game: 'collect' },
        { word: 'Star', emoji: '⭐', color: '#a8edea', game: 'collect' },
        { word: 'Snake', emoji: '🐍', color: '#ff6b6b', game: 'collect' },
        { word: 'Ship', emoji: '🚢', color: '#4ecdc4', game: 'collect' },
        { word: 'Snowman', emoji: '⛄', color: '#ffe66d', game: 'collect' }
    ],
    'T': [
        { word: 'Tiger', emoji: '🐯', color: '#a8edea', game: 'collect' },
        { word: 'Tree', emoji: '🌳', color: '#ff6b6b', game: 'collect' },
        { word: 'Train', emoji: '🚂', color: '#4ecdc4', game: 'race' },
        { word: 'Turtle', emoji: '🐢', color: '#ffe66d', game: 'collect' },
        { word: 'Trophy', emoji: '🏆', color: '#a8edea', game: 'collect' }
    ],
    'U': [
        { word: 'Umbrella', emoji: '☂️', color: '#ff6b6b', game: 'collect' },
        { word: 'Unicorn', emoji: '🦄', color: '#4ecdc4', game: 'collect' },
        { word: 'Ukulele', emoji: '🎸', color: '#ffe66d', game: 'collect' },
        { word: 'Underwear', emoji: '🩲', color: '#a8edea', game: 'collect' },
        { word: 'Utensils', emoji: '🍴', color: '#ff6b6b', game: 'collect' }
    ],
    'V': [
        { word: 'Violin', emoji: '🎻', color: '#4ecdc4', game: 'collect' },
        { word: 'Volcano', emoji: '🌋', color: '#ffe66d', game: 'collect' },
        { word: 'Van', emoji: '🚐', color: '#a8edea', game: 'race' },
        { word: 'Vase', emoji: '🏺', color: '#ff6b6b', game: 'collect' },
        { word: 'Vegetable', emoji: '🥕', color: '#4ecdc4', game: 'collect' }
    ],
    'W': [
        { word: 'Whale', emoji: '🐋', color: '#ffe66d', game: 'collect' },
        { word: 'Watermelon', emoji: '🍉', color: '#a8edea', game: 'collect' },
        { word: 'Worm', emoji: '🪱', color: '#ff6b6b', game: 'collect' },
        { word: 'Wizard', emoji: '🧙', color: '#4ecdc4', game: 'collect' },
        { word: 'Wheel', emoji: '🎡', color: '#ffe66d', game: 'collect' }
    ],
    'X': [
        { word: 'X-ray', emoji: '🩻', color: '#a8edea', game: 'collect' },
        { word: 'Xylophone', emoji: '🎹', color: '#ff6b6b', game: 'collect' },
        { word: 'X-mas', emoji: '🎄', color: '#4ecdc4', game: 'collect' },
        { word: 'Xenops', emoji: '🐦', color: '#ffe66d', game: 'collect' },
        { word: 'Xerus', emoji: '🐿️', color: '#a8edea', game: 'collect' }
    ],
    'Y': [
        { word: 'Yacht', emoji: '⛵', color: '#ff6b6b', game: 'collect' },
        { word: 'Yak', emoji: '🐂', color: '#4ecdc4', game: 'collect' },
        { word: 'Yarn', emoji: '🧶', color: '#ffe66d', game: 'collect' },
        { word: 'Yo-yo', emoji: '🪀', color: '#a8edea', game: 'collect' },
        { word: 'Yogurt', emoji: '🥛', color: '#ff6b6b', game: 'collect' }
    ],
    'Z': [
        { word: 'Zebra', emoji: '🦓', color: '#4ecdc4', game: 'collect' },
        { word: 'Zipper', emoji: '🤐', color: '#ffe66d', game: 'collect' },
        { word: 'Zoo', emoji: '🦁', color: '#a8edea', game: 'collect' },
        { word: 'Zucchini', emoji: '🥒', color: '#ff6b6b', game: 'collect' },
        { word: 'Zero', emoji: '0️⃣', color: '#4ecdc4', game: 'collect' }
    ]
};

// Sound and Speech Utilities
const SoundManager = {
    audioContext: null,
    
    init() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.log('Web Audio API not supported');
        }
    },
    
    // Play click sound
    playClickSound() {
        if (!this.audioContext) return;
        
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.1);
    },
    
    // Play celebration sound (yayyy)
    playYaySound() {
        if (!this.audioContext) return;
        
        const frequencies = [523.25, 659.25, 783.99]; // C, E, G notes
        frequencies.forEach((freq, index) => {
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);
            
            oscillator.frequency.value = freq;
            oscillator.type = 'sine';
            
            const startTime = this.audioContext.currentTime + (index * 0.1);
            gainNode.gain.setValueAtTime(0.3, startTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + 0.3);
            
            oscillator.start(startTime);
            oscillator.stop(startTime + 0.3);
        });
    },
    
    // Play celebration sound (waoooo)
    playWaoSound() {
        if (!this.audioContext) return;
        
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.setValueAtTime(400, this.audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(800, this.audioContext.currentTime + 0.5);
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.5);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + 0.5);
    },
    
    // Speak text using Web Speech API with baby voice
    speak(text, rate = 0.85, pitch = 1.3) {
        if ('speechSynthesis' in window) {
            // Cancel any ongoing speech
            window.speechSynthesis.cancel();
            
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.rate = rate; // Slower for baby voice
            utterance.pitch = pitch; // Higher pitch for baby voice
            utterance.volume = 1.0;
            
            // Try to use a child-friendly voice
            const voices = window.speechSynthesis.getVoices();
            // Prefer higher-pitched, child-friendly voices
            const childVoice = voices.find(voice => 
                voice.name.includes('Child') || 
                voice.name.includes('Kid') ||
                voice.name.includes('Young')
            ) || voices.find(voice => 
                voice.lang.includes('en') && 
                (voice.name.includes('Female') || voice.name.includes('Zira'))
            ) || voices.find(voice => voice.lang.includes('en'));
            
            if (childVoice) {
                utterance.voice = childVoice;
            }
            
            window.speechSynthesis.speak(utterance);
        }
    }
};

// Initialize sound manager when voices are loaded
if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = () => {
        // Voices are now loaded
    };
}

// Word building data
const wordBuildingData = {
    3: [
        { word: 'CAT', hint: '🐱', emoji: '🐱' },
        { word: 'DOG', hint: '🐶', emoji: '🐶' },
        { word: 'SUN', hint: '☀️', emoji: '☀️' },
        { word: 'CAR', hint: '🚗', emoji: '🚗' },
        { word: 'BAT', hint: '🦇', emoji: '🦇' },
        { word: 'HAT', hint: '🎩', emoji: '🎩' },
        { word: 'BAG', hint: '👜', emoji: '👜' },
        { word: 'BED', hint: '🛏️', emoji: '🛏️' },
        { word: 'CUP', hint: '☕', emoji: '☕' },
        { word: 'BEE', hint: '🐝', emoji: '🐝' },
        { word: 'EGG', hint: '🥚', emoji: '🥚' },
        { word: 'ICE', hint: '🧊', emoji: '🧊' },
        { word: 'KEY', hint: '🗝️', emoji: '🗝️' },
        { word: 'MAP', hint: '🗺️', emoji: '🗺️' },
        { word: 'PEN', hint: '✏️', emoji: '✏️' }
    ],
    4: [
        { word: 'BALL', hint: '⚽', emoji: '⚽' },
        { word: 'CAKE', hint: '🎂', emoji: '🎂' },
        { word: 'FISH', hint: '🐟', emoji: '🐟' },
        { word: 'BOOK', hint: '📚', emoji: '📚' },
        { word: 'STAR', hint: '⭐', emoji: '⭐' },
        { word: 'MOON', hint: '🌙', emoji: '🌙' },
        { word: 'TREE', hint: '🌳', emoji: '🌳' },
        { word: 'ROSE', hint: '🌹', emoji: '🌹' },
        { word: 'DUCK', hint: '🦆', emoji: '🦆' },
        { word: 'LION', hint: '🦁', emoji: '🦁' },
        { word: 'BEAR', hint: '🐻', emoji: '🐻' },
        { word: 'FROG', hint: '🐸', emoji: '🐸' },
        { word: 'SHIP', hint: '🚢', emoji: '🚢' },
        { word: 'GIFT', hint: '🎁', emoji: '🎁' },
        { word: 'KITE', hint: '🪁', emoji: '🪁' }
    ]
};

// Racing game words
const racingWords = [
    { word: 'ICE', letters: ['I', 'C', 'E'], emoji: '🧊' },
    { word: 'CAT', letters: ['C', 'A', 'T'], emoji: '🐱' },
    { word: 'DOG', letters: ['D', 'O', 'G'], emoji: '🐶' },
    { word: 'SUN', letters: ['S', 'U', 'N'], emoji: '☀️' },
    { word: 'CAR', letters: ['C', 'A', 'R'], emoji: '🚗' },
    { word: 'BALL', letters: ['B', 'A', 'L', 'L'], emoji: '⚽' },
    { word: 'CAKE', letters: ['C', 'A', 'K', 'E'], emoji: '🎂' },
    { word: 'FISH', letters: ['F', 'I', 'S', 'H'], emoji: '🐟' }
];

// Dress up clothing items
const dressUpItems = {
    tops: [
        { name: 'Red Shirt', emoji: '👕', color: '#ff6b6b' },
        { name: 'Blue Dress', emoji: '👗', color: '#4ecdc4' },
        { name: 'Pink Blouse', emoji: '👚', color: '#ff9ff3' },
        { name: 'Yellow T-Shirt', emoji: '👕', color: '#ffe66d' },
        { name: 'Purple Sweater', emoji: '🧥', color: '#a8edea' }
    ],
    bottoms: [
        { name: 'Blue Jeans', emoji: '👖', color: '#667eea' },
        { name: 'Red Skirt', emoji: '👗', color: '#ff6b6b' },
        { name: 'Pink Shorts', emoji: '🩳', color: '#ff9ff3' },
        { name: 'Black Pants', emoji: '👖', color: '#333' },
        { name: 'Green Leggings', emoji: '👖', color: '#84fab0' }
    ],
    shoes: [
        { name: 'Red Shoes', emoji: '👠', color: '#ff6b6b' },
        { name: 'Blue Sneakers', emoji: '👟', color: '#4ecdc4' },
        { name: 'Pink Boots', emoji: '👢', color: '#ff9ff3' },
        { name: 'White Sandals', emoji: '👡', color: '#fff' },
        { name: 'Purple Heels', emoji: '👠', color: '#a8edea' }
    ],
    accessories: [
        { name: 'Red Hat', emoji: '👒', color: '#ff6b6b' },
        { name: 'Blue Bow', emoji: '🎀', color: '#4ecdc4' },
        { name: 'Pink Necklace', emoji: '💍', color: '#ff9ff3' },
        { name: 'Yellow Bracelet', emoji: '💍', color: '#ffe66d' },
        { name: 'Purple Glasses', emoji: '👓', color: '#a8edea' }
    ]
};

// Learn section data
const learnData = {
    fruits: [
        { name: 'Apple', emoji: '🍎', color: '#ff6b6b', image: '🍎' },
        { name: 'Banana', emoji: '🍌', color: '#ffe66d', image: '🍌' },
        { name: 'Orange', emoji: '🍊', color: '#ffa07a', image: '🍊' },
        { name: 'Grapes', emoji: '🍇', color: '#a8edea', image: '🍇' },
        { name: 'Strawberry', emoji: '🍓', color: '#ff6b6b', image: '🍓' },
        { name: 'Watermelon', emoji: '🍉', color: '#84fab0', image: '🍉' },
        { name: 'Pineapple', emoji: '🍍', color: '#ffe66d', image: '🍍' },
        { name: 'Mango', emoji: '🥭', color: '#ffa07a', image: '🥭' }
    ],
    vegetables: [
        { name: 'Carrot', emoji: '🥕', color: '#ffa07a', image: '🥕' },
        { name: 'Broccoli', emoji: '🥦', color: '#84fab0', image: '🥦' },
        { name: 'Tomato', emoji: '🍅', color: '#ff6b6b', image: '🍅' },
        { name: 'Corn', emoji: '🌽', color: '#ffe66d', image: '🌽' },
        { name: 'Pepper', emoji: '🫑', color: '#84fab0', image: '🫑' },
        { name: 'Cucumber', emoji: '🥒', color: '#84fab0', image: '🥒' },
        { name: 'Potato', emoji: '🥔', color: '#ffe66d', image: '🥔' },
        { name: 'Onion', emoji: '🧅', color: '#a8edea', image: '🧅' }
    ],
    colors: [
        { name: 'Red', emoji: '🔴', color: '#ff6b6b', image: '🔴' },
        { name: 'Blue', emoji: '🔵', color: '#4ecdc4', image: '🔵' },
        { name: 'Yellow', emoji: '🟡', color: '#ffe66d', image: '🟡' },
        { name: 'Green', emoji: '🟢', color: '#84fab0', image: '🟢' },
        { name: 'Orange', emoji: '🟠', color: '#ffa07a', image: '🟠' },
        { name: 'Purple', emoji: '🟣', color: '#a8edea', image: '🟣' },
        { name: 'Pink', emoji: '🩷', color: '#ff9ff3', image: '🩷' },
        { name: 'Brown', emoji: '🟤', color: '#8b4513', image: '🟤' }
    ],
    seasons: [
        { name: 'Spring', emoji: '🌸', color: '#ff9ff3', image: '🌸' },
        { name: 'Summer', emoji: '☀️', color: '#ffe66d', image: '☀️' },
        { name: 'Fall', emoji: '🍂', color: '#ffa07a', image: '🍂' },
        { name: 'Winter', emoji: '❄️', color: '#a8edea', image: '❄️' }
    ],
    months: [
        { name: 'January', emoji: '❄️', color: '#a8edea' },
        { name: 'February', emoji: '💝', color: '#ff9ff3' },
        { name: 'March', emoji: '🌸', color: '#ff9ff3' },
        { name: 'April', emoji: '🌷', color: '#84fab0' },
        { name: 'May', emoji: '🌻', color: '#ffe66d' },
        { name: 'June', emoji: '☀️', color: '#ffe66d' },
        { name: 'July', emoji: '🏖️', color: '#4ecdc4' },
        { name: 'August', emoji: '🌞', color: '#ffa07a' },
        { name: 'September', emoji: '🍂', color: '#ffa07a' },
        { name: 'October', emoji: '🎃', color: '#ff6b6b' },
        { name: 'November', emoji: '🦃', color: '#ffa07a' },
        { name: 'December', emoji: '🎄', color: '#84fab0' }
    ]
};

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    SoundManager.init();
    initializeAlphabet();
    initializeModeSelector();
    initializeCounting();
    initializeGameModal();
    initializeWordBuilding();
    initializeMath();
    initializeGames();
    initializeLearn();
});

// Create alphabet buttons
function initializeAlphabet() {
    const alphabetGrid = document.querySelector('.alphabet-grid');
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    
    letters.forEach(letter => {
        const button = document.createElement('button');
        button.className = 'letter-btn';
        button.textContent = letter;
        button.addEventListener('click', () => {
            SoundManager.playClickSound();
            SoundManager.speak(letter);
            showLetter(letter);
        });
        alphabetGrid.appendChild(button);
    });
}

// Show letter information
function showLetter(letter) {
    const words = alphabetData[letter];
    const letterDisplay = document.getElementById('letter-display');
    const letterTitle = document.getElementById('letter-title');
    const letterPhrase = document.getElementById('letter-phrase');
    const letterImage = document.getElementById('letter-image');
    const playGameBtn = document.getElementById('play-game');
    const wordsContainer = document.getElementById('words-container');
    
    letterTitle.textContent = letter;
    
    // Clear and populate words container
    wordsContainer.innerHTML = '';
    words.forEach((wordData, index) => {
        const wordItem = document.createElement('div');
        wordItem.className = 'word-item';
        wordItem.innerHTML = `
            <span class="word-emoji">${wordData.emoji}</span>
            <span class="word-text">${wordData.word}</span>
        `;
        wordItem.style.background = `linear-gradient(135deg, ${wordData.color}, ${adjustBrightness(wordData.color, -20)})`;
        wordItem.addEventListener('click', () => {
            // Play click sound and pronounce word
            SoundManager.playClickSound();
            SoundManager.speak(wordData.word);
            
            // Update main display
            letterPhrase.textContent = `${letter} for ${wordData.word}`;
            letterImage.textContent = wordData.emoji;
            letterImage.style.background = `linear-gradient(135deg, ${wordData.color}, ${adjustBrightness(wordData.color, -20)})`;
            
            // Store current word for game
            playGameBtn.dataset.letter = letter;
            playGameBtn.dataset.wordIndex = index;
            
            // Update active word
            document.querySelectorAll('.word-item').forEach(item => item.classList.remove('active'));
            wordItem.classList.add('active');
        });
        
        // Set first word as active by default
        if (index === 0) {
            wordItem.classList.add('active');
            letterPhrase.textContent = `${letter} for ${wordData.word}`;
            letterImage.textContent = wordData.emoji;
            letterImage.style.background = `linear-gradient(135deg, ${wordData.color}, ${adjustBrightness(wordData.color, -20)})`;
            playGameBtn.dataset.letter = letter;
            playGameBtn.dataset.wordIndex = index;
            // Pronounce first word automatically
            setTimeout(() => SoundManager.speak(wordData.word), 300);
        }
        
        wordsContainer.appendChild(wordItem);
    });
    
    letterDisplay.classList.remove('hidden');
    
    // Scroll to letter display
    letterDisplay.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Close letter display
document.getElementById('close-letter')?.addEventListener('click', () => {
    document.getElementById('letter-display').classList.add('hidden');
});

// Mode selector and activity boxes
function initializeModeSelector() {
    const activityBoxes = document.querySelectorAll('.activity-box');
    const backHomeButtons = document.querySelectorAll('.back-home-btn');
    const homeSection = document.getElementById('home-section');
    const alphabetSection = document.getElementById('alphabet-section');
    const countingSection = document.getElementById('counting-section');
    const wordsSection = document.getElementById('words-section');
    const mathSection = document.getElementById('math-section');
    
    // Handle activity box clicks
    activityBoxes.forEach(box => {
        box.addEventListener('click', () => {
            const mode = box.dataset.mode;
            SoundManager.playClickSound();
            
            // Hide home section
            homeSection.classList.remove('active');
            homeSection.classList.add('hidden');
            
            // Hide all sections
            alphabetSection.classList.remove('active');
            alphabetSection.classList.add('hidden');
            countingSection.classList.remove('active');
            countingSection.classList.add('hidden');
            wordsSection.classList.remove('active');
            wordsSection.classList.add('hidden');
            mathSection.classList.remove('active');
            mathSection.classList.add('hidden');
            
            const gamesSection = document.getElementById('games-section');
            const learnSection = document.getElementById('learn-section');
            
            // Show selected section
            if (mode === 'alphabet') {
                alphabetSection.classList.remove('hidden');
                alphabetSection.classList.add('active');
            } else if (mode === 'counting') {
                countingSection.classList.remove('hidden');
                countingSection.classList.add('active');
            } else if (mode === 'words') {
                wordsSection.classList.remove('hidden');
                wordsSection.classList.add('active');
            } else if (mode === 'math') {
                mathSection.classList.remove('hidden');
                mathSection.classList.add('active');
            } else if (mode === 'games') {
                gamesSection.classList.remove('hidden');
                gamesSection.classList.add('active');
            } else if (mode === 'learn') {
                learnSection.classList.remove('hidden');
                learnSection.classList.add('active');
            }
        });
    });
    
    // Handle back to home buttons
    backHomeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            SoundManager.playClickSound();
            
            const gamesSection = document.getElementById('games-section');
            const learnSection = document.getElementById('learn-section');
            
            // Hide all sections
            alphabetSection.classList.remove('active');
            alphabetSection.classList.add('hidden');
            countingSection.classList.remove('active');
            countingSection.classList.add('hidden');
            wordsSection.classList.remove('active');
            wordsSection.classList.add('hidden');
            mathSection.classList.remove('active');
            mathSection.classList.add('hidden');
            if (gamesSection) {
                gamesSection.classList.remove('active');
                gamesSection.classList.add('hidden');
            }
            if (learnSection) {
                learnSection.classList.remove('active');
                learnSection.classList.add('hidden');
            }
            
            // Show home section
            homeSection.classList.remove('hidden');
            homeSection.classList.add('active');
        });
    });
}

// Games Section
function initializeGames() {
    const gameSelectButtons = document.querySelectorAll('.game-select-btn');
    const racingGame = document.getElementById('racing-game');
    const dressupGame = document.getElementById('dressup-game');
    
    gameSelectButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            SoundManager.playClickSound();
            document.querySelectorAll('.game-select-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const game = btn.dataset.game;
            if (game === 'racing') {
                racingGame.classList.remove('hidden');
                racingGame.classList.add('active');
                dressupGame.classList.remove('active');
                dressupGame.classList.add('hidden');
            } else if (game === 'dressup') {
                dressupGame.classList.remove('hidden');
                dressupGame.classList.add('active');
                racingGame.classList.remove('active');
                racingGame.classList.add('hidden');
                initializeDressUp();
            }
        });
    });
    
    initializeRacingGame();
    initializeDressUp();
}

// Racing Letter Collection Game
function initializeRacingGame() {
    const startBtn = document.getElementById('start-racing-btn');
    const racingTrack = document.getElementById('racing-track');
    const letterArea = document.getElementById('letter-collection-area');
    const racer = document.getElementById('racer-character');
    const targetWordDisplay = document.getElementById('target-word-racing');
    const collectedDisplay = document.getElementById('collected-letters-display');
    
    let currentWord = null;
    let collectedLetters = [];
    let gameActive = false;
    let racerPosition = 0;
    
    startBtn?.addEventListener('click', () => {
        SoundManager.playClickSound();
        startRacingGame();
    });
    
    function startRacingGame() {
        currentWord = racingWords[Math.floor(Math.random() * racingWords.length)];
        collectedLetters = [];
        gameActive = true;
        racerPosition = 0;
        
        targetWordDisplay.textContent = currentWord.word;
        collectedDisplay.textContent = '';
        racer.style.left = '0px';
        
        // Clear previous letters
        letterArea.innerHTML = '';
        
        // Create letter items floating on track
        const letters = currentWord.letters;
        letters.forEach((letter, index) => {
            setTimeout(() => {
                createFloatingLetter(letter, index);
            }, index * 1000);
        });
        
        // Start racer movement
        moveRacer();
        
        SoundManager.speak(`Collect letters for ${currentWord.word.toLowerCase()}!`, 0.8, 1.4);
    }
    
    function createFloatingLetter(letter, index) {
        const letterItem = document.createElement('div');
        letterItem.className = 'floating-letter';
        letterItem.textContent = letter;
        letterItem.dataset.letter = letter;
        letterItem.style.left = Math.random() * (racingTrack.offsetWidth - 100) + 'px';
        letterItem.style.top = Math.random() * (racingTrack.offsetHeight - 100) + 'px';
        
        letterItem.addEventListener('click', () => {
            if (!gameActive) return;
            
            if (collectedLetters.includes(letter)) return;
            
            SoundManager.playClickSound();
            SoundManager.speak(letter, 0.8, 1.4);
            
            collectedLetters.push(letter);
            collectedDisplay.textContent = collectedLetters.join(' ');
            letterItem.classList.add('collected');
            
            setTimeout(() => {
                letterItem.remove();
            }, 500);
            
            // Check if word is complete
            if (collectedLetters.length === currentWord.letters.length) {
                gameActive = false;
                SoundManager.playYaySound();
                setTimeout(() => {
                    SoundManager.speak(`Great job! You collected all letters for ${currentWord.word.toLowerCase()}!`, 0.8, 1.4);
                    alert(`🎉 Great Job! You collected all letters for ${currentWord.word}! ${currentWord.emoji}`);
                    startRacingGame();
                }, 1000);
            }
        });
        
        racingTrack.appendChild(letterItem);
    }
    
    function moveRacer() {
        if (!gameActive) return;
        
        racerPosition += 2;
        racer.style.left = Math.min(racerPosition, racingTrack.offsetWidth - 100) + 'px';
        
        if (racerPosition < racingTrack.offsetWidth - 100) {
            requestAnimationFrame(moveRacer);
        }
    }
}

// Dress Up Game
function initializeDressUp() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const clothingItems = document.getElementById('clothing-items');
    const outfitDisplay = document.getElementById('outfit-display');
    
    let currentOutfit = {
        top: null,
        bottom: null,
        shoes: null,
        accessory: null
    };
    
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            SoundManager.playClickSound();
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.dataset.category;
            displayClothingItems(category);
        });
    });
    
    function displayClothingItems(category) {
        const items = dressUpItems[category];
        clothingItems.innerHTML = '';
        
        items.forEach(item => {
            const itemBtn = document.createElement('button');
            itemBtn.className = 'clothing-item-btn';
            itemBtn.innerHTML = `
                <div class="clothing-emoji">${item.emoji}</div>
                <div class="clothing-name">${item.name}</div>
            `;
            itemBtn.style.background = `linear-gradient(135deg, ${item.color}, ${adjustBrightness(item.color, -20)})`;
            
            itemBtn.addEventListener('click', () => {
                SoundManager.playClickSound();
                SoundManager.speak(item.name, 0.8, 1.4);
                applyClothing(category, item);
            });
            
            clothingItems.appendChild(itemBtn);
        });
    }
    
    function applyClothing(category, item) {
        const layerMap = {
            tops: 'top-layer',
            bottoms: 'bottom-layer',
            shoes: 'shoes-layer',
            accessories: 'accessory-layer'
        };
        
        const layer = document.getElementById(layerMap[category]);
        if (layer) {
            layer.textContent = item.emoji;
            layer.style.display = 'block';
            currentOutfit[category.slice(0, -1)] = item;
        }
        
        updateOutfitDisplay();
    }
    
    function updateOutfitDisplay() {
        const outfit = [];
        if (currentOutfit.top) outfit.push(currentOutfit.top.name);
        if (currentOutfit.bottom) outfit.push(currentOutfit.bottom.name);
        if (currentOutfit.shoes) outfit.push(currentOutfit.shoes.name);
        if (currentOutfit.accessory) outfit.push(currentOutfit.accessory.name);
        
        outfitDisplay.innerHTML = outfit.length > 0 
            ? outfit.join(', ') 
            : 'No items selected yet!';
    }
    
    // Display tops by default
    displayClothingItems('tops');
}

// Learn Section
function initializeLearn() {
    const categoryButtons = document.querySelectorAll('.learn-category-btn');
    const learnContentArea = document.getElementById('learn-content-area');
    
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            SoundManager.playClickSound();
            document.querySelectorAll('.learn-category-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.dataset.category;
            displayLearnContent(category);
        });
    });
    
    function displayLearnContent(category) {
        const items = learnData[category];
        learnContentArea.innerHTML = '';
        
        items.forEach(item => {
            const itemCard = document.createElement('div');
            itemCard.className = 'learn-item-card';
            itemCard.innerHTML = `
                <div class="learn-item-image" style="background: linear-gradient(135deg, ${item.color}, ${adjustBrightness(item.color, -20)})">
                    <div class="learn-emoji-large">${item.image || item.emoji}</div>
                </div>
                <div class="learn-item-name">${item.name}</div>
            `;
            
            itemCard.addEventListener('click', () => {
                SoundManager.playClickSound();
                SoundManager.speak(item.name, 0.8, 1.4);
                itemCard.classList.add('selected');
                setTimeout(() => {
                    itemCard.classList.remove('selected');
                }, 500);
            });
            
            learnContentArea.appendChild(itemCard);
        });
    }
    
    // Display fruits by default
    displayLearnContent('fruits');
}

// Counting functionality
function initializeCounting() {
    const numberSelector = document.querySelector('.number-selector');
    const countingDisplay = document.getElementById('counting-display');
    const countingTitle = document.getElementById('counting-title');
    const countingItems = document.getElementById('counting-items');
    
    // Create number buttons for 1-100
    numberSelector.innerHTML = '';
    for (let i = 1; i <= 100; i++) {
        const btn = document.createElement('button');
        btn.className = 'number-btn';
        btn.textContent = i;
        btn.dataset.number = i;
        
        btn.addEventListener('click', () => {
            const number = parseInt(btn.dataset.number);
            countingTitle.textContent = `Count to ${number}!`;
            countingItems.innerHTML = '';
            
            // Pronounce the count with word (e.g., "45 apples")
            const emoji = getRandomEmoji();
            // Map emojis to words for pronunciation
            const emojiToWord = {
                '⭐': 'stars', '🌟': 'stars', '💫': 'stars', '✨': 'stars',
                '🎈': 'balloons', '🎉': 'parties', '🎊': 'celebrations', '🎁': 'gifts',
                '🍎': 'apples', '🍌': 'bananas', '🍇': 'grapes', '🍓': 'strawberries',
                '🍊': 'oranges', '🍋': 'lemons', '🍉': 'watermelons', '🍑': 'peaches',
                '🍒': 'cherries', '🥝': 'kiwis', '🍍': 'pineapples', '🥭': 'mangoes'
            };
            const itemName = emojiToWord[emoji] || (number === 1 ? 'item' : 'items');
            // Use the same emoji for all items in this count
            window.currentCountingEmoji = emoji;
            SoundManager.speak(`${number} ${itemName}`);
            
            // Create items with delay for animation (limit to 50 visible at once for performance)
            const itemsToShow = Math.min(number, 50);
            const itemsPerRow = 10;
            
            for (let i = 0; i < itemsToShow; i++) {
                setTimeout(() => {
                    const item = document.createElement('div');
                    item.className = 'counting-item';
                    item.textContent = window.currentCountingEmoji || emoji;
                    item.style.animationDelay = `${i * 0.05}s`;
                    countingItems.appendChild(item);
                }, i * 50);
            }
            
            // Show count text if number > 50
            if (number > 50) {
                const countText = document.createElement('div');
                countText.className = 'count-text';
                countText.textContent = `Total: ${number} items!`;
                countText.style.cssText = 'width: 100%; text-align: center; font-size: 2em; color: #667eea; margin-top: 20px; font-weight: bold;';
                countingItems.appendChild(countText);
            }
            
            countingDisplay.classList.remove('hidden');
            countingDisplay.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
        
        numberSelector.appendChild(btn);
    }
    
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
        const wordIndex = parseInt(playGameBtn.dataset.wordIndex || '0');
        const wordData = alphabetData[letter][wordIndex];
        const gameType = wordData.game;
        
        switch(gameType) {
            case 'cutting':
                startAppleCuttingGame(wordData);
                break;
            case 'race':
                startRaceGame(wordData);
                break;
            case 'icecream':
                startIceCreamGame(wordData);
                break;
            default:
                startGenericGame(wordData);
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
function startAppleCuttingGame(wordData) {
    const gameModal = document.getElementById('game-modal');
    const gameTitle = document.getElementById('game-title');
    const gameArea = document.getElementById('game-area');
    const gameInstruction = document.getElementById('game-instruction');
    
    gameTitle.textContent = `🍎 Cut the ${wordData.word}! 🍎`;
    gameInstruction.textContent = `Click on the ${wordData.word.toLowerCase()}s to cut them!`;
    gameArea.innerHTML = '<div class="score">Score: <span id="score">0</span></div>';
    
    let score = 0;
    let itemsCut = 0;
    const totalItems = 10;
    
    function createItem() {
        if (itemsCut >= totalItems) {
            gameArea.innerHTML = `
                <div style="text-align: center; padding: 50px;">
                    <h2 style="font-size: 3em; color: #667eea;">🎉 Great Job! 🎉</h2>
                    <p style="font-size: 1.5em; margin-top: 20px;">You cut ${score} ${wordData.word.toLowerCase()}s!</p>
                </div>
            `;
            return;
        }
        
        const item = document.createElement('div');
        item.className = 'apple';
        item.textContent = wordData.emoji;
        item.style.left = Math.random() * (gameArea.offsetWidth - 80) + 'px';
        item.style.top = Math.random() * (gameArea.offsetHeight - 80) + 'px';
        
        item.addEventListener('click', () => {
            SoundManager.playClickSound();
            item.classList.add('cut');
            score++;
            itemsCut++;
            document.getElementById('score').textContent = score;
            
            setTimeout(() => {
                item.remove();
                if (itemsCut < totalItems) {
                    setTimeout(createItem, 500);
                } else {
                    SoundManager.playYaySound();
                    setTimeout(() => {
                        gameArea.innerHTML = `
                            <div style="text-align: center; padding: 50px;">
                                <h2 style="font-size: 3em; color: #667eea;">🎉 Great Job! 🎉</h2>
                                <p style="font-size: 1.5em; margin-top: 20px;">You cut ${score} ${wordData.word.toLowerCase()}s!</p>
                            </div>
                        `;
                        SoundManager.speak(`Great job! You cut ${score} ${wordData.word.toLowerCase()}s!`);
                    }, 500);
                }
            }, 500);
        });
        
        gameArea.appendChild(item);
    }
    
    for (let i = 0; i < 3; i++) {
        setTimeout(() => createItem(), i * 300);
    }
    
    gameModal.classList.remove('hidden');
}

// Dog race game
function startRaceGame(wordData) {
    const gameModal = document.getElementById('game-modal');
    const gameTitle = document.getElementById('game-title');
    const gameArea = document.getElementById('game-area');
    const gameInstruction = document.getElementById('game-instruction');
    
    gameTitle.textContent = `🏁 ${wordData.word} Race! 🏁`;
    gameInstruction.textContent = 'Click on your racer to make them run faster!';
    gameArea.innerHTML = `
        <div class="race-track">
            <div class="racer racer-1" id="racer1" style="left: 10px;">
                <div class="racer-emoji">${wordData.emoji}</div>
                <div class="racer-label">Racer 1</div>
            </div>
            <div class="racer racer-2" id="racer2" style="left: 10px;">
                <div class="racer-emoji">${wordData.emoji}</div>
                <div class="racer-label">Racer 2</div>
            </div>
            <div class="finish-line"></div>
        </div>
        <div class="score">Click on your racer to boost them!</div>
    `;
    
    const racer1 = document.getElementById('racer1');
    const racer2 = document.getElementById('racer2');
    const finishLine = gameArea.offsetWidth - 100;
    let racer1Pos = 10;
    let racer2Pos = 10;
    let gameOver = false;
    
    function moveRacer(racer, position, isRacer1) {
        if (gameOver) return;
        
        position += Math.random() * 20 + 10;
        if (isRacer1) {
            racer1Pos = position;
        } else {
            racer2Pos = position;
        }
        
        racer.style.left = Math.min(position, finishLine) + 'px';
        
        if (position >= finishLine) {
            gameOver = true;
            const winner = isRacer1 ? 'Racer 1' : 'Racer 2';
            SoundManager.playWaoSound();
            setTimeout(() => {
                gameArea.innerHTML = `
                    <div style="text-align: center; padding: 50px;">
                        <h2 style="font-size: 3em; color: #667eea;">🏆 ${winner} Wins! 🏆</h2>
                        <p style="font-size: 2em; margin-top: 20px;">${wordData.emoji} ${wordData.emoji} ${wordData.emoji}</p>
                    </div>
                `;
                SoundManager.speak(`${winner} wins!`);
            }, 500);
        } else {
            setTimeout(() => moveRacer(racer, position, isRacer1), 100);
        }
    }
    
    racer1.addEventListener('click', () => {
        if (!gameOver) {
            SoundManager.playClickSound();
            racer1Pos += 30;
        }
    });
    
    racer2.addEventListener('click', () => {
        if (!gameOver) {
            SoundManager.playClickSound();
            racer2Pos += 30;
        }
    });
    
    // Start race
    setTimeout(() => {
        moveRacer(racer1, racer1Pos, true);
        moveRacer(racer2, racer2Pos, false);
    }, 500);
    
    gameModal.classList.remove('hidden');
}

// Ice cream eating game
function startIceCreamGame(wordData) {
    const gameModal = document.getElementById('game-modal');
    const gameTitle = document.getElementById('game-title');
    const gameArea = document.getElementById('game-area');
    const gameInstruction = document.getElementById('game-instruction');
    
    gameTitle.textContent = `🍦 Eat Your ${wordData.word}! 🍦`;
    gameInstruction.textContent = 'Click on the ice creams to eat them before they melt!';
    gameArea.innerHTML = '<div class="score">Eaten: <span id="score">0</span> / 10</div>';
    
    let score = 0;
    let itemsEaten = 0;
    const totalItems = 10;
    
    function createIceCream() {
        if (itemsEaten >= totalItems) {
            gameArea.innerHTML = `
                <div style="text-align: center; padding: 50px;">
                    <h2 style="font-size: 3em; color: #667eea;">🎉 Yummy! 🎉</h2>
                    <p style="font-size: 1.5em; margin-top: 20px;">You ate ${score} ice creams!</p>
                </div>
            `;
            return;
        }
        
        const iceCream = document.createElement('div');
        iceCream.className = 'apple ice-cream-item';
        iceCream.textContent = wordData.emoji;
        iceCream.style.left = Math.random() * (gameArea.offsetWidth - 80) + 'px';
        iceCream.style.top = Math.random() * (gameArea.offsetHeight - 80) + 'px';
        
        // Melting animation
        let meltProgress = 0;
        const meltInterval = setInterval(() => {
            meltProgress += 5;
            iceCream.style.opacity = 1 - (meltProgress / 100);
            iceCream.style.transform = `scale(${1 - meltProgress / 200})`;
            
            if (meltProgress >= 100) {
                clearInterval(meltInterval);
                iceCream.remove();
                if (itemsEaten < totalItems) {
                    setTimeout(createIceCream, 500);
                }
            }
        }, 100);
        
        iceCream.addEventListener('click', () => {
            SoundManager.playClickSound();
            clearInterval(meltInterval);
            iceCream.classList.add('cut');
            score++;
            itemsEaten++;
            document.getElementById('score').textContent = score;
            
            setTimeout(() => {
                iceCream.remove();
                if (itemsEaten < totalItems) {
                    setTimeout(createIceCream, 500);
                } else {
                    SoundManager.playYaySound();
                    setTimeout(() => {
                        gameArea.innerHTML = `
                            <div style="text-align: center; padding: 50px;">
                                <h2 style="font-size: 3em; color: #667eea;">🎉 Yummy! 🎉</h2>
                                <p style="font-size: 1.5em; margin-top: 20px;">You ate ${score} ice creams!</p>
                            </div>
                        `;
                        SoundManager.speak(`Yummy! You ate ${score} ice creams!`);
                    }, 500);
                }
            }, 500);
        });
        
        gameArea.appendChild(iceCream);
    }
    
    for (let i = 0; i < 3; i++) {
        setTimeout(() => createIceCream(), i * 300);
    }
    
    gameModal.classList.remove('hidden');
}

// Generic game for other letters
function startGenericGame(wordData) {
    const gameModal = document.getElementById('game-modal');
    const gameTitle = document.getElementById('game-title');
    const gameArea = document.getElementById('game-area');
    const gameInstruction = document.getElementById('game-instruction');
    
    gameTitle.textContent = `${wordData.word} Collection!`;
    gameInstruction.textContent = `Click on the ${wordData.word.toLowerCase()}s to collect them!`;
    gameArea.innerHTML = '<div class="score">Collected: <span id="score">0</span></div>';
    
    let score = 0;
    let itemsCollected = 0;
    const totalItems = 8;
    
    function createItem() {
        if (itemsCollected >= totalItems) {
            gameArea.innerHTML = `
                <div style="text-align: center; padding: 50px;">
                    <h2 style="font-size: 3em; color: #667eea;">🎉 Well Done! 🎉</h2>
                    <p style="font-size: 1.5em; margin-top: 20px;">You collected ${score} ${wordData.word.toLowerCase()}s!</p>
                </div>
            `;
            return;
        }
        
        const item = document.createElement('div');
        item.className = 'apple';
        item.textContent = wordData.emoji;
        item.style.left = Math.random() * (gameArea.offsetWidth - 80) + 'px';
        item.style.top = Math.random() * (gameArea.offsetHeight - 80) + 'px';
        
        item.addEventListener('click', () => {
            SoundManager.playClickSound();
            item.classList.add('cut');
            score++;
            itemsCollected++;
            document.getElementById('score').textContent = score;
            
            setTimeout(() => {
                item.remove();
                if (itemsCollected < totalItems) {
                    setTimeout(createItem, 500);
                } else {
                    SoundManager.playYaySound();
                    setTimeout(() => {
                        gameArea.innerHTML = `
                            <div style="text-align: center; padding: 50px;">
                                <h2 style="font-size: 3em; color: #667eea;">🎉 Well Done! 🎉</h2>
                                <p style="font-size: 1.5em; margin-top: 20px;">You collected ${score} ${wordData.word.toLowerCase()}s!</p>
                            </div>
                        `;
                        SoundManager.speak(`Well done! You collected ${score} ${wordData.word.toLowerCase()}s!`);
                    }, 500);
                }
            }, 500);
        });
        
        gameArea.appendChild(item);
    }
    
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

// Word Building Game
let currentWordData = null;
let selectedLetters = [];
let availableLetters = [];

function initializeWordBuilding() {
    const wordLengthButtons = document.querySelectorAll('.game-type-btn[data-word-length]');
    const newWordBtn = document.getElementById('new-word-btn');
    
    wordLengthButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.game-type-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const length = parseInt(btn.dataset.wordLength);
            startWordGame(length);
        });
    });
    
    newWordBtn?.addEventListener('click', () => {
        const activeBtn = document.querySelector('.game-type-btn.active[data-word-length]');
        if (activeBtn) {
            const length = parseInt(activeBtn.dataset.wordLength);
            startWordGame(length);
        }
    });
    
    // Start with 3-letter words
    startWordGame(3);
}

function startWordGame(wordLength) {
    const words = wordBuildingData[wordLength];
    currentWordData = words[Math.floor(Math.random() * words.length)];
    selectedLetters = [];
    
    const targetWordDisplay = document.getElementById('target-word-display');
    const wordHint = document.getElementById('word-hint');
    const letterSlots = document.getElementById('letter-slots');
    const availableLettersDiv = document.getElementById('available-letters');
    const wordFeedback = document.getElementById('word-feedback');
    
    // Display hint
    wordHint.innerHTML = `<div class="hint-emoji">${currentWordData.hint}</div><p>Can you spell this word?</p>`;
    
    // Create letter slots
    letterSlots.innerHTML = '';
    for (let i = 0; i < wordLength; i++) {
        const slot = document.createElement('div');
        slot.className = 'letter-slot';
        slot.dataset.index = i;
        slot.textContent = selectedLetters[i] || '';
        letterSlots.appendChild(slot);
    }
    
    // Shuffle and create available letters
    const wordLetters = currentWordData.word.split('');
    availableLetters = [...wordLetters];
    // Add some extra random letters
    for (let i = 0; i < 3; i++) {
        const randomLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        if (!availableLetters.includes(randomLetter)) {
            availableLetters.push(randomLetter);
        }
    }
    // Shuffle
    availableLetters = availableLetters.sort(() => Math.random() - 0.5);
    
    availableLettersDiv.innerHTML = '';
    availableLetters.forEach((letter, index) => {
        const letterBtn = document.createElement('button');
        letterBtn.className = 'available-letter-btn';
        letterBtn.textContent = letter;
        letterBtn.dataset.letter = letter;
        letterBtn.dataset.originalIndex = index;
        letterBtn.addEventListener('click', () => selectLetter(letter, letterBtn));
        availableLettersDiv.appendChild(letterBtn);
    });
    
    wordFeedback.innerHTML = '';
    wordFeedback.className = 'word-feedback';
    
    // Speak the hint
    setTimeout(() => {
        SoundManager.speak(`Can you spell ${currentWordData.word.toLowerCase()}?`, 0.8, 1.4);
    }, 500);
}

function selectLetter(letter, button) {
    SoundManager.playClickSound();
    SoundManager.speak(letter, 0.8, 1.4);
    
    const slots = document.querySelectorAll('.letter-slot');
    const emptySlot = Array.from(slots).find(slot => !slot.textContent.trim());
    
    if (emptySlot) {
        const index = parseInt(emptySlot.dataset.index);
        selectedLetters[index] = letter;
        emptySlot.textContent = letter;
        emptySlot.classList.add('filled');
        button.style.opacity = '0.5';
        button.disabled = true;
        
        // Check if word is complete
        if (selectedLetters.filter(l => l).length === currentWordData.word.length) {
            checkWord();
        }
    }
}

function checkWord() {
    const word = selectedLetters.join('');
    const wordFeedback = document.getElementById('word-feedback');
    const slots = document.querySelectorAll('.letter-slot');
    
    if (word === currentWordData.word) {
        // Correct!
        wordFeedback.innerHTML = `<div class="success-message">🎉 Great Job! You spelled ${currentWordData.word}! 🎉</div>`;
        wordFeedback.className = 'word-feedback success';
        slots.forEach(slot => slot.classList.add('correct'));
        
        SoundManager.playYaySound();
        setTimeout(() => {
            SoundManager.speak(`Great job! You spelled ${currentWordData.word.toLowerCase()}!`, 0.8, 1.4);
        }, 500);
        
        // Show emoji
        setTimeout(() => {
            wordFeedback.innerHTML += `<div class="word-emoji-large">${currentWordData.emoji}</div>`;
        }, 1000);
    } else {
        // Wrong
        wordFeedback.innerHTML = `<div class="error-message">Try again! 💪</div>`;
        wordFeedback.className = 'word-feedback error';
        slots.forEach(slot => slot.classList.add('wrong'));
        
        setTimeout(() => {
            slots.forEach(slot => {
                slot.classList.remove('wrong', 'filled');
                slot.textContent = '';
            });
            selectedLetters = [];
            
            // Re-enable all letter buttons
            document.querySelectorAll('.available-letter-btn').forEach(btn => {
                btn.style.opacity = '1';
                btn.disabled = false;
            });
            
            wordFeedback.innerHTML = '';
            wordFeedback.className = 'word-feedback';
        }, 2000);
        
        SoundManager.speak('Try again!', 0.8, 1.4);
    }
}

// Math Game
let currentMathProblem = null;

function initializeMath() {
    const mathTypeButtons = document.querySelectorAll('.math-type-btn');
    const nextProblemBtn = document.getElementById('next-problem-btn');
    
    mathTypeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.math-type-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const mathType = btn.dataset.mathType;
            generateMathProblem(mathType);
        });
    });
    
    nextProblemBtn?.addEventListener('click', () => {
        const activeBtn = document.querySelector('.math-type-btn.active');
        if (activeBtn) {
            const mathType = activeBtn.dataset.mathType;
            generateMathProblem(mathType);
        }
    });
    
    // Start with addition
    generateMathProblem('addition');
}

function generateMathProblem(type) {
    const mathQuestion = document.getElementById('math-question');
    const mathOptions = document.getElementById('math-options');
    const mathFeedback = document.getElementById('math-feedback');
    
    mathFeedback.innerHTML = '';
    mathFeedback.className = 'math-feedback';
    
    let num1, num2, answer, options;
    
    switch(type) {
        case 'addition':
            num1 = Math.floor(Math.random() * 10) + 1;
            num2 = Math.floor(Math.random() * 10) + 1;
            answer = num1 + num2;
            mathQuestion.innerHTML = `<div class="math-problem">${num1} + ${num2} = ?</div>`;
            break;
        case 'subtraction':
            num1 = Math.floor(Math.random() * 10) + 5;
            num2 = Math.floor(Math.random() * num1) + 1;
            answer = num1 - num2;
            mathQuestion.innerHTML = `<div class="math-problem">${num1} - ${num2} = ?</div>`;
            break;
        case 'multiplication':
            num1 = Math.floor(Math.random() * 5) + 1;
            num2 = Math.floor(Math.random() * 5) + 1;
            answer = num1 * num2;
            mathQuestion.innerHTML = `<div class="math-problem">${num1} × ${num2} = ?</div>`;
            break;
        case 'division':
            num2 = Math.floor(Math.random() * 5) + 1;
            answer = Math.floor(Math.random() * 5) + 1;
            num1 = num2 * answer;
            mathQuestion.innerHTML = `<div class="math-problem">${num1} ÷ ${num2} = ?</div>`;
            break;
    }
    
    currentMathProblem = { type, num1, num2, answer };
    
    // Generate options (correct answer + 3 wrong answers)
    options = [answer];
    while (options.length < 4) {
        const wrongAnswer = answer + Math.floor(Math.random() * 10) - 5;
        if (wrongAnswer > 0 && wrongAnswer !== answer && !options.includes(wrongAnswer)) {
            options.push(wrongAnswer);
        }
    }
    options = options.sort(() => Math.random() - 0.5);
    
    mathOptions.innerHTML = '';
    options.forEach(option => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'math-option-btn';
        optionBtn.textContent = option;
        optionBtn.addEventListener('click', () => checkMathAnswer(option, optionBtn));
        mathOptions.appendChild(optionBtn);
    });
    
    // Speak the problem
    setTimeout(() => {
        const problemText = type === 'addition' ? `${num1} plus ${num2}` :
                           type === 'subtraction' ? `${num1} minus ${num2}` :
                           type === 'multiplication' ? `${num1} times ${num2}` :
                           `${num1} divided by ${num2}`;
        SoundManager.speak(`What is ${problemText}?`, 0.8, 1.4);
    }, 500);
}

function checkMathAnswer(selectedAnswer, button) {
    SoundManager.playClickSound();
    
    const mathFeedback = document.getElementById('math-feedback');
    const allButtons = document.querySelectorAll('.math-option-btn');
    
    if (selectedAnswer === currentMathProblem.answer) {
        // Correct!
        button.classList.add('correct');
        mathFeedback.innerHTML = `<div class="success-message">🎉 Correct! Great job! 🎉</div>`;
        mathFeedback.className = 'math-feedback success';
        
        SoundManager.playYaySound();
        setTimeout(() => {
            SoundManager.speak(`Correct! ${currentMathProblem.answer} is the right answer!`, 0.8, 1.4);
        }, 500);
        
        allButtons.forEach(btn => btn.disabled = true);
    } else {
        // Wrong
        button.classList.add('wrong');
        mathFeedback.innerHTML = `<div class="error-message">Try again! 💪</div>`;
        mathFeedback.className = 'math-feedback error';
        
        setTimeout(() => {
            button.classList.remove('wrong');
            mathFeedback.innerHTML = '';
            mathFeedback.className = 'math-feedback';
        }, 1500);
        
        SoundManager.speak('Try again!', 0.8, 1.4);
    }
}
