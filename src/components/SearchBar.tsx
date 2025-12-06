import React from 'react';

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
    return (
        <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-5 h-5 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
            </div>
            <input
                type="search"
                className="block w-full p-4 pl-10 text-sm text-white border border-white/10 rounded-lg bg-black/20 focus:ring-primary focus:border-primary placeholder-gray-400 backdrop-blur-sm transition-all focus:bg-black/40"
                placeholder="Søk etter sang, artist..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};
