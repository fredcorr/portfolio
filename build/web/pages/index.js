import Button from '../components/UI/Button/Button';
import styles from './home.module.css';

const holdingMessage = () => {
  return (
    <div className={ styles.holdingMessage }>
      <h1>Watch this space</h1>
      <p>I'm currently working on a new modern and updated portfolio, watch this space for more updates</p>
      <Button link={ 'mailto:corradi.federico.91@gmail.com' }>Email me</Button>
    </div>
  )
}

export default holdingMessage;
