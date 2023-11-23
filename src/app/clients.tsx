import { sourceCodePro700} from './fonts/fonts'
import Client1 from './assets/client-1.png';
import Client2 from './assets/client-2.png';
import Client3 from './assets/client-3.png';
import Client4 from './assets/client-4.png';
import Image from 'next/image'; // Import the Image component


export default function Clients() {
    return (
        <div className="md:w-8/12 w-full md:px-0 px-8 mx-auto items-center justify-items-center grid grid-cols-1 md:grid-cols-4  gap-4 mb-60">
            <Image src={Client1} alt="" className="mb-6"/>
            <Image src={Client2} alt="" className="mb-6"/>
            <Image src={Client3} alt="" className="mb-6"/>
            <Image src={Client4} alt="" className="mb-6"/>
        </div>
    )}