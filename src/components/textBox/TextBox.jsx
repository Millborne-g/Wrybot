import React,{ useState, useEffect }  from 'react';
import './textBox.css';

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'
   

const TextBox = () => {
    const [isListening, setIsListening] = useState(false)
    const [note, setNote] = useState(null)
    const [savedNotes, setSavedNotes] = useState([])
  
    useEffect(() => {
      handleListen()
    }, [isListening])
  
    const handleListen = () => {
      if (isListening) {
        mic.start()
        mic.onend = () => {
          console.log('continue..')
          mic.start()
        }
      } else {
        mic.stop()
        mic.onend = () => {
          document.getElementById('mic_indicator').textContent= "Click to speak";
          console.log('Stopped Mic on Click');
          document.querySelector('.button_bg').classList.remove("scale-up-center");
        }
      }
      mic.onstart = () => {
        console.log('Mics on')
        document.getElementById('mic_indicator').textContent= "Microphone's On";
        document.querySelector('.button_bg').classList.toggle("scale-up-center");
      }
  
      mic.onresult = event => {
        const transcript = Array.from(event.results)
          .map(result => result[0])
          .map(result => result.transcript)
          .join('')
        console.log(transcript);
        
        document.getElementById('transcript').value = transcript;
        setNote(transcript)
        mic.onerror = event => {
          console.log(event.error)
        }
      }
    }
  
    const handleSaveNote = () => {
      setSavedNotes([...savedNotes, note])
      setNote('')
    }
    

    return (
        <div className='text_Box'>
            <div className='text_Box_inner'>
                <div className='outputBox'>
                    <div className='TextBox_result'>
                        <textarea placeholder='This is a free speech to text website...' id='transcript'>
                            {note}
                        </textarea>
                    </div>
                    
                </div>

                <div className='Micbutton'>
                    <div className='Micbutton_inner'>
                      <div className='button_bg'></div>
                        <div id='button' className='button' onClick={() => setIsListening(prevState => !prevState)}>
                            <i className="fas fa-microphone"></i>
                        </div>
                        <span id='mic_indicator'>Click to speak</span>
                    </div>

                </div>

                
                
            </div>
        </div>
    )
}

export default TextBox
