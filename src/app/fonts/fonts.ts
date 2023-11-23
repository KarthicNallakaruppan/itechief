import { Space_Grotesk, Source_Code_Pro } from 'next/font/google'
 
// define your variable fonts
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })
// define 3 weights of a non-variable font
const sourceCodePro300 = Source_Code_Pro({ weight: '300' ,  subsets: ['latin'] })
const sourceCodePro400 = Source_Code_Pro({ weight: '400' ,  subsets: ['latin'] })
const sourceCodePro700 = Source_Code_Pro({ weight: '700' , subsets: ['latin'] })
 
export { spaceGrotesk, sourceCodePro300, sourceCodePro400, sourceCodePro700 }