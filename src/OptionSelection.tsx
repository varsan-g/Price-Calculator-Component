import React from 'react';
import lottie from 'lottie-web';
import { defineElement } from '@lordicon/element';

defineElement(lottie.loadAnimation);


declare namespace JSX {
    interface IntrinsicElements {
        'lord-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
            src: string;
            trigger: string;
            colors: string;
            stroke?: string;
            style?: React.CSSProperties;
        };
    }
}

interface Option {
    label: string;
    value: string;
    price: number;
    lordicon: string;
}

interface OptionSelectionProps {
    title: string;
    options: Option[];
    onSelect: (value: string, price: number) => void;
}

const OptionSelection: React.FC<OptionSelectionProps> = ({ title, options, onSelect }) => {
    return (
        <div>
            <h1 className="text-2xl font-bold mt-16 mb-20 text-white">{title}</h1>
            <div className="flex justify-center flex-wrap">
                {options.map((option) => (
                    <div
                        key={option.value}
                        className="flex-auto min-w-50 max-w-full px-4 mb-10 text-center"
                        style={{ flexBasis: `calc(${100 / options.length}% - 1rem)` }}
                        onClick={() => onSelect(option.value, option.price)}
                    >
                        <div className="bg-gray-700 rounded-2xl flex items-center justify-center shadow-md cursor-pointer hover:bg-gray-600 p-4 text-white" style={{ height: 'auto' }}>
                            <lord-icon
                                src={option.lordicon}
                                trigger="hover"
                                stroke="bold"
                                colors="primary:#ffffff,secondary:#ffffff"
                                style={{ width: '80px', height: '80px' }}
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