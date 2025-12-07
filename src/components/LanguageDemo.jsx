import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageDemo = () => {
  const { t, i18n } = useTranslation();

  const switchLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">{t('navigation.home')}</h2>
      <p className="mb-4">{t('home.title')}</p>
      <p className="mb-6">{t('home.subtitle')}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">{t('auth.signInTitle')}</h3>
          <p>{t('auth.dontHaveAccount')} <button className="text-blue-600 hover:underline">{t('auth.signUpLink')}</button></p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">{t('dashboard.welcome')}</h3>
          <p>{t('dashboard.totalDeposits')}: $1,250.00</p>
          <p>{t('dashboard.totalLoans')}: $500.00</p>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2">
        <button 
          onClick={() => switchLanguage('en')}
          className={`px-4 py-2 rounded ${i18n.language === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          English
        </button>
        <button 
          onClick={() => switchLanguage('ar')}
          className={`px-4 py-2 rounded ${i18n.language === 'ar' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          العربية
        </button>
        <button 
          onClick={() => switchLanguage('fr')}
          className={`px-4 py-2 rounded ${i18n.language === 'fr' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Français
        </button>
        <button 
          onClick={() => switchLanguage('rw')}
          className={`px-4 py-2 rounded ${i18n.language === 'rw' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
        >
          Kinyarwanda
        </button>
      </div>
      
      {i18n.language === 'ar' && (
        <div className="mt-4 p-3 bg-yellow-100 rounded-lg">
          <p className="text-sm"> RTL mode is active for Arabic language</p>
        </div>
      )}
    </div>
  );
};

export default LanguageDemo;