export interface Track {
  id: string;
  artist: string;
  title: string;
  year: number;
}

export interface Game {
  id: string;
  title: string;
  region: string;
  releaseYear: number;
  tracks: Track[];
}

// Games will be imported from individual JSON files
// Tracks will be added to each game file later
export const games: Game[] = [];
