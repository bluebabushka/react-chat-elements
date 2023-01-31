import React from 'react'
import { IAudioMessageProps } from '../type'
import AudioPlayer from 'react-h5-audio-player';
// import './AudioMessage.css'

const AudioMessage: React.FC<IAudioMessageProps> = props => {
  // const controlsList = props.data.controlsList

  return (
    <div className={'rce-mbox-audio'} style={props.customStyle}>
        <AudioPlayer
            src={props.data.audioURL}
        />
      {props.text && <div className='rce-mbox-text'>{props.text}</div>}
    </div>
  )
}

export default AudioMessage
