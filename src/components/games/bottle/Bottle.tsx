interface BottleProps {
  rotation: number;
  onClick: () => void;
  disabled: boolean;
}

export function Bottle({ rotation, onClick, disabled }: BottleProps) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center cursor-pointer"
      onClick={onClick}
      style={{ pointerEvents: disabled ? 'none' : 'auto' }}
    >
      <div
        className="w-64 h-64 relative transition-transform duration-[2000ms] ease-out"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <img 
          src="https://images.unsplash.com/photo-1630396592772-246c7863c40c?auto=format&fit=crop&q=80&w=200"
          alt="Bottle"
          className="absolute inset-0 w-full h-full object-contain transform scale-[0.15,1]"
        />
      </div>
    </div>
  );
}