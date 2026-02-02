import { useCallback } from 'react';
import { Howl } from 'howler';

// Preload the click sound (placeholder URL)
const clickSound = new Howl({
  src: ['https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3'], // Mechanical click
  volume: 0.5,
});

export const useGlobalAudio = () => {
  const playClick = useCallback(() => {
    clickSound.play();
  }, []);

  return { playClick };
};
