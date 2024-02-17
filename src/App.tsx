// src/App.tsx
import React, { useState } from 'react';
import OptionSelection from './OptionSelection';
import Summary from './Summary';

type Step = 'type' | 'design' | 'size' | 'payment' | 'integration' | 'login' | 'multilingual' | 'search' | 'seo' | 'stage' | 'summary';

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
    setStep('multilingual'); // Goes to the next step
  };

  const handleMultilingualSelect = (value: string, price: number) => {
    setSelection({ ...selection, multilingual: value });
    setTotal(total + price);
    setStep('search'); // Goes to the next step
  };

  const handleSearchSelect = (value: string, price: number) => {
    setSelection({ ...selection, search: value });
    setTotal(total + price);
    setStep('seo'); // Goes to the next step
  };

  const handleSEOSelect = (value: string, price: number) => {
    setSelection({ ...selection, seo: value });
    setTotal(total + price);
    setStep('stage'); // Goes to the next step
  };

  const handleStageSelect = (value: string, price: number) => {
    setSelection({ ...selection, stage: value });
    setTotal(total + price);
    setStep('summary'); // Goes to the final summary step
  };

  const handleReset = () => {
    setSelection({ type: '', design: '', size: '', payment: '', integration: '', login: '', multilingual: '', search: '', seo: '', stage: '' });
    setTotal(0);
    setStep('type');
  };

  const typeOptions = [
    { label: 'Ecommerce / Online shop', value: 'Ecommerce / Online shop', price: 3000, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-1-1.png' },
    { label: 'Website with blog', value: 'Blog', price: 1000, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-1-2.png' },
    { label: 'Website for business/corporate', value: 'Business', price: 1750, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-1-3.png' },
    { label: 'Customised website', value: 'Custom website', price: 5000, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-1-4.png' },
  ];

  const designOptions = [
    { label: 'Use a template', value: 'Template', price: 500, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-2-1.png' },
    { label: 'Customised design', value: 'Custom design', price: 1500, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-2-2.png' },
    { label: 'I don\'t require design', value: 'No design', price: 0, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-2-3.png' },
    { label: 'I don\'t know', value: 'Idk', price: 350, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-2-4.png' },
  ];

  const sizeOptions = [
    { label: 'Small: less than 3 pages/50 products', value: 'Small', price: 0, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-3-1.png' },
    { label: 'Medium: less than 10 pages/200 products', value: 'Medium', price: 750, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-3-2.png' },
    { label: 'Large: more than 10 pages/200 products', value: 'Large', price: 1500, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-3-3.png' },
    { label: 'I don\'t know', value: 'Unknown Size', price: 350, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-3-4.png' },
  ];

  const paymentOptions = [
    { label: 'Yes', value: 'Yes', price: 500, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-4-1.png' },
    { label: 'No', value: 'No', price: 0, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-4-2.png' },
    { label: 'I don\'t know', value: 'Unknown Payment', price: 250, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-4-3.png' },
  ];

  const integrationOptions = [
    { label: 'Yes', value: 'Yes', price: 2500, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-5-1.png' },
    { label: 'No', value: 'No', price: 0, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-5-2.png' },
    { label: 'I don\'t know', value: 'Unknown Integration', price: 250, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-5-3.png' },
  ];

  const loginOptions = [
    { label: 'Yes', value: 'Yes', price: 500, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-6-1.png' },
    { label: 'No', value: 'No', price: 0, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-6-2.png' },
    { label: 'I don\'t know', value: 'Unknown Login', price: 250, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-6-3.png' },
  ];

  const multilingualOptions = [
    { label: 'Yes', value: 'Yes', price: 1000, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-7-1.png' },
    { label: 'No', value: 'No', price: 0, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-7-2.png' },
    { label: 'I don\'t know', value: 'Unknown Multilingual', price: 250, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-7-3.png' },
  ];

  const searchOptions = [
    { label: 'Yes', value: 'Yes', price: 350, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-8-1.png' },
    { label: 'No', value: 'No', price: 0, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-8-2.png' },
    { label: 'I don\'t know', value: 'Unknown Search', price: 250, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-8-3.png' },
  ];

  const seoOptions = [
    { label: 'Yes', value: 'Yes', price: 100, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-9-1.png' },
    { label: 'No', value: 'No', price: 0, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-9-2.png' },
    { label: 'I don\'t know', value: 'Unknown SEO', price: 0, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-9-3.png' },
  ];

  const stageOptions = [
    { label: 'It\'s just an idea', value: 'Idea', price: 350, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-10-1.png' },
    { label: 'I have some sketches', value: 'Sketches', price: 250, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-10-2.png' },
    { label: 'It\'s in development', value: 'Development', price: 150, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-10-3.png' },
    { label: 'It\'s already created', value: 'Created', price: 0, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-10-4.png' },
  ];

  const renderCurrentStep = () => {
    switch (step) {
      case 'type':
        return <OptionSelection title="What type of website are you looking for?" options={typeOptions} onSelect={handleTypeSelect} />;
      case 'design':
        return <OptionSelection title="What design do you want for your website?" options={designOptions} onSelect={handleDesignSelect} />;
      case 'size':
        return <OptionSelection title="How big does your website have to be?" options={sizeOptions} onSelect={handleSizeSelect} />;
      case 'payment':
        return <OptionSelection title="Will you take payments on your website?" options={paymentOptions} onSelect={handlePaymentSelect} />;
      case 'integration':
        return <OptionSelection title="Will the website be integrated with another website, app or ERP?" options={integrationOptions} onSelect={handleIntegrationSelect} />;
      case 'login':
        return <OptionSelection title="Do you need a user login?" options={loginOptions} onSelect={handleLoginSelect} />;
      case 'multilingual':
        return <OptionSelection title="Will the website be multi-lingual?" options={multilingualOptions} onSelect={handleMultilingualSelect} />;
      case 'search':
        return <OptionSelection title="Does the website need a directory/type of internal search?" options={searchOptions} onSelect={handleSearchSelect} />;
      case 'seo':
        return <OptionSelection title="Does your website need SEO services?" options={seoOptions} onSelect={handleSEOSelect} />;
      case 'stage':
        return <OptionSelection title="At what stage is your website?" options={stageOptions} onSelect={handleStageSelect} />;
      case 'summary':
        return <Summary selection={selection} total={total} onReset={handleReset} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-lg text-center w-1/2 flex-col items-center">
        {/* Progress Indicator */}
        <div className="mb-14 mt-2">
          {step !== 'summary' && (
            <p className="text-m font-bold">
              {getCurrentStepNumber()}/{totalSteps}
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