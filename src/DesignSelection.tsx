import React from 'react';

interface DesignSelectionProps {
    onDesignSelect: (design: string, price: number) => void;
}

const DesignSelection: React.FC<DesignSelectionProps> = ({ onDesignSelect }) => {
    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">What design do you want for your website?</h2>
            <div className="space-y-2">
                <button className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => onDesignSelect('Use a template', 100)}>A. Use a template</button>
                {/* Add the rest of the buttons here, similar to the one above */}
            </div>
        </div>
    );
};

export default DesignSelection;