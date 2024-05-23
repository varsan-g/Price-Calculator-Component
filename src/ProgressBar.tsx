import React from 'react';

interface ProgressBarProps {
    currentStep: number;
    totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
    const percentage = (currentStep / totalSteps) * 100;

    // Calculate the interpolated color
    const interpolateColor = (startColor: string, endColor: string, factor: number) => {
        const result = startColor.slice(1).match(/.{1,2}/g)!.map((c, i) => {
            const start = parseInt(c, 16);
            const end = parseInt(endColor.slice(1).match(/.{1,2}/g)![i], 16);
            const value = Math.round(start + (end - start) * factor).toString(16);
            return value.padStart(2, '0');
        });
        return `#${result.join('')}`;
    };

    const startColor = '#1e3a8a'; // blue-900
    const midColor = '#3b82f6'; // blue-500
    const endColor = '#10b981'; // green-500

    let interpolatedColor;
    if (percentage <= 90) {
        interpolatedColor = interpolateColor(startColor, midColor, percentage / 90);
    } else {
        interpolatedColor = interpolateColor(midColor, endColor, (percentage - 90) / 10);
    }

    return (
        <div className="w-1/2 lg:w-1/6 mx-auto bg-gray-900 rounded-full h-4 mb-8">
            <div
                className="h-4 rounded-full transition-width duration-500 ease-in-out"
                style={{
                    width: `${percentage}%`,
                    backgroundColor: interpolatedColor,
                    boxShadow: percentage >= 90 ? '0 0 15px rgba(72, 187, 120, 0.7)' : 'none',
                }}
            ></div>
        </div>
    );
};

export default ProgressBar;
