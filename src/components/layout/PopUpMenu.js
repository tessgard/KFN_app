import React from 'react'
import './PopUp.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'


class PopUpMenu extends React.Component {
    render() {
      return (
        <div className='popup' onClick={this.props.closePopup}>
            <div className="close-pop-up">
                <button className="close-x" onClick={this.props.closePopup}>
                    {<FontAwesomeIcon icon={faTimes}/>}
                </button>
            </div>
          <div className='popup-btn-row'>
            <a href="/login"><button className="btn popup-btn">Login</button></a>
            <a href="/register"><button className="btn popup-btn">Register</button></a>
          </div>
        </div>
      );
    }
  }

export default PopUpMenu