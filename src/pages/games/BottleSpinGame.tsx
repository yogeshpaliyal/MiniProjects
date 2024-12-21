import { useState } from 'react';
import { PlayerSetup } from '../../components/games/bottle/PlayerSetup';
import { BottleGame } from '../../components/games/bottle/BottleGame';

export function BottleSpinGame() {
  const [playerCount, setPlayerCount] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {!playerCount ? (
          <PlayerSetup onPlayerCountSubmit={setPlayerCount} />
        ) : (
          <BottleGame playerCount={playerCount} onReset={() => setPlayerCount(null)} />
        )}
      </div>
    </div>
  );
}