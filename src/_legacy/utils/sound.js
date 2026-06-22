// Utility to play synthesized mechanical keyboard click sounds
export const playClickSound = () => {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;

        const ctx = new AudioContext();

        // White noise buffer for the "clack"
        const bufferSize = ctx.sampleRate * 0.05; // 50ms of noise
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);

        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }

        const noiseSource = ctx.createBufferSource();
        noiseSource.buffer = buffer;

        // Lowpass filter to make it sound muffled/mechanical rather than harsh static
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1000 + Math.random() * 500, ctx.currentTime);

        // Gain envelope for sharp attack and decay
        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.5, ctx.currentTime); // moderate volume
        gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.04);

        noiseSource.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        noiseSource.start();

        // Cleanup to prevent memory leaks if many context creations occur
        setTimeout(() => {
            if (ctx.state === 'running') {
                ctx.close();
            }
        }, 100);

    } catch (e) {
        // Ignore errors if Audio API fails or is blocked by browser policies
        console.warn("Audio play failed:", e);
    }
};
