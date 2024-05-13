// src/App.tsx
import React, { useState } from 'react';
import OptionSelection from './OptionSelection';
import ContactForm from './ContactForm';
import 'lord-icon-element';

type Step = 'start' | 'type' | 'design' | 'size' | 'language' | 'branding' | 'webdesign' | 'content' | 'contact';

interface Selection {
  type: string;
  design: string;
  size: string;
  language: string;
  branding: string;
  webdesign: string;
  content: string;
}

const App: React.FC = () => {
  const [step, setStep] = useState<Step>('start');
  const [selection, setSelection] = useState<Selection>({
    type: '',
    design: '',
    size: '',
    language: '',
    branding: '',
    webdesign: '',
    content: '',
  });

  const [total, setTotal] = useState<number>(0);
  const totalSteps = 7;

  const handleStart = () => {
    setStep('type');
  };

  const getCurrentStepNumber = (): number => {
    const stepOrder: Step[] = ['type', 'design', 'size', 'language', 'branding', 'webdesign', 'content'];
    return stepOrder.indexOf(step) + 1;
  };

  const handleTypeSelect = (type: string, price: number) => {
    setSelection({ ...selection, type });
    setTotal(total + price);
    setStep('design');
  };

  const handleDesignSelect = (design: string, price: number) => {
    setSelection({ ...selection, design });
    setTotal(total + price);
    setStep('size');
  };

  const handleSizeSelect = (size: string, price: number) => {
    setSelection({ ...selection, size });
    setTotal(total + price);
    setStep('language');
  };

  const handleLanguageSelect = (value: string, price: number) => {
    setSelection({ ...selection, language: value });
    setTotal(total + price);
    setStep('branding');
  };

  const handleBrandingSelect = (value: string, price: number) => {
    setSelection({ ...selection, branding: value });
    setTotal(total + price);
    setStep('webdesign');
  };

  const handleWebdesignSelect = (value: string, price: number) => {
    setSelection({ ...selection, webdesign: value });
    setTotal(total + price);
    setStep('content');
  };

  const handleContentSelect = (value: string, price: number) => {
    setSelection({ ...selection, content: value });
    setTotal(total + price);
    setStep('contact');
  };

  const handleReset = () => {
    setSelection({ type: '', design: '', size: '', language: '', branding: '', webdesign: '', content: '' });
    setTotal(0);
    setStep('type');
  };

  const handleContactFormSubmit = (contactDetails: { name: string; email: string; phone: string; }) => {
    console.log(contactDetails);
  };

  const typeOptions = [
    { label: 'Ny hjemmeside', value: 'NewSite', price: 1000, lordicon: 'https://cdn.lordicon.com/fzfkoxxo.json' },
    { label: 'Opdatering af eksisterende hjemmeside', value: 'UpdateSite', price: 1750, lordicon: 'https://cdn.lordicon.com/kmifwsos.json' },
  ];

  const designOptions = [
    { label: 'Simpel præsentation', value: 'Lille', price: 500, lordicon: 'https://cdn.lordicon.com/ocqzmzvc.json' },
    { label: 'Kundehenvendelser & præsentation', value: 'Mellem', price: 1500, lordicon: 'https://cdn.lordicon.com/piwupaqb.json' },
    { label: 'Større avanceret hjemmeside', value: 'Stor', price: 0, lordicon: 'https://cdn.lordicon.com/oqrxcabg.json' },
    { label: 'Jeg ved det ikke endnu', value: 'Ved ikke', price: 350, lordicon: 'https://cdn.lordicon.com/getzhpti.json' },
  ];

  const sizeOptions = [
    { label: 'One-Pager (1 side)', value: 'Lille', price: 0, lordicon: 'https://cdn.lordicon.com/gvaavcmy.json' },
    { label: '2-3 Sider', value: 'Mellem', price: 750, lordicon: 'https://cdn.lordicon.com/keqtrnri.json' },
    { label: '5-10 Sider', value: 'Stor', price: 1500, lordicon: 'https://cdn.lordicon.com/wezpwbvv.json' },
    { label: '10+ Sider', value: 'Mega', price: 350, lordicon: 'https://cdn.lordicon.com/ykbtejih.json' },
  ];

  const languageOptions = [
    { label: 'Ja', value: 'Ja', price: 1000, lordicon: 'https://cdn.lordicon.com/skayvuob.json' },
    { label: 'Nej', value: 'Nej', price: 0, lordicon: 'https://cdn.lordicon.com/rmkpgtpt.json' },
    { label: 'Jeg ved det ikke endnu', value: 'Ved ikke', price: 250, lordicon: 'https://cdn.lordicon.com/getzhpti.json' },
  ];

  const brandingOptions = [
    { label: 'Ja', value: 'Ja', price: 1000, lordicon: 'https://cdn.lordicon.com/wvsldibu.json' },
    { label: 'Nej', value: 'Nej', price: 0, lordicon: 'https://cdn.lordicon.com/rmkpgtpt.json' },
    { label: 'Jeg ved det ikke endnu', value: 'Ved ikke', price: 250, lordicon: 'https://cdn.lordicon.com/getzhpti.json' },
  ];

  const webdesignOptions = [
    { label: 'Ja', value: 'Ja', price: 1000, lordicon: 'https://cdn.lordicon.com/cgzlioyf.json' },
    { label: 'Delvist klar', value: 'Delvist klar', price: 0, lordicon: 'https://cdn.lordicon.com/wuvorxbv.json' },
    { label: 'Nej, jeg har alt klar', value: 'Nej', price: 0, lordicon: 'https://cdn.lordicon.com/rmkpgtpt.json' },
    { label: 'Jeg ved det ikke endnu', value: 'Ved ikke', price: 250, lordicon: 'https://cdn.lordicon.com/getzhpti.json' },
  ];

  const contentOptions = [
    { label: 'Ja', value: 'Ja', price: 1000, lordicon: 'https://cdn.lordicon.com/cgzlioyf.json' },
    { label: 'Jeg leverer enkelte tekster og billeder', value: 'Delvist klar', price: 0, lordicon: 'https://cdn.lordicon.com/wvizcxne.json' },
    { label: 'Nej, jeg leverer alt', value: 'Nej', price: 0, lordicon: 'https://cdn.lordicon.com/loscgwts.json' },
    { label: 'Jeg ved det ikke endnu', value: 'Ved ikke', price: 250, lordicon: 'https://cdn.lordicon.com/getzhpti.json' },
  ];

  const renderStartComponent = () => {
    if (step === 'start') {
      return (
        <div className="text-center flex flex-col items-center">
          <div className="mb-8">
            <lord-icon
              src="https://cdn.lordicon.com/wzwygmng.json"
              trigger="in"
              stroke="bold"
              colors="primary:#ffffff,secondary:#ffffff"
              style={{ width: '80px', height: '80px' }}
            ></lord-icon>
          </div>
          <h1 className="text-3xl font-bold mb-8">Få et prisestimat på din drømmehjemmeside</h1>
          <p className="mb-10 opacity-65">Prøv vores prisberegner, og få et estimat på hvad din hjemmeside vil koste at udvikle. <br />
            Den præsenterede pris er vejledende, og kan variere efter specifikke funktioner og anmodninger.</p>
          <button
            className="bg-gray-700 text-white text-xl sm:text-2xl md:text-3xl font-bold py-5 sm:py-5 md:py-7 px-20 sm:px-20 md:px-32 focus:outline-none focus:shadow-outline hover-gradient rounded-2xl"
            onClick={handleStart}
          >
            Start nu
          </button>
          <div className="mt-4 opacity-40 flex items-center justify-center">
            <lord-icon
              src="https://cdn.lordicon.com/qvyppzqz.json"
              trigger="loop"
              colors="primary:#ffffff,secondary:#ffffff"
              style={{ width: '25px', height: '25px' }}
            ></lord-icon>
            <p className="ml-1">Tager kun 1-2 minutter</p>
          </div>
        </div>
      );
    }
    return null;
  };


  const renderCurrentStep = () => {

    switch (step) {
      case 'type':
        return <OptionSelection title="Hvad skal du bruge?" options={typeOptions} onSelect={handleTypeSelect} />;
      case 'design':
        return <OptionSelection title="Hvad er formålet med siden?" options={designOptions} onSelect={handleDesignSelect} />;
      case 'size':
        return <OptionSelection title="Hvor mange sider skal du bruge?" options={sizeOptions} onSelect={handleSizeSelect} />;
      case 'language':
        return <OptionSelection title="Skal hjemmesiden kunne bruges på flere sprog?" options={languageOptions} onSelect={handleLanguageSelect} />;
      case 'branding':
        return <OptionSelection title="Skal vi stå for logo og branding?" options={brandingOptions} onSelect={handleBrandingSelect} />;
      case 'webdesign':
        return <OptionSelection title="Skal vi stå for design af hjemmesiden?" options={webdesignOptions} onSelect={handleWebdesignSelect} />;
      case 'content':
        return <OptionSelection title="Skal vi stå for tekst og billeder på hjemmesiden?" options={contentOptions} onSelect={handleContentSelect} />;
      case 'contact':
        return <ContactForm onSubmit={handleContactFormSubmit} selection={selection} total={total} onReset={handleReset} />;
      default:
        return null;
    }
  };



  return (
    <div className="flex items-start justify-center h-screen text-white pt-2" style={{ backgroundColor: 'transparent' }}>
      <div className="p-12 rounded shadow text-center w-5/6 flex-col items-center" style={{ backgroundColor: 'transparent' }}>
        <div className="mb-8">
          {step !== 'start' && step !== 'contact' && (
            <p className="text-lg font-semibold">
              {getCurrentStepNumber()}/{totalSteps}
            </p>
          )}
        </div>
        {renderStartComponent()}
        {renderCurrentStep()}
      </div>
    </div>
  );
};

export default App;
