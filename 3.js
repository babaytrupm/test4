document.addEventListener('DOMContentLoaded', function() {
    // Emoji array
    const emojis = ['😂', '🚀', '💎', '📈', '💰', '🔥'];
    
    // Function to create an emoji element
    function createEmoji() {
        const emoji = document.createElement('div');
        emoji.classList.add('emoji');
        emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = Math.random() * 100 + 'vw';
        emoji.style.animationDuration = Math.random() * 10 + 5 + 's';
        document.body.appendChild(emoji);

        // Remove emoji after animation ends
        emoji.addEventListener('animationend', () => {
            emoji.remove();
        });
    }

    // Generate emojis at intervals
    setInterval(createEmoji, 500);
});
