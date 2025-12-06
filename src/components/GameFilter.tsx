import React from 'react';

interface GameFilterProps {
    games: string[];
    selectedGames: string[];
    onToggleGame: (game: string) => void;
}

export const GameFilter: React.FC<GameFilterProps> = ({ games, selectedGames, onToggleGame }) => {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <div className="mb-6">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full p-4 mb-2 text-left bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
            >
                <div className="flex items-center gap-2">
                    <span className="font-semibold text-white">Filtrer etter spill</span>
                    {selectedGames.length > 0 && (
                        <span className="px-2 py-0.5 text-xs font-bold text-black bg-primary rounded-full">
                            {selectedGames.length}
                        </span>
                    )}
                </div>
                <svg
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="flex flex-wrap gap-2 p-4 bg-black/20 rounded-lg border border-white/5 animate-in fade-in slide-in-from-top-2 duration-200">
                    {games.map((game) => (
                        <button
                            key={game}
                            onClick={() => onToggleGame(game)}
                            className={`px-3 py-1 text-sm font-medium rounded-full border transition-all duration-300 ${selectedGames.includes(game)
                                ? 'bg-primary text-white border-primary shadow-[0_0_10px_rgba(255,0,255,0.5)]'
                                : 'bg-white/10 text-gray-300 border-white/20 hover:bg-white/20 hover:border-white/40 backdrop-blur-sm'
                                }`}
                        >
                            {game}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};
