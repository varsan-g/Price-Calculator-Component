// src/App.tsx
import React, { useState } from 'react';
import OptionSelection from './OptionSelection';
import Summary from './Summary';
import ContactForm from './ContactForm';
import 'lord-icon-element';

type Step = 'type' | 'design' | 'size' | 'payment' | 'integration' | 'login' | 'multilingual' | 'search' | 'seo' | 'stage' | 'summary' | 'contact';

interface Selection {
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
}

const App: React.FC = () => {
  const [step, setStep] = useState<Step>('type');
  const [selection, setSelection] = useState<Selection>({
    type: '',
    design: '',
    size: '',
    payment: '',
    integration: '',
    login: '',
    multilingual: '',
    search: '',
    seo: '',
    stage: '',
  });

  const [total, setTotal] = useState<number>(0);
  const totalSteps = 10;
  // const [setFormSubmitted] = useState(false);


  const getCurrentStepNumber = (): number => {
    const stepOrder: Step[] = ['type', 'design', 'size', 'payment', 'integration', 'login', 'multilingual', 'search', 'seo', 'stage'];
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
    setStep('payment');
  };

  const handlePaymentSelect = (payment: string, price: number) => {
    setSelection({ ...selection, payment });
    setTotal(total + price);
    setStep('integration');
  };

  const handleIntegrationSelect = (integration: string, price: number) => {
    setSelection({ ...selection, integration });
    setTotal(total + price);
    setStep('login');
  };

  const handleLoginSelect = (value: string, price: number) => {
    setSelection({ ...selection, login: value });
    setTotal(total + price);
    setStep('multilingual');
  };

  const handleMultilingualSelect = (value: string, price: number) => {
    setSelection({ ...selection, multilingual: value });
    setTotal(total + price);
    setStep('search');
  };

  const handleSearchSelect = (value: string, price: number) => {
    setSelection({ ...selection, search: value });
    setTotal(total + price);
    setStep('seo');
  };

  const handleSEOSelect = (value: string, price: number) => {
    setSelection({ ...selection, seo: value });
    setTotal(total + price);
    setStep('stage');
  };

  const handleStageSelect = (value: string, price: number) => {
    setSelection({ ...selection, stage: value });
    setTotal(total + price);
    setStep('summary');
  };

  const handleReset = () => {
    setSelection({ type: '', design: '', size: '', payment: '', integration: '', login: '', multilingual: '', search: '', seo: '', stage: '' });
    setTotal(0);
    setStep('type');
  };

  const handleContactFormSubmit = (contactDetails: { name: string; email: string; phone: string; }) => {
    // Process the contact details here.
    // For now, just console log the details and reset the form
    console.log(contactDetails);
  };



  const typeOptions = [
    { label: 'Ecommerce / Webshop', value: 'Ecommerce / Webshop', price: 3000, lordicon: 'https://cdn.lordicon.com/uktwwckg.json' },
    { label: 'Hjemmeside med blog', value: 'Blog', price: 1000, lordicon: 'https://cdn.lordicon.com/kmifwsos.json' },
    { label: 'Hjemmeside til erhverv', value: 'Business', price: 1750, lordicon: 'https://cdn.lordicon.com/ocqzmzvc.json' },
    { label: 'Custom hjemmeside', value: 'Custom website', price: 5000, lordicon: 'https://cdn.lordicon.com/uktwwckg.json' },
  ];

  const designOptions = [
    { label: 'Brug en skabelon', value: 'Template', price: 500, lordicon: 'https://cdn.lordicon.com/ocqzmzvc.json' },
    { label: 'Custom design', value: 'Custom design', price: 1500, lordicon: 'https://cdn.lordicon.com/piwupaqb.json' },
    { label: 'Jeg har ikke brug for design', value: 'Nej design', price: 0, lordicon: 'https://cdn.lordicon.com/oqrxcabg.json' },
    { label: 'Jeg ved det ikke', value: 'Ukendt', price: 350, lordicon: 'https://cdn.lordicon.com/oqrxcabg.json' },
  ];

  const sizeOptions = [
    { label: 'Lille: mindre end 3 undersider/50 produkter', value: 'Lille', price: 0, lordicon: 'https://cdn.lordicon.com/oqrxcabg.json' },
    { label: 'Mellem: mindre end 10 undersider/200 produkter', value: 'Mellem', price: 750, lordicon: 'https://cdn.lordicon.com/oqrxcabg.json' },
    { label: 'Stor: mere end 10 sider/200 produkter', value: 'Stor', price: 1500, lordicon: 'https://cdn.lordicon.com/oqrxcabg.json' },
    { label: 'Jeg ved det ikke', value: 'Ukendt', price: 350, lordicon: 'https://cdn.lordicon.com/rjpgjson.json' },
  ];

  const paymentOptions = [
    { label: 'Ja', value: 'Ja', price: 500, lordicon: 'https://cdn.lordicon.com/vixogsdv.json' },
    { label: 'Nej', value: 'Nej', price: 0, lordicon: 'https://cdn.lordicon.com/athelfnc.json' },
    { label: 'Jeg ved det ikke', value: 'Ukendt', price: 250, lordicon: 'https://cdn.lordicon.com/athelfnc.json' },
  ];

  const integrationOptions = [
    { label: 'Ja', value: 'Ja', price: 2500, lordicon: 'https://cdn.lordicon.com/wvsldibu.json' },
    { label: 'Nej', value: 'Nej', price: 0, lordicon: 'https://cdn.lordicon.com/rmkpgtpt.json' },
    { label: 'Jeg ved det ikke', value: 'Ukendt', price: 250, lordicon: 'https://cdn.lordicon.com/rmkpgtpt.json' },
  ];

  const loginOptions = [
    { label: 'Ja', value: 'Ja', price: 500, lordicon: 'https://cdn.lordicon.com/wzwygmng.json' },
    { label: 'Nej', value: 'Nej', price: 0, lordicon: 'https://cdn.lordicon.com/ghhwiltn.json' },
    { label: 'Jeg ved det ikke', value: 'Ukendt', price: 250, lordicon: 'https://cdn.lordicon.com/rmkpgtpt.json' },
  ];

  const multilingualOptions = [
    { label: 'Ja', value: 'Ja', price: 1000, lordicon: 'https://cdn.lordicon.com/wzwygmng.json' },
    { label: 'Nej', value: 'Nej', price: 0, lordicon: 'https://cdn.lordicon.com/rmkpgtpt.json' },
    { label: 'Jeg ved det ikke', value: 'Ukendt', price: 250, lordicon: 'https://cdn.lordicon.com/athelfnc.json' },
  ];

  const searchOptions = [
    { label: 'Ja', value: 'Ja', price: 350, lordicon: 'https://cdn.lordicon.com/vixogsdv.json' },
    { label: 'Nej', value: 'Nej', price: 0, lordicon: 'https://cdn.lordicon.com/athelfnc.json' },
    { label: 'Jeg ved det ikke', value: 'Ukendt', price: 250, lordicon: 'https://cdn.lordicon.com/athelfnc.json' },
  ];

  const seoOptions = [
    { label: 'Ja', value: 'Ja', price: 100, lordicon: 'https://cdn.lordicon.com/vixogsdv.json' },
    { label: 'Nej', value: 'Nej', price: 0, lordicon: 'https://cdn.lordicon.com/athelfnc.json' },
    { label: 'Jeg ved det ikke', value: 'Ukendt', price: 0, lordicon: 'https://cdn.lordicon.com/athelfnc.json' },
  ];

  const stageOptions = [
    { label: 'Det er bare en idé', value: 'Idé', price: 350, lordicon: '' },
    { label: 'Jeg har sketches', value: 'Sketches', price: 250, lordicon: '' },
    { label: 'Den er under udvikling', value: 'Under udvikling', price: 150, lordicon: '' },
    { label: 'Den er allerede lavet', value: 'Allerede bygget', price: 0, lordicon: '' },
  ];

  const renderCurrentStep = () => {
    switch (step) {
      case 'type':
        return <OptionSelection title="Hvilken type hjemmeside har du brug for?" options={typeOptions} onSelect={handleTypeSelect} />;
      case 'design':
        return <OptionSelection title="Hvilket design ønsker du til din hjemmeside?" options={designOptions} onSelect={handleDesignSelect} />;
      case 'size':
        return <OptionSelection title="Hvor stor skal din hjemmeside være?" options={sizeOptions} onSelect={handleSizeSelect} />;
      case 'payment':
        return <OptionSelection title="Kommer du til at tage imod betaling på din hjemmeside?" options={paymentOptions} onSelect={handlePaymentSelect} />;
      case 'integration':
        return <OptionSelection title="Kommer siden til at blive integreret med en anden hjemmeside, app eller ERP?" options={integrationOptions} onSelect={handleIntegrationSelect} />;
      case 'login':
        return <OptionSelection title="Har du brug for et brugerlogin?" options={loginOptions} onSelect={handleLoginSelect} />;
      case 'multilingual':
        return <OptionSelection title="Skal hjemmesiden kunne bruges på flere sprog?" options={multilingualOptions} onSelect={handleMultilingualSelect} />;
      case 'search':
        return <OptionSelection title="Skal der være en form for intern søgning på siden?" options={searchOptions} onSelect={handleSearchSelect} />;
      case 'seo':
        return <OptionSelection title="Har du brug for at vi laver din SEO?" options={seoOptions} onSelect={handleSEOSelect} />;
      case 'stage':
        return <OptionSelection title="Hvilket stadie er din hjemmeside på?" options={stageOptions} onSelect={handleStageSelect} />;
      case 'summary':
        return (
          <Summary
            selection={selection}
            total={total}
            onReset={handleReset}
            onContinue={() => setStep('contact')}
          />
        );
      case 'contact':
        return <ContactForm
          onSubmit={handleContactFormSubmit}
          total={total}
          onReset={handleReset}
        />;
      // ... any other cases
      default:
        return null;
    }
  };

  return (
    <div className="flex items-start justify-center h-screen text-white pt-2" style={{ backgroundColor: '#090909' }}>
      <div className={`p-12 rounded shadow text-center w-5/6 flex-col items-center ${step === 'summary' ? 'pt-0 pb-8' : ''}`} style={{ backgroundColor: '#090909' }}>
        {/* Progress Indicator */}
        <div className="mb-14">
          {step !== 'summary' && step !== 'contact' && (
            <p className="text-xl font-semibold">
              {totalSteps * getCurrentStepNumber()}%
            </p>
          )}
        </div>

        {/* Step Content */}
        {renderCurrentStep()}
      </div>
    </div>
  );
};

export default App;