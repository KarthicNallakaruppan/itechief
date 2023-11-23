import { sourceCodePro400 } from './fonts/fonts'

export default function HeroLayout() {
    return (
      <div className="flex md:w-6/12 items-center flex-col my-60 mx-auto md:px-0 px-8">
        <span className="text-md text-center text-text leading-7 mb-2">Hey there! <span aria-label="waving hand" role="img" className="mr-2">👋</span>
        We love technology and people with maximum efforts.
        What’s better than a bunch people trying their best in life.
        We are here for you if you are a small time business group.
        </span>
        <span className={`${sourceCodePro400.className} text-sm text-gray-400`}>console.warn(“It is going to be fun! Be ready.”)</span>
        <a href="tel:0272684728" className='primary-gradient-background text-white primary-button mt-6 hover:primary-button-hover'>Speak with us</a>
      </div>
    )}