import React from 'react'

class PopUpMenu extends React.Component {
    render() {
      return (
        <div className='popup' onClick={this.props.closePopup}>
          <div className='popup_inner'>
            <a href="/login"><button >Login</button></a>
            <a href="/register"><button >Register</button></a>
            <button onClick={this.props.closePopup}>X</button>
          </div>
        </div>
      );
    }
  }

export default PopUpMenu