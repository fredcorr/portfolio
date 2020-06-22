import styles from './videoEmbed.css';
import React from 'react';

const videEmbed = (props) => {
  return(

    <div className={styles.embedContainer} >
      <iframe title="video" src={props.videoLink} frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
      <script src="https://player.vimeo.com/api/player.js"></script>
    </div>
  );
}
export default videEmbed;
