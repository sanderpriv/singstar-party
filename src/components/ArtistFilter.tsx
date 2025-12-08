import React, { useState, useMemo } from 'react';
import { getArtistColor } from '@/utils/colors';

interface ArtistFilterProps {
    artists: string[];
    selectedArtists: string[];
    onToggleArtist: (artist: string) => void;
}

export const ArtistFilter: React.FC<ArtistFilterProps> = ({ artists, selectedArtists, onToggleArtist }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredArtists = useMemo(() => {
        return artists
            .filter(artist =>
                artist.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .sort((a, b) => a.localeCompare(b));
    }, [artists, searchQuery]);

    return (
        <div className="mb-6">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center justify-between w-full p-4 mb-2 text-left bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
            >
                <div className="flex items-center gap-2">
                    <span className="font-semibold text-white">Filtrer etter artist</span>
                    {selectedArtists.length > 0 && (
                        <span className="px-2 py-0.5 text-xs font-bold text-black bg-secondary rounded-full">
                            {selectedArtists.length}
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
                <div className="p-4 bg-black/20 rounded-lg border border-white/5 animate-in fade-in slide-in-from-top-2 duration-200">
                    <input
                        type="text"
                        placeholder="Søk etter artist..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-4 py-2 mb-4 text-white bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary placeholder-gray-400"
                    />
                    <div className="flex flex-wrap gap-2 max-h-60 overflow-y-auto custom-scrollbar">
                        {filteredArtists.map((artist) => {
                            const isSelected = selectedArtists.includes(artist);
                            const artistColor = getArtistColor(artist);

                            return (
                                <button
                                    key={artist}
                                    onClick={() => onToggleArtist(artist)}
                                    className={`px-3 py-1 text-sm font-medium rounded-full border transition-all duration-300 ${isSelected
                                        ? 'bg-secondary text-black border-secondary shadow-[0_0_10px_rgba(0,255,255,0.5)]'
                                        : 'bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/40 backdrop-blur-sm'
                                        }`}
                                    style={!isSelected ? { color: artistColor, borderColor: artistColor } : {}}
                                >
                                    {artist}
                                </button>
                            );
                        })}
                        {filteredArtists.length === 0 && (
                            <div className="text-gray-400 text-sm italic w-full text-center py-2">
                                Ingen artister funnet
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};
