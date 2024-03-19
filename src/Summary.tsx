import React from 'react';

interface SummaryProps {
    selection: {
        type: string;
        design: string;
        size: string;
        payment: string;
        integration: string;
        login: string;
        multilingual: string;
        search: string;
        seo: string;
        stage: string;
    };
    total: number;
    onReset: () => void;
}

const Summary: React.FC<SummaryProps> = ({ selection, total, onReset }) => {
    return (
        <div>
            <h1 className="font-bold mb-24 mt-24 text-4xl ">Total estimated cost: {total} kr.</h1>
            <h2 className="text-2xl font-bold mb-8">Summary</h2>
            <p className="mb-2">Type of website: {selection.type}</p>
            <p className="mb-2">Design preference: {selection.design}</p>
            <p className="mb-2">Size of the website: {selection.size}</p>
            <p className="mb-2">Payment functionality: {selection.payment}</p>
            <p className="mb-2">Integration needs: {selection.integration}</p>
            <p className="mb-2">User login required: {selection.login}</p>
            <p className="mb-2">Multi-lingual website: {selection.multilingual}</p>
            <p className="mb-2">Internal search required: {selection.search}</p>
            <p className="mb-2">SEO services needed: {selection.seo}</p>
            <p className="mb-2">Website stage: {selection.stage}</p>
            <button className="p-2 mt-10 mb-10 w-44 rounded-full shadow-lg bg-blue-500 text-white hover:bg-blue-600" onClick={onReset}>Reset</button>
        </div>
    );
};

export default Summary;