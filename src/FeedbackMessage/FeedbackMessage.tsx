import React from 'react'
import {IFeedbackMessageProps} from '../type'
import AudioPlayer from 'react-h5-audio-player';
import './FeedbackMessage.css'

const FeedbackMessage: React.FC<IFeedbackMessageProps> = props => {
  // const controlsList = props.data.controlsList

 console.log(props.text);

  return (
    <div className={'rce-mbox-audio'} style={props.customStyle}>
        <AudioPlayer
            src={props.data.audioURL}
            layout="horizontal"
            showJumpControls={false}
            customAdditionalControls={[]}
            customVolumeControls={[]}
        />
        {props.text && <div className='rce-mbox-text'>{props.text}</div>}
    </div>
  )
}

export default FeedbackMessage
