import React from 'react'
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSortDown, faAddressCard } from '@fortawesome/free-solid-svg-icons'


export const ContactButton = (props) => {
  const btnClass = props.btnclass;
  return (
 
    <div className={props.lnkClass}>
        <button className={btnClass}>
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
        <div className="dropdown-contact">
          <ul>
            <li>LinkedIn</li>
            <li>GitHub</li>
          </ul>
        </div>
      </div>
      
   
    
  )
}