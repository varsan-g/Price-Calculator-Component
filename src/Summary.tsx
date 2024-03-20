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
            <h1 className="text-4xl font-bold mb-14">Oversigt</h1>
            <p className="mb-2">Type af hjemmeside: {selection.type}</p>
            <p className="mb-2">Design præference: {selection.design}</p>
            <p className="mb-2">Størrelse på siden: {selection.size}</p>
            <p className="mb-2">Betalingsmetode nødvendigt: {selection.payment}</p>
            <p className="mb-2">Brug for integration: {selection.integration}</p>
            <p className="mb-2">Bruger login nødvendigt: {selection.login}</p>
            <p className="mb-2">Fleresproget hjemmeside: {selection.multilingual}</p>
            <p className="mb-2">Intern søgning nødvendigt: {selection.search}</p>
            <p className="mb-2">Brug for SEO services: {selection.seo}</p>
            <p className="mb-2">Hjemmeside stadie: {selection.stage}</p>
            <h2 className="font-bold mb-16 mt-14 text-3xl ">Total estimeret pris: {total} kr</h2>
            <button className="p-2 mt-2 mb-10 w-44 rounded-full shadow-lg bg-blue-500 text-white hover:bg-blue-600" onClick={onReset}>Prøv igen</button>
        </div>
    );
};

export default Summary;