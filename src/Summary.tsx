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
            <p className="font-bold mb-4">Total cost: {total} kr.</p>
            <h2 className="text-xl font-semibold mb-4">Summary</h2>
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
            <button className="p-2 bg-red-500 text-white rounded hover:bg-red-600" onClick={onReset}>Start Over</button>
        </div>
    );
};

export default Summary;