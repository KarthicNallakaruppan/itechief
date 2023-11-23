import * as constants from './constants';

export default function Header() {
    return (
        <section>
            <header className='py-10'>
                <nav className="fixed z-20 w-full bg-white/80 dark:bg-gray-900/80 navbar peer-checked:navbar-active md:relative md:bg-transparent dark:shadow-none">
                    <div className="xl:container m-auto px-6 md:px-12">
                        <div className="flex flex-wrap items-center justify-between gap-6 md:pb-3 md:gap-0">
                            <div className="w-full flex justify-between lg:w-auto">
                                <span className="text-xl font-bold text-black">{constants.logo}</span>
                            </div>
                            <div className="navmenu hidden w-full flex-wrap grow justify-end items-center mb-16 space-y-8 p-6 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
                                <div className="text-gray-600 dark:text-gray-300 lg:pr-4">
                                    <ul className="space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0">
                                        <li>
                                            <a href="#" className="block md:px-4 transition hover:text-secondary text-sm uppercase text-black font-light">
                                                <span>Home</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block md:px-4 transition hover:text-secondary text-sm uppercase text-black font-light">
                                                <span>Team</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block md:px-4 transition hover:text-secondary text-sm uppercase text-black font-light">
                                                <span>Services</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block md:px-4 transition hover:text-secondary text-sm uppercase text-black font-light">
                                                <span>Our clients</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="block md:px-4 transition hover:text-secondary text-sm uppercase text-black font-light">
                                                <span>Contact</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

        </section>
    )
}