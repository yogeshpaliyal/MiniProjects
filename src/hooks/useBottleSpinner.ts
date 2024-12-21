import { useState } from 'react';

export function useBottleSpinner(playerCount: number) {
  const [rotation, setRotation] = useState(0);

  const spin = async () => {
    const minSpins = 5;
    const maxSpins = 8;
    const spins = minSpins + Math.random() * (maxSpins - minSpins);
    const sectionSize = 360 / playerCount;
    
    // For 2 players, only stop at 0 or 180 degrees (player positions)
    let targetRotation;
    if (playerCount === 2) {
      const randomPlayer = Math.random() < 0.5 ? 0 : 1; // Randomly choose player 1 or 2
      targetRotation = spins * 360 + randomPlayer * 180; // 180 degrees between players
    } else {
      const randomSection = Math.floor(Math.random() * playerCount);
      const randomOffset = Math.random() * sectionSize;
      targetRotation = spins * 360 + randomSection * sectionSize + randomOffset;
    }

    setRotation(targetRotation);

    return new Promise<void>((resolve) => {
      setTimeout(() => resolve(), 2000);
    });
  };

  return { rotation, spin };
}