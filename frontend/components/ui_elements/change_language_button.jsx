import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown, faLanguage } from '@fortawesome/free-solid-svg-icons'
import { useTranslation } from 'react-i18next';

export const ChangeLanguageButton = (props) => {
  const btnClass = props.btnClass;
  const dropClass = props.dropClass;
  const { i18n, t } = useTranslation();
  function changeLanguage(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <div className="drpdwn-container ">
      <button className={"drpdwn-btn " + btnClass}>
          <div>
            <span className="fa">
              <FontAwesomeIcon icon={faLanguage} />
            </span>
            {t("Language")}
            <span className="fa">
              <FontAwesomeIcon icon={faSortDown} />
            </span>
          </div>
        </button>
      <div className={"dropdown-list " + dropClass}>
          <ul>
            <li onClick={() => changeLanguage("en") }>
              <h6 className="pad-l-10">English</h6>
            </li>
            <li onClick={() => changeLanguage("rus") }>
              <h6 className="pad-l-10">Русский</h6>
            </li>
            
          </ul>
        </div>
      </div>
      
   
    
  )
}