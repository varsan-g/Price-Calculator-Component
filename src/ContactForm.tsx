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
            <div className="text-white mb-14">
                <h2 className="text-3xl font-bold">
                    Total estimeret pris: {total} kr
                </h2>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-12 mt-14 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={onReset}
                >
                    Start forfra
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <form onSubmit={handleSubmit} className="w-full max-w-lg">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-m font-bold mb-2" htmlFor="name">
                            Navn*
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
                        <label className="block uppercase tracking-wide text-white text-m font-bold mb-2" htmlFor="email">
                            E-mail*
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="email"
                            type="email"
                            placeholder="kontakt@nordweb.dk"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-m font-bold mb-2" htmlFor="phone">
                            Telefonnummer
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-12 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            SE DIN PRIS
                        </button>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default ContactForm;
