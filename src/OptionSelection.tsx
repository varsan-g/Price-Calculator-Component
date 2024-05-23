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
    return (
        <div>
            <h1 className="text-2xl font-bold mt-16 mb-4 text-white">{title}</h1>
            <h2 className="text-xl font-light mb-16 text-white">{subtitle}</h2>
            <div className="flex justify-center flex-wrap">
                {options.map((option) => (
                    <div
                        key={option.value}
                        className="flex-auto min-w-50 max-w-full px-2 mb-8 text-center"
                        style={{ flexBasis: `calc(${100 / options.length}% - 1rem)` }}
                        onClick={() => onSelect(option.value, option.price)}
                    >
                        <div className="rounded-3xl flex items-align justify-center shadow-md cursor-pointer p-8 text-white hover-gradient" style={{ backgroundColor: '#0e0e0e', height: 'auto' }}>
                            <lord-icon
                                src={option.lordicon}
                                trigger="hover"
                                stroke="regular"
                                colors="primary:#ffffff,secondary:#ffffff"
                                style={{ width: '50px', height: '50px' }}
                            ></lord-icon>
                        </div>
                        <p className="text-xl font-light mt-4">{option.label}</p>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default OptionSelection;
