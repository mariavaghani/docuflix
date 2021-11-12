import React from 'react'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faSortDown, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export const ContactButton = (props) => {
  const btnClass = props.btnClass;
  const dropClass = props.dropClass;
  return (
 
    <div className="drpdwn-container ">
      <button className={"drpdwn-btn " + btnClass}>
          <div>
            <span className="fa">
              <FontAwesomeIcon icon={faAddressCard} />
            </span>
            Contact
            <span className="fa">
              <FontAwesomeIcon icon={faSortDown} />
            </span>
          </div>
        </button>
      <div className={"dropdown-list " + dropClass}>
          <ul>
            <li>
            <a href="https://www.linkedin.com/in/maria-vaghani/" className="div-flex" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
                <h6 className="pad-l-10">LinkedIn</h6>
              </a>
            </li>
            <li>
            <a href="https://github.com/mariavaghani" className="div-flex" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
                <h6 className="pad-l-10">Github</h6>
              </a>
            </li>
          </ul>
        </div>
      </div>
      
   
    
  )
}