import React from 'react';

interface TypeSelectionProps {
    onTypeSelect: (type: string, price: number) => void;
}

const TypeSelection: React.FC<TypeSelectionProps> = ({ onTypeSelect }) => {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">What type of website are you looking for?</h2>
            <div className="space-y-2">
                <button className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => onTypeSelect('Ecommerce / Online shop', 500)}>A. Ecommerce / Online shop</button>
                {/* Add the rest of the buttons here, similar to the one above */}
            </div>
        </div>
    );
};

export default TypeSelection;