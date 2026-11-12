import confetti from 'canvas-confetti';

export function triggerCosmicConfetti(accentColor = '#FFFFFF') {
  confetti({
    particleCount: 60,
    spread: 70,
    origin: { y: 0.7 },
    colors: ['#ffffff', accentColor, '#a1a1aa', '#3f3f46'],
    disableForReducedMotion: true
  });
}
