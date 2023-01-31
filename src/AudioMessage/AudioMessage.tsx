import React from 'react'
import { IAudioMessageProps } from '../type'
import AudioPlayer from 'react-h5-audio-player';
import './AudioMessage_back.css'

const AudioMessage: React.FC<IAudioMessageProps> = props => {
  const controlsList = props.data.controlsList

  return (
    <div className={'rce-mbox-audio'} style={props.customStyle}>
        <AudioPlayer
            layout="horizontal-reverse"
            src={props.data.audioURL}
            showJumpControls={false}
            customAdditionalControls={[]}
        />
      {props.text && <div className='rce-mbox-text'>{props.text}</div>}
    </div>
  )
}

export default AudioMessage
