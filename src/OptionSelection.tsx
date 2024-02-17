import React from 'react';

interface OptionSelectionProps {
    title: string;
    options: { label: string; value: string; price: number; image: string }[];
    onSelect: (value: string, price: number) => void;
}

const OptionSelection: React.FC<OptionSelectionProps> = ({ title, options, onSelect }) => {
    return (
        <div>
            <h1 className="text-2xl font-bold mt-16 mb-24">{title}</h1>
            <div className="flex justify-center flex-wrap">
                {options.map((option) => (
                    <div
                        key={option.value}
                        className="flex-auto min-w-0 max-w-full px-2"
                        style={{ flexBasis: `calc(${100 / options.length}% - 1rem)` }}
                        onClick={() => onSelect(option.value, option.price)}
                    >
                        <div className="h-48 bg-white rounded flex flex-col items-center justify-center shadow-md cursor-pointer hover:bg-gray-100 text-center p-4">
                            <img src={option.image} alt={option.label} className="h-32 w-32 object-cover mb-2" />
                            <p className="text-lg font-regular truncate">{option.label}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OptionSelection;