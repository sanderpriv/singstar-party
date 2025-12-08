const fs = require('fs');
const path = require('path');

const gamesDir = path.join(__dirname, '../src/data/games');
const tsPath = path.join(__dirname, '../src/data/tracks.ts');

const tracks = [];
let trackIdCounter = 1;

// Read all CSV files from games directory
const files = fs.readdirSync(gamesDir).filter(f => f.endsWith('.csv'));

files.forEach(file => {
    const gameName = file.replace('.csv', '');
    const csvPath = path.join(gamesDir, file);
    const content = fs.readFileSync(csvPath, 'utf-8');
    const lines = content.split('\n').filter(l => l.trim());

    lines.forEach((line, index) => {
        if (index === 0) return; // Skip header

        // Parse CSV line (artist,title,year)
        const parts = line.split(',');
        
        if (parts.length < 3) {
            return; // Skip invalid lines
        }

        const artist = parts[0].trim();
        const title = parts.slice(1, -1).join(',').trim(); // Handle commas in titles
        const year = parseInt(parts[parts.length - 1].trim());

        if (!artist || !title || !year) {
            return; // Skip empty lines
        }

        tracks.push({
            id: String(trackIdCounter++),
            artist,
            title,
            year,
            game: gameName
        });
    });
});

const fileContent = `export interface Track {
  id: string;
  artist: string;
  title: string;
  year: number;
  game: string;
}

export interface Game {
  id: string;
  title: string;
  region: string;
  releaseYear: number;
  tracks: Track[];
}

export const tracks: Track[] = ${JSON.stringify(tracks, null, 2)};

export const games: Game[] = [];
`;

fs.writeFileSync(tsPath, fileContent);

console.log(`Generated ${tracks.length} tracks from ${files.length} game files to ${tsPath}`);
