'use client';

import React, { useState, useMemo } from 'react';
import { tracks } from '@/data/tracks';
import { SearchBar } from '@/components/SearchBar';
import { GameFilter } from '@/components/GameFilter';
import { ArtistFilter } from '@/components/ArtistFilter';
import { TrackList } from '@/components/TrackList';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGames, setSelectedGames] = useState<string[]>([]);
  const [selectedArtists, setSelectedArtists] = useState<string[]>([]);

  const games = useMemo(() => {
    const uniqueGames = new Set(tracks.map(t => t.game));
    return Array.from(uniqueGames).sort();
  }, []);

  const artists = useMemo(() => {
    const uniqueArtists = new Set(tracks.map(t => t.artist));
    return Array.from(uniqueArtists).sort();
  }, []);

  const filteredTracks = useMemo(() => {
    return tracks.filter((track) => {
      const matchesSearch =
        track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        track.artist.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesGame =
        selectedGames.length === 0 || selectedGames.includes(track.game);

      const matchesArtist =
        selectedArtists.length === 0 || selectedArtists.includes(track.artist);

      return matchesSearch && matchesGame && matchesArtist;
    });
  }, [searchQuery, selectedGames, selectedArtists]);

  const handleToggleGame = (game: string) => {
    setSelectedGames(prev =>
      prev.includes(game)
        ? prev.filter(g => g !== game)
        : [...prev, game]
    );
  };

  const handleToggleArtist = (artist: string) => {
    setSelectedArtists(prev =>
      prev.includes(artist)
        ? prev.filter(a => a !== artist)
        : [...prev, artist]
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary mb-4 drop-shadow-[0_0_15px_rgba(255,0,255,0.5)]">
            SingStar Search
          </h1>
          <p className="text-gray-300 text-lg">
            Sanders SingStar Party
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/10 mb-8">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />

          <div className="grid md:grid-cols-2 gap-4">
            <GameFilter
              games={games}
              selectedGames={selectedGames}
              onToggleGame={handleToggleGame}
            />
            <ArtistFilter
              artists={artists}
              selectedArtists={selectedArtists}
              onToggleArtist={handleToggleArtist}
            />
          </div>
        </div>

        <TrackList tracks={filteredTracks} />
      </div>
    </main>
  );
}
