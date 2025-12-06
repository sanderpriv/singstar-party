import React from 'react';
import { Track } from '@/data/tracks';

interface TrackListProps {
    tracks: Track[];
}

export const TrackList: React.FC<TrackListProps> = ({ tracks }) => {
    if (tracks.length === 0) {
        return <div className="text-center text-gray-400 mt-8">Ingen sanger funnet.</div>;
    }

    return (
        <div className="space-y-4">
            {/* Mobile View (Cards) */}
            <div className="md:hidden space-y-4">
                {tracks.map((track) => (
                    <div
                        key={track.id}
                        className="bg-white/5 border border-white/10 rounded-lg p-4 shadow-sm hover:bg-white/10 transition-colors"
                    >
                        <div className="font-bold text-white text-lg mb-1">{track.title}</div>
                        <div className="text-primary font-medium mb-2">{track.artist}</div>
                        <div className="text-xs text-gray-400 uppercase tracking-wider">{track.game}</div>
                    </div>
                ))}
            </div>

            {/* Desktop View (Table) */}
            <div className="hidden md:block relative overflow-x-auto shadow-lg sm:rounded-lg border border-white/10">
                <table className="w-full text-sm text-left rtl:text-right text-gray-300">
                    <thead className="text-xs text-white uppercase bg-black/40 backdrop-blur-md border-b border-white/10">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-primary">
                                Artist
                            </th>
                            <th scope="col" className="px-6 py-3 text-secondary">
                                Tittel
                            </th>
                            <th scope="col" className="px-6 py-3 text-accent">
                                Spill
                            </th>
                        </tr>
                    </thead>
                    <tbody className="relative">
                        {tracks.map((track) => (
                            <tr
                                key={track.id}
                                className="bg-black/20 border-b border-white/5 hover:bg-white/5 transition-colors"
                            >
                                <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap">
                                    {track.artist}
                                </th>
                                <td className="px-6 py-4 text-gray-200">
                                    {track.title}
                                </td>
                                <td className="px-6 py-4 text-gray-400">
                                    {track.game}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
