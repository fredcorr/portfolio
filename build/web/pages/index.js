import { faLinkedinIn, faInstagram, faVimeoV } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HomePannel from '../components/HomePannel/HomePannel';
import { client, urlFor } from '../client';
import { motion } from 'framer-motion';
import styles from './home.module.css';
import Head from 'next/head';
import gsap from 'gsap';


export default class Home extends React.Component {

  constructor(props) {
    super(props);
    this.currentThumb = 0;
    this.counterTimeline = null;
    this.thumbs = [];
    this.dotNav = [];
  }

  thumbAnimIn= ( thumbN, delay ) => {

    const title = this.thumbs[thumbN].querySelectorAll( 'h1' )[0];
    const svg = this.thumbs[thumbN].querySelectorAll( 'svg' )[0];
    const date = this.thumbs[thumbN].querySelectorAll( 'p' )[0];

    const thumbTimeline = gsap.timeline({delay: delay});
    thumbTimeline.from( [ svg.children[1], svg.children[0].children[0] ], { duration: .75, scaleX: 0 } )
    thumbTimeline.from( [ date, title ], { duration: .75, x: '-=60', opacity: 0, delay: .2, stagger: { amount: .2, each: 0.02, from: 'start' } } )
  }

  thumbAnimOut = ( thumbN ) => {

    const title = this.thumbs[thumbN].querySelectorAll( 'h1' )[0];
    const svg = this.thumbs[thumbN].querySelectorAll( 'svg' )[0];
    const date = this.thumbs[thumbN].querySelectorAll( 'p' )[0];

    const thumbTimeline = gsap.timeline()
    thumbTimeline.to( [ svg.children[1], svg.children[0].children[0] ], { duration: .75, scaleX: 0, transformOrigin: 'right center' } )
    thumbTimeline.to( [ date, title ], { duration: .75, x: '+=60', opacity: 0, delay: .2, stagger: { amount: .2, each: 0.02, from: 'start' } } )
  }

  counterAnim = () => {

    this.counterTimeline = gsap.timeline({
      repeat: 1,
      onStart: this.thumbAnimIn,
      onRepeat: () => {
        this.thumbAnimOut( this.currentThumb, 1 )
        this.thumbAnimIn( this.currentThumb );
      },
      onStartParams: [ this.currentThumb ],
    })

    this.counterTimeline.from( '.' + styles.counter  + '> div > div', { duration: 5, scale: 0 } )
    this.counterTimeline.to( '.' + styles.counter  + '> div > div', { duration: 5, scale: 0, transformOrigin: 'right center' } )
  }

  componentDidMount() {
    // this.thumbAnim( 0, gsap.from, '-=' )

    console.log( this.props );

    this.counterAnim();
    // setTimeout(() => this.thumbAnim( 0, gsap.to, '+=', 'right center' ), 4000)
  }

  componentWillUnmount(){
    this.counterTimeline.kill()

  }

  render() {
    return (
      <motion.div className={ styles.Home } exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} >
        <Head>
          <title>{ this.props.page_title }</title>
        </Head>
        <div className={ styles.thumbContainer } id={ 'thumbContainer' }>
            {
              this.props.work_listing.map( ( project, i ) => {
                return (
                  <HomePannel
                    ref={ thumb => this.thumbs[i] = thumb }
                    title={ project.title }
                    date={ project.date }
                    img={ urlFor(project.cover) }
                    link={ project.slug.current }
                    key={ i }
                    i={ i }
                  />
                )
              })
            }
            <div className={ styles.counter } id={ 'counter' }>
              <p>1</p>
              <div className={ styles.progressBar }>
                <div></div>
              </div>
              <p>2</p>
            </div>
        </div>

        <div className={ styles.contact }>
          <a href='tel:#'><FontAwesomeIcon icon={ faPhone } size={'2x'}/></a>
          <a href={'mailto:' + this.props.email}><FontAwesomeIcon icon={ faEnvelope } size={'2x'}/></a>
        </div>

        <ul className={ styles.dotNav } id={ 'dotNav' }>
          { this.props.work_listing.map( ( project, b ) => {
              let size = b === 0 ? 1 : 0.5;
              return <li key={b} onClick={ (e) => this.thumbSelected(e) } style={{ transform: `scale(${ size })` }} ref={ ( dot ) => this.dotNav[b] = dot }></li>
          })}
        </ul>

        <div className={ styles.social }>
          <a href='tel:#'><FontAwesomeIcon icon={ faLinkedinIn } size={'lg'}/></a>
          <a href='mailto:#'><FontAwesomeIcon icon={ faInstagram } size={'lg'}/></a>
          <a href='mailto:#'><FontAwesomeIcon icon={ faVimeoV } size={'lg'}/></a>
        </div>
      </motion.div>
    )
  }
}

Home.getInitialProps = async function (context) {
  const query = `*[_type == "home"]{ 
    vimeo_profile,
    email,
    work_listing[]->{
      title,
      cover,
      date,
      slug
    } ,
    page_title
  }`;

  return await client.fetch(query).then( res => res[0] )
}
