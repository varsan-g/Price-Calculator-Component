import React, { useState } from 'react';

interface ContactFormProps {
    onSubmit: (contactDetails: { name: string; email: string; phone: string; }) => void;
    onReset: () => void;
    total: number;
    selection: { type: string; design: string; size: string; language: string; branding: string; webdesign: string, content: string; };
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, onReset, total, selection }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit({ name, email, phone });
        setSubmitted(true);

        const formData = new FormData();
        formData.append('Name', name);
        formData.append('Email', email);
        formData.append('Phone', phone);
        formData.append('Price', total.toString());


        // Align with the correct order
        formData.append('Type', selection.type);
        formData.append('Design', selection.design);
        formData.append('Size', selection.size);
        formData.append('Language', selection.language);
        formData.append('Branding', selection.branding);
        formData.append('Webdesign', selection.webdesign);
        formData.append('Content', selection.content);


        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbwapXbDbF-c6KecKjqET0PFnW90x8rgNpGgsSBkvfEloNm79Wcq9Vi8kH55-qJ7jQlSyA/exec', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                // The form was submitted successfully to Google Sheets script
                setSubmitted(true);
            } else {
                console.error('Failed to post data: ', await response.text());
            }
        } catch (error) {
            console.error('Error posting data: ', error);
        }
    };

    if (submitted) {
        return (
            <div className="mb-14 text-center text-white">
                <h1 className="text-4xl font-bold mb-6">Dit prisestimat</h1>
                <p className="text-xl mb-12 font-light opacity-70 ">Prisen er beregnet ud fra dine valg eksl. moms:</p>
                <div className="bg-green-900 py-7 px-24 inline-block rounded-xl mb-12 border-4 border-green-600 ">
                    <p className="text-5xl font-bold text-white">{`DKK ${total}.-`}</p>
                </div>
                <p className="text-lg mb-12 font-light text-white opacity-70">
                    Du vil indenfor kort tid blive kontaktet angående dit tilbud, <br />
                    hvor du vil have mulighed for at tage næste skridt.
                </p>
                <p className="text-sm italic font-light mb-12 text-white opacity-50">
                    OBS: Vær opmærksom på, at vi altid udarbejder et personligt og
                    uforpligtende tilbud tilpasset den specifikke opgave.<br />Da ingen
                    to hjemmesider er ens, kan den endelige pris variere
                    efter en nærmere dialog om dit projekt.
                </p>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-12 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={onReset}
                >
                    Start forfra
                </button>
            </div>
        );
    }


    return (
        <div className="flex flex-col items-center w-full">
            <form onSubmit={handleSubmit} className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block tracking-wide text-white text-m font-bold mb-2 text-left" htmlFor="name">
                            Navn <span className="text-red-500">*</span>
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-900 text-white border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-700"
                            id="name"
                            type="text"
                            placeholder="Jens Jensen"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block text-white text-m font-bold mb-2 text-left" htmlFor="email">
                            E-mail <span className="text-red-500">*</span>
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-900 text-white border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-700"
                            id="email"
                            type="email"
                            placeholder="mail@dinmail.dk"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block tracking-wide text-white text-m font-bold mb-2 text-left" htmlFor="phone">
                            Telefonnummer
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-900 text-white border border-gray-600 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-700"
                            id="phone"
                            type="tel"
                            placeholder="+45 30 14 42 40"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6 mt-14">
                    <div className="w-full px-4">
                        <button
                            className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-3 px-12 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            BEREGN PRISEN
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;