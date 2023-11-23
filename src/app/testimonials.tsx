import { sourceCodePro300, sourceCodePro400, sourceCodePro700 } from './fonts/fonts'

export default function Testimonials() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <span className={`${sourceCodePro400.className} text-xl font-bold text-black text-center mb-12`}> {`<Client review comments/>`}</span>
            <div className="flex flex-wrap justify-center md:w-9/12 w-full mx-auto md:px-0 px-12 mb-60 gap-3">
                <div className='flex flex-col md:w-5/12 w-full gap-3'>
                    <div className='relative w-full'>
                        <div className='window-header h-8'></div>
                        <div className='window-body p-6'>
                            <span className={`${sourceCodePro300.className} flex flex-col text-sm text-white font-light`}>
                                <span>iTechief's <span className='text-mustard'>quick, quirky, and professional</span> approach to branding for Pista Studios was impressive. <span className='text-success'>In just 10 minutes, they crafted a spot-on logo.</span> I recommend them for all creative pursuits—affordable and efficient, making them the go-to for exceptional design.</span>
                                <span className='text-xs text-midGray mt-10'>//Author</span>
                                <span className='text-sm text-primaryLight'>Karthic</span>
                                <span className='text-sm text-primaryLight'>@Pista studios Founder</span>
                            </span>
                        </div>
                        <div className='flex items-center absolute top-3 left-4'>
                            <div className='control mr-2 red'></div>
                            <div className='control mr-2 dull-grey'></div>
                            <div className='control mr-2 green'></div>
                        </div>
                    </div>
                    <div className='relative w-full'>
                        <div className='window-header h-8'></div>
                        <div className='window-body p-6'>
                            <span className={`${sourceCodePro300.className} flex flex-col text-sm text-white font-light`}>
                                <span>Brilliant logo design, captured my company's essence <span className='text-mustard'>on a budget.</span> <span className='text-success'> Easy collaboration</span>, highly recommended for creative and affordable solutions.</span>
                                <span className='text-xs text-midGray mt-10'>//Author</span>
                                <span className='text-sm text-primaryLight'>Jayasudha</span>
                                <span className='text-sm text-primaryLight'>@Creatik Founder</span>
                            </span>
                        </div>
                        <div className='flex items-center absolute top-3 left-4'>
                            <div className='control mr-2 red'></div>
                            <div className='control mr-2 dull-grey'></div>
                            <div className='control mr-2 green'></div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col md:w-6/12 w-full gap-3'>
                    <div className='relative w-full'>
                        <div className='window-header h-8'></div>
                        <div className='window-body p-6'>
                            <span className={`${sourceCodePro300.className} flex flex-col text-sm text-white font-light`}>
                                <span>From <span className='text-success'>branding to prototypes, development, and hosting,</span> iTechief delivered an exceptional experience. </span>
                                <span className='text-xs text-midGray mt-10'>//Author</span>
                                <span className='text-sm text-primaryLight'>DK</span>
                                <span className='text-sm text-primaryLight'>@DKJS photography Founder</span>
                            </span>
                        </div>
                        <div className='flex items-center absolute top-3 left-4'>
                            <div className='control mr-2 red'></div>
                            <div className='control mr-2 dull-grey'></div>
                            <div className='control mr-2 green'></div>
                        </div>
                    </div>
                    <div className='relative w-full'>
                        <div className='window-header h-8'></div>
                        <div className='window-body p-6'>
                            <span className={`${sourceCodePro300.className} text-sm text-white font-light flex flex-col`}>
                                <span className='text-mustard'>Exceptional from design to development!</span> My website designer exceeded expectations with a seamless process, delivering a stunning site that perfectly captures my vision. Fast, precise, and highly recommended – <span className='text-success'>all at an unbeatable price!</span>
                                <span className='text-xs text-midGray mt-10'>//Author</span>
                                <span className='text-sm text-primaryLight'>@Hobsoville Founder</span>
                            </span>
                        </div>
                        <div className='flex items-center absolute top-3 left-4'>
                            <div className='control mr-2 red'></div>
                            <div className='control mr-2 dull-grey'></div>
                            <div className='control mr-2 green'></div>
                        </div>
                    </div>
                </div>
                <a href="tel:0272684728" className='primary-gradient-background text-white primary-button mt-6 hover:primary-button-hover'>Let's collaborate!</a>
            </div>
        </div>
    )
}

