import React from 'react'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSortDown, faAddressCard } from '@fortawesome/free-solid-svg-icons'


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
            <li>LinkedIn</li>
            <li>GitHub</li>
          </ul>
        </div>
      </div>
      
   
    
  )
}