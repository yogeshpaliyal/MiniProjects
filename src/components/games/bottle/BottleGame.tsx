import { useState } from 'react';
import { Bottle } from './Bottle';
import { PlayerIndicator } from './PlayerIndicator';
import { useBottleSpinner } from '../../../hooks/useBottleSpinner';

interface BottleGameProps {
  playerCount: number;
  onReset: () => void;
}

export function BottleGame({ playerCount, onReset }: BottleGameProps) {
  const [isSpinning, setIsSpinning] = useState(false);
  const { rotation, spin } = useBottleSpinner(playerCount);

  const handleSpin = () => {
    if (!isSpinning) {
      setIsSpinning(true);
      spin().finally(() => setIsSpinning(false));
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Bottle Spinning Game
          </h2>
          <button
            onClick={onReset}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
          >
            Change Players
          </button>
        </div>

        <div className="relative aspect-square max-w-md mx-auto">
          <PlayerIndicator playerCount={playerCount} />
          <Bottle rotation={rotation} onClick={handleSpin} disabled={isSpinning} />
        </div>

        <div className="text-center mt-8">
          <button
            onClick={handleSpin}
            disabled={isSpinning}
            className="px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSpinning ? 'Spinning...' : 'Spin Bottle'}
          </button>
        </div>
      </div>
    </div>
  );
}