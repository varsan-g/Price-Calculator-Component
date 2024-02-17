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

  const handleGoBack = () => {
    const stepOrder: Step[] = ['type', 'design', 'size', 'payment', 'integration', 'login', 'multilingual', 'search', 'seo', 'stage'];
    const currentStepIndex = stepOrder.indexOf(step);
    if (currentStepIndex > 0) {
      // Set the step to the previous one in the stepOrder array
      setStep(stepOrder[currentStepIndex - 1]);
    }
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
    { label: 'A. Ecommerce / Online shop', value: 'Ecommerce / Online shop', price: 500, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-10-1.png' },
    // ... (Include all other type options here)
  ];

  const designOptions = [
    { label: 'A. Use a template', value: 'Use a template', price: 100, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-10-1.png' },
    // ... (Include all other design options here)
  ];

  const sizeOptions = [
    { label: 'A. Small: less than 3 pages/50 products', value: 'Small', price: 100, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-10-1.png' },
    { label: 'B. Medium: less than 10 pages/200 products', value: 'Medium', price: 200, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-10-1.png' },
    { label: 'C. Large: more than 10 pages/200 products', value: 'Large', price: 300, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-10-1.png' },
    { label: 'D. I don\'t know', value: 'Unknown Size', price: 0, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-10-1.png' },
  ];

  const paymentOptions = [
    { label: 'A. Yes', value: 'Yes', price: 150, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-10-1.png' },
    { label: 'B. No', value: 'No', price: 0, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-10-1.png' },
    { label: 'C. I don\'t know', value: 'Unknown Payment', price: 0, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-10-1.png' },
  ];

  const integrationOptions = [
    { label: 'A. Yes', value: 'Yes', price: 250, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-10-1.png' },
    { label: 'B. No', value: 'No', price: 0, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-10-1.png' },
    { label: 'C. I don\'t know', value: 'Unknown Integration', price: 0, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-10-1.png' },
  ];

  const loginOptions = [
    { label: 'A. Yes', value: 'Yes', price: 100, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-10-1.png' },
    { label: 'B. No', value: 'No', price: 0, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-10-1.png' },
    { label: 'C. I don\'t know', value: 'Unknown Login', price: 50, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-10-1.png' },
  ];

  const multilingualOptions = [
    { label: 'A. Yes', value: 'Yes', price: 200, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-10-1.png' },
    { label: 'B. No', value: 'No', price: 0, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-10-1.png' },
    { label: 'C. I don\'t know', value: 'Unknown Multilingual', price: 100, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-10-1.png' },
  ];

  const searchOptions = [
    { label: 'A. Yes', value: 'Yes', price: 150, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-10-1.png' },
    { label: 'B. No', value: 'No', price: 0, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-10-1.png' },
    { label: 'C. I don\'t know', value: 'Unknown Search', price: 75, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-10-1.png' },
  ];

  const seoOptions = [
    { label: 'A. Yes', value: 'Yes', price: 300, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-10-1.png' },
    { label: 'B. No', value: 'No', price: 0, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-10-1.png' },
    { label: 'C. I don\'t know', value: 'Unknown SEO', price: 150, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-10-1.png' },
  ];

  const stageOptions = [
    { label: 'A. It\'s just an idea', value: 'Idea', price: 0, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-10-1.png' },
    { label: 'B. I have some sketches', value: 'Sketches', price: 100, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-10-1.png' },
    { label: 'C. It\'s in development', value: 'Development', price: 200, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-10-1.png' },
    { label: 'D. It\'s already created', value: 'Created', price: 0, image: 'https://www.howmuchtocreateawebsite.co.uk/img/web/answer-10-1.png' },
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
        <div className="mb-4">
          {step !== 'summary' && (
            <p className="text-sm font-medium">
              Step {getCurrentStepNumber()}/{totalSteps}
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