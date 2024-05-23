import React from 'react';
import lottie from 'lottie-web';
import { defineElement } from '@lordicon/element';

defineElement(lottie.loadAnimation);

declare namespace JSX {
    interface IntrinsicElements {
        'lord-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
            src: string;
            trigger: string;
            delay?: string;
            colors: string;
            stroke?: string;
            style?: React.CSSProperties;
        };
    }
}

interface Option {
    label: string;
    shortLabel?: string; // Make shortLabel optional
    value: string;
    price: number;
    lordicon: string;
}

interface OptionSelectionProps {
    title: string;
    subtitle: string;
    options: Option[];
    onSelect: (value: string, price: number) => void;
}

const OptionSelection: React.FC<OptionSelectionProps> = ({ title, subtitle, options, onSelect }) => {
    const isTwoOptions = options.length === 2;
    const isThreeOptions = options.length === 3;
    const isFourOptions = options.length === 4;

    return (
        <div>
            <h1 className="text-2xl font-bold mt-16 mb-4 text-white">{title}</h1>
            <h2 className="text-xl font-light mb-16 text-white">{subtitle}</h2>
            <div className={`grid gap-4 ${isTwoOptions ? 'grid-cols-2 md:grid-cols-2 lg:grid-cols-2 justify-center' : ''} ${isThreeOptions ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-3' : ''} ${isFourOptions ? 'grid-cols-2 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}`}>
                {options.map((option, index) => (
                    <div
                        key={option.value}
                        className={`flex-auto text-center ${isThreeOptions && index === 2 ? 'col-span-2 md:col-span-1 lg:col-span-1' : ''} ${isFourOptions && index >= 2 ? 'col-span-1 md:col-span-1' : ''}`}
                        onClick={() => onSelect(option.value, option.price)}
                    >
                        <div className="rounded-3xl flex items-center justify-center shadow-md cursor-pointer p-4 md:p-8 lg:p-10 text-white hover-gradient" style={{ backgroundColor: '#0e0e0e', height: 'auto' }}>
                            <lord-icon
                                src={option.lordicon}
                                trigger="hover"
                                stroke="regular"
                                colors="primary:#ffffff,secondary:#ffffff"
                                style={{ width: '60px', height: '60px' }}
                                className="md:w-16 md:h-16 lg:w-20 lg:h-20"
                            ></lord-icon>
                        </div>
                        <p className="text-base font-light mt-2 md:text-lg md:mt-3 lg:text-xl lg:mt-4">
                            <span className="block md:hidden">{option.shortLabel || option.label}</span>
                            <span className="hidden md:block">{option.label}</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OptionSelection;
