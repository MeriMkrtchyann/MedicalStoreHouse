import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import "./LanguageSelector.css"

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [showLanguages, setShowLanguages] = useState(false);

  const toggleLanguages = () => setShowLanguages(!showLanguages);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setShowLanguages(false);
  };

  return (
    <div className="language-selector">
      <FontAwesomeIcon icon={faGlobe} onClick={toggleLanguages} />
      {showLanguages && (
        <ul className="language-list">
          <li onClick={() => changeLanguage('ru')}>RU</li>
          <li onClick={() => changeLanguage('am')}>AM</li>
          <li onClick={() => changeLanguage('en')}>EN</li>
        </ul>
      )}
    </div>
  );
}

export default LanguageSelector;
