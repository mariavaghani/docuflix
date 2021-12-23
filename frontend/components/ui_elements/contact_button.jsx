import React from 'react'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faAngellist } from "@fortawesome/free-brands-svg-icons"
import { faSortDown, faAddressCard, faPortrait } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const ContactButton = (props) => {
  const btnClass = props.btnClass;
  const dropClass = props.dropClass;
  const { t } = useTranslation();
  return (
 
    <div className="drpdwn-container ">
      <button className={"drpdwn-btn " + btnClass}>
          <div>
            <span className="fa">
              <FontAwesomeIcon icon={faAddressCard} />
            </span>
            {t("Contact")}
            <span className="fa">
              <FontAwesomeIcon icon={faSortDown} />
            </span>
          </div>
        </button>
      <div className={"dropdown-list " + dropClass}>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/maria-vaghani/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
                <h6 className="pad-l-10">{t("LinkedIn")}</h6>
              </a>
            </li>
            <li>
              <a href="https://github.com/mariavaghani" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
                <h6 className="pad-l-10">{t("Github")}</h6>
              </a>
            </li>
            <li>
              <a href="https://angel.co/u/maria-degtyareva-vaghani" target="_blank">
                <FontAwesomeIcon icon={faAngellist} />
                <h6 className="pad-l-10">{t("Angel.co")}</h6>
              </a>
            </li>
            <li>
              <a href="https://maria-vaghani.netlify.app/" target="_blank">
                <FontAwesomeIcon icon={faPortrait} />
                <h6 className="pad-l-10">{t("Portfolio")}</h6>
              </a>
            </li>
          </ul>
        </div>
      </div>
      
   
    
  )
}