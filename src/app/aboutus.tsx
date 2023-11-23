import { sourceCodePro400, sourceCodePro700, spaceGrotesk} from './fonts/fonts'
import motto from './assets/motto.svg';
import Image from 'next/image'; // Import the Image component
import KeenSlider from 'keen-slider'


export default function AboutUs() {
    return (
      <div className="z-10 flex md:w-8/12 items-center justify-center flex-col mx-auto md:px-0 px-12">
        <span className={`${sourceCodePro400.className} text-xl font-bold text-black mb-12`}> {`<About us/>`}</span>
        <Image src={motto} alt="100% maximum effort" class="mb-6" width="120" height="120"/>
        <span className={`${sourceCodePro400.className} text-sm text-gray-400 mb-6`}>const tedLasso = “The harder you work, the luckier you get.”</span>
        <span className="text-md md:text-center text-left font-light leading-7 text-text">Welcome to ITECHIEF, where a team of tech enthusiasts from New Zealand have come together to make a difference. We are a bunch of simple people, passionate about our dreams of helping small businesses achieve their goals by providing them with affordable branding, content, and technology solutions.
           <br/><br/> Our mission is simple – to empower small businesses with the tools and resources they need to succeed in today's digital world. We believe that every business deserves the opportunity to have a strong brand identity, engaging content, and access to cutting-edge technology, regardless of their size or budget. As a team, we take pride in our work and go the extra mile to ensure that our clients receive the best possible service. We are committed to building long-term relationships with our clients, and we work closely with them to understand their unique needs and requirements.
           <span aria-label="waving hand" role="img" className="mr-2">😉</span>
        </span>
        <a href="tel:0272684728" className='primary-gradient-background text-white primary-button mt-10 hover:primary-button-hover'>Let's talk today</a>
      </div>
    )}