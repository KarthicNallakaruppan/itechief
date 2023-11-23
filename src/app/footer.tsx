import * as constants from './constants';

export default function Footer() {
    return (
        <section className=" mb-8 w-10/12 mx-auto mt-24" >
            <div className="w-full mx-auto p-4 md:py-8">
                <div className="sm:flex sm:justify-between flex-wrap">
                    <div className='flex'>
                    <span className="text-xl font-bold text-black">{constants.logo}</span>
                    </div>
                    <div className="flex flex-col">
                        <ul className="flex flex-wrap mb-6 text-sm text-sm font-medium sm:mb-0 text-gray-600">
                            <li className='mb-2'>
                                <a href="#" className="mr-4 hover:underline hover:text-secondary uppercase text-black font-light text-sm md:mr-6 ">Home</a>
                            </li>
                            <li className='mb-2'>
                                <a href="#" className="mr-4 hover:underline hover:text-secondary uppercase text-black font-light text-sm md:mr-6">Team</a>
                            </li>
                            <li className='mb-2'>
                                <a href="#" className="mr-4 hover:underline hover:text-secondary uppercase text-black font-light text-sm md:mr-6 ">Services</a>
                            </li>
                            <li className='mb-2'>
                                <a href="#" className="mr-4 hover:underline hover:text-secondary uppercase text-black font-light text-sm md:mr-6 ">Our clients</a>
                            </li>
                            <li className='mb-2'>
                                <a href="#" className="hover:underline hover:text-secondary uppercase text-black font-light text-sm">Contact</a>
                            </li>
                        </ul>
                        <div className="flex flex-col text-gray-500 mt-6 sm:self-end">
                            <div className='flex flex-col sm:items-end'>
                                <span className='text-sm mb-2 text-black font-medium'><i className="mr-2 bi bi-telephone"/>Contact</span>
                                <a className='text-sm hover:text-secondary'>arumugam.mathiazhagan@itechief.com</a>
                                <a href="tel:0272684728" className='text-sm hover:text-secondary'>0272684728</a>
                            </div>
                            <div className='flex flex-col mt-6 sm:items-end'>
                                <span className='text-sm mb-2 text-black font-medium'><i className="mr-2 bi bi-geo-alt-fill"/>Address</span>
                                <span className='text-sm text-right'>42A Atkinson Rd, Titirangi 1025 <br />
                                   Auckland , New Zealand
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-100  dark:border-gray-500 lg:my-8" />
                <span className="block text-xs text-gray-300 dark:text-gray-400">Copyright © 2023 Itechief. All Rights Reserved.</span>
            </div>
        </section >
    )
}
