import { useState } from 'react';
import { Users } from 'lucide-react';

interface PlayerSetupProps {
  onPlayerCountSubmit: (count: number) => void;
}

export function PlayerSetup({ onPlayerCountSubmit }: PlayerSetupProps) {
  const [count, setCount] = useState<number>(2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (count >= 2 && count <= 10) {
      onPlayerCountSubmit(count);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 text-center">
      <div className="flex justify-center mb-6">
        <Users className="h-12 w-12 text-blue-600" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        How many players?
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="number"
            min="2"
            max="10"
            value={count}
            onChange={(e) => setCount(parseInt(e.target.value))}
            className="block w-full max-w-xs mx-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <p className="mt-2 text-sm text-gray-500">
            Min: 2 players, Max: 10 players
          </p>
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Start Game
        </button>
      </form>
    </div>
  );
}