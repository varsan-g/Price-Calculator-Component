import React, { useState } from 'react';
import OptionSelection from './OptionSelection';
import ContactForm from './ContactForm';
import ProgressBar from './ProgressBar';
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

  const handleStart = () => setStep('type');

  const getCurrentStepNumber = (): number => {
    const stepOrder: Step[] = ['type', 'design', 'size', 'language', 'branding', 'webdesign', 'content'];
    return stepOrder.indexOf(step) + 1;
  };

  const handleOptionSelect = (field: keyof Selection, value: string, price: number) => {
    setSelection({ ...selection, [field]: value });
    setTotal((prevTotal) => prevTotal + price);
    const nextStep: Step[] = ['type', 'design', 'size', 'language', 'branding', 'webdesign', 'content', 'contact'];
    setStep(nextStep[nextStep.indexOf(step) + 1]);
  };

  const handleReset = () => {
    setSelection({ type: '', design: '', size: '', language: '', branding: '', webdesign: '', content: '' });
    setTotal(0);
    setStep('type');
  };

  const handleContactFormSubmit = (contactDetails: { name: string; email: string; phone: string; }) => {
    console.log(contactDetails);
  };

  const handleBack = () => {
    const stepOrder: Step[] = ['type', 'design', 'size', 'language', 'branding', 'webdesign', 'content', 'contact'];
    const currentStepIndex = stepOrder.indexOf(step);
    if (currentStepIndex > 0) {
      setStep(stepOrder[currentStepIndex - 1]);
    } else {
      setStep('start');
    }
  };

  const options = {
    type: [
      { label: 'En ny hjemmeside', value: 'NewSite', price: 3500, lordicon: 'https://cdn.lordicon.com/fzfkoxxo.json' },
      { label: 'Opdatering af eksisterende hjemmeside', shortLabel: 'Opdatering af en eksisterende side', value: 'UpdateSite', price: 0, lordicon: 'https://cdn.lordicon.com/kmifwsos.json' },
    ],
    design: [
      { label: 'Simpel præsentation', shortLabel: 'Simpel Visitkort side', value: 'Lille', price: 0, lordicon: 'https://cdn.lordicon.com/ocqzmzvc.json' },
      { label: 'Kundehenvendelser & præsentation', shortLabel: 'For at skaffe nye kunder', value: 'Mellem', price: 250, lordicon: 'https://cdn.lordicon.com/piwupaqb.json' },
      { label: 'Større avanceret hjemmeside', shortLabel: 'Det er en større Avanceret side', value: 'Stor', price: 1000, lordicon: 'https://cdn.lordicon.com/oqrxcabg.json' },
      { label: 'Jeg ved det ikke endnu', value: 'Ved ikke', price: 625, lordicon: 'https://cdn.lordicon.com/getzhpti.json' },
    ],
    size: [
      { label: 'One-Pager (1 side)', shortLabel: '1 Side', value: 'Lille', price: 0, lordicon: 'https://cdn.lordicon.com/gvaavcmy.json' },
      { label: '2-3 Sider', value: 'Mellem', price: 500, lordicon: 'https://cdn.lordicon.com/keqtrnri.json' },
      { label: '5-10 Sider', value: 'Stor', price: 2000, lordicon: 'https://cdn.lordicon.com/wezpwbvv.json' },
      { label: '10+ Sider', value: 'Mega', price: 5000, lordicon: 'https://cdn.lordicon.com/ykbtejih.json' },
    ],
    language: [
      { label: 'Ja', value: 'Ja', price: 500, lordicon: 'https://cdn.lordicon.com/skayvuob.json' },
      { label: 'Nej', value: 'Nej', price: 0, lordicon: 'https://cdn.lordicon.com/rmkpgtpt.json' },
      { label: 'Jeg ved det ikke endnu', value: 'Ved ikke', price: 250, lordicon: 'https://cdn.lordicon.com/getzhpti.json' },
    ],
    branding: [
      { label: 'Ja', value: 'Ja', price: 1500, lordicon: 'https://cdn.lordicon.com/wvsldibu.json' },
      { label: 'Nej', value: 'Nej', price: 0, lordicon: 'https://cdn.lordicon.com/rmkpgtpt.json' },
      { label: 'Jeg ved det ikke endnu', value: 'Ved ikke', price: 250, lordicon: 'https://cdn.lordicon.com/getzhpti.json' },
    ],
    webdesign: [
      { label: 'Ja', value: 'Ja', price: 1000, lordicon: 'https://cdn.lordicon.com/cgzlioyf.json' },
      { label: 'Delvist klar', value: 'Delvist klar', price: 500, lordicon: 'https://cdn.lordicon.com/wuvorxbv.json' },
      { label: 'Nej, jeg har alt klar', value: 'Nej', price: 0, lordicon: 'https://cdn.lordicon.com/rmkpgtpt.json' },
      { label: 'Jeg ved det ikke endnu', value: 'Ved ikke', price: 250, lordicon: 'https://cdn.lordicon.com/getzhpti.json' },
    ],
    content: [
      { label: 'Ja', value: 'Ja', price: 1000, lordicon: 'https://cdn.lordicon.com/cgzlioyf.json' },
      { label: 'Jeg leverer enkelte tekster og billeder', value: 'Delvist klar', price: 500, lordicon: 'https://cdn.lordicon.com/wvizcxne.json' },
      { label: 'Nej, jeg leverer alt', value: 'Nej', price: 0, lordicon: 'https://cdn.lordicon.com/loscgwts.json' },
      { label: 'Jeg ved det ikke endnu', value: 'Ved ikke', price: 250, lordicon: 'https://cdn.lordicon.com/getzhpti.json' },
    ],
  };

  const subtitles = {
    type: "Skal vi bygge en helt ny side til dig, eller har du allerede en hjemmeside?",
    design: "Skal den bruges som et visitkort, eller skal den bruges til at skaffe kunder?",
    size: "Det kan være en forside, en 'Om os' side, en 'Kontakt os' side osv.",
    language: "Så den samme side er oversat til andre sprog.",
    branding: "Dit logo og din branding er vigtig, så din virksomhed nemmere bliver genkendt af dine kunder. ",
    webdesign: "Vi designer hele siden for dig, så den passer til din virksomhed og dit produkt.",
    content: "Vi har skarpe copywriters og har et hold af fotografer, der kan hjælpe dig.",
  };

  const renderStartComponent = () => {
    if (step !== 'start') return null;
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
        <p className="mb-10 opacity-65">
          Prøv vores prisberegner, og få et estimat på hvad din hjemmeside vil koste at udvikle. <br />
          Den præsenterede pris er vejledende, og kan variere efter specifikke funktioner og anmodninger.
        </p>
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
  };

  const renderCurrentStep = () => {
    switch (step) {
      case 'type':
        return <OptionSelection title="Hvad skal du bruge?" subtitle={subtitles.type} options={options.type} onSelect={(value, price) => handleOptionSelect('type', value, price)} />;
      case 'design':
        return <OptionSelection title="Hvad er formålet med siden?" subtitle={subtitles.design} options={options.design} onSelect={(value, price) => handleOptionSelect('design', value, price)} />;
      case 'size':
        return <OptionSelection title="Hvor mange sider skal du bruge?" subtitle={subtitles.size} options={options.size} onSelect={(value, price) => handleOptionSelect('size', value, price)} />;
      case 'language':
        return <OptionSelection title="Skal hjemmesiden kunne bruges på flere sprog?" subtitle={subtitles.language} options={options.language} onSelect={(value, price) => handleOptionSelect('language', value, price)} />;
      case 'branding':
        return <OptionSelection title="Skal vi stå for logo og branding?" subtitle={subtitles.branding} options={options.branding} onSelect={(value, price) => handleOptionSelect('branding', value, price)} />;
      case 'webdesign':
        return <OptionSelection title="Skal vi stå for design af hjemmesiden?" subtitle={subtitles.webdesign} options={options.webdesign} onSelect={(value, price) => handleOptionSelect('webdesign', value, price)} />;
      case 'content':
        return <OptionSelection title="Skal vi stå for tekst og billeder på hjemmesiden?" subtitle={subtitles.content} options={options.content} onSelect={(value, price) => handleOptionSelect('content', value, price)} />;
      case 'contact':
        return <ContactForm onSubmit={handleContactFormSubmit} selection={selection} total={total} onReset={handleReset} onBack={handleBack} />;
      default:
        return null;
    }
  };

  return (
    <div className="h-screen text-white flex flex-col" style={{ backgroundColor: 'transparent' }}>
      <div className="p-4 sm:p-12 rounded shadow text-center w-full sm:w-5/6 max-w-6xl mx-auto flex flex-col flex-grow justify-start" style={{ backgroundColor: 'transparent' }}>
        {step !== 'start' && step !== 'contact' && (
          <div className="w-full transparent p-2">
            <ProgressBar currentStep={getCurrentStepNumber()} totalSteps={totalSteps} />
          </div>
        )}
        <div className="flex-grow flex flex-col justify-start">
          {renderStartComponent()}
          {renderCurrentStep()}
          {step !== 'start' && step !== 'contact' && (
            <div className="flex justify-center mt-4">
              <button
                className="hover-gradient py-2 px-4 rounded-xl flex items-center justify-center"
                onClick={handleBack}
              >
                <lord-icon
                  src="https://cdn.lordicon.com/bvcynjpl.json"
                  trigger="hover"
                  colors="primary:#ffffff,secondary:#ffffff"
                  stroke="bold"
                  style={{ width: '40px', height: '40px' }}
                ></lord-icon>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>




  );
};

export default App;
