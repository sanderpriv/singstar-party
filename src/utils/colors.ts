export const getArtistColor = (artist: string): string => {
    let hash = 0;
    for (let i = 0; i < artist.length; i++) {
        hash = artist.charCodeAt(i) + ((hash << 5) - hash);
    }

    // Generate hue from 0 to 360
    let hue = Math.abs(hash % 360);
    
    // Avoid muddy/dark hues (browns/dark yellows around 30-60 degrees)
    // If in that range, shift to a brighter color
    if (hue >= 30 && hue <= 60) {
        hue = (hue + 180) % 360; // Shift to blue-cyan range
    }

    // Use high saturation and lightness for better contrast on dark backgrounds
    // 85% saturation for vivid colors
    // 70% lightness ensures good visibility while maintaining vibrancy
    return `hsl(${hue}, 85%, 70%)`;
};
