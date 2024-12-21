interface PlayerIndicatorProps {
  playerCount: number;
}

export function PlayerIndicator({ playerCount }: PlayerIndicatorProps) {
  const positions = Array.from({ length: playerCount }, (_, i) => {
    const angle = (i * 360) / playerCount;
    const radius = 45;
    const x = radius * Math.cos((angle - 90) * (Math.PI / 180));
    const y = radius * Math.sin((angle - 90) * (Math.PI / 180));
    return { x, y, angle };
  });

  return (
    <div className="absolute inset-0">
      {positions.map((pos, i) => (
        <div
          key={i}
          className="absolute w-8 h-8 -ml-4 -mt-4 bg-gray-200 rounded-full flex items-center justify-center text-sm font-medium text-gray-700"
          style={{
            left: `${50 + pos.x}%`,
            top: `${50 + pos.y}%`,
          }}
        >
          {i + 1}
        </div>
      ))}
    </div>
  );
}