import React from 'react';
import './headerText.css';
import logoPhoto from '../../assets/Logo.gif';

const HeaderText = () => {
    return (
        <div className='Header_Text'>
            <div className='Header_Text_Inner'>
                <div className='Header_Text_Logo_Inner'>
                    <div className='Header_Text_Logo'>
                        <div> 
                            <span className='LogoText'>Hello I’m</span>
                            <img className='logoPhoto' src={logoPhoto} alt='logo'/>
                            <span className='Logo_name'>WRYBOT</span>
                        </div>
                    </div>
                </div>
                <div className='description'>
                    <div className='description_text'>
                        <span>Try to speak I will write it for you (:</span>
                    </div>   
                </div>
            </div>
        </div>
    )
}

export default HeaderText
