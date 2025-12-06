const fs = require('fs');
const path = require('path');

const csvPath = path.join(__dirname, '../src/data/singstar_tracks.csv');
const tsPath = path.join(__dirname, '../src/data/tracks.ts');

const content = fs.readFileSync(csvPath, 'utf-8');
const lines = content.split('\n').filter(l => l.trim());

const tracks = [];

lines.forEach((line, index) => {
    if (index === 0) return; // Header

    // Simple CSV parser for quoted fields
    // This regex matches quoted fields: "..."
    // It assumes the file is well-formed with quotes around all fields
    const parts = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);

    if (!parts || parts.length < 4) {
        console.warn(`Line ${index + 1}: Invalid format. Skipping.`);
        return;
    }

    // Remove quotes
    const cleanParts = parts.map(p => p.replace(/^"|"$/g, ''));

    const [game, region, artist, title] = cleanParts;

    tracks.push({
        id: String(index),
        artist,
        title,
        game
    });
});

const fileContent = `export interface Track {
  id: string;
  artist: string;
  title: string;
  game: string;
}

export const tracks: Track[] = ${JSON.stringify(tracks, null, 2)};
`;

fs.writeFileSync(tsPath, fileContent);

console.log(`Generated ${tracks.length} tracks to ${tsPath}`);
