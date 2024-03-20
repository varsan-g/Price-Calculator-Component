// ContactForm.tsx
import React, { useState } from 'react';

interface ContactFormProps {
    onSubmit: (contactDetails: { name: string; email: string; phone: string; }) => void;
    onReset: () => void;
    total: number;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, onReset, total }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit({ name, email, phone });
        setSubmitted(true);

        const formData = {
            name: name,
            email: email,
            phone: phone,
        };

        try {
            const response = await fetch('https://sheet.best/api/sheets/fa2b0cc9-6e5d-4be2-ab7a-82976f027b37', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Api-Key': 'WBay%JNzItr6@ieCJYLZ$0uE8Vxk_2t1WMOreiWYqefBQs$iiwqDxsk!aMrP#anO' // API key included here
                },
                body: JSON.stringify([formData]) // Sheet.best expects an array of objects
            });

            if (response.ok) {
                // The form was submitted successfully to Sheet.best
                setSubmitted(true);
            } else {
                // Handle errors, such as displaying a user-friendly message
                console.error('Failed to post data: ', await response.text());
            }
        } catch (error) {
            // Handle network errors, such as displaying a user-friendly message
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
                            placeholder="Lathes Varsan"
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
                            placeholder="info@nordweb.dk"
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
                            Få mit uforpligtende tilbud
                        </button>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default ContactForm;