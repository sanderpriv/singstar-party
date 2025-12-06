export const getArtistColor = (artist: string): string => {
    let hash = 0;
    for (let i = 0; i < artist.length; i++) {
        hash = artist.charCodeAt(i) + ((hash << 5) - hash);
    }

    // Generate hue from 0 to 360
    const hue = Math.abs(hash % 360);

    // Use fixed saturation and lightness for "neon" look
    // 80% saturation makes it vivid
    // 60% lightness ensures it's readable on dark backgrounds (but not too pastel)
    return `hsl(${hue}, 80%, 60%)`;
};
