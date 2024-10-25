import './App.css'
import { AuroraBackground } from './components/ui/aurora-background'
import { FaLinkedin, FaPhone } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';
import MagneticComponent from './components/Magnitc';
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

function App() {

  return (
    <>
      <AuroraBackground
        children={
          <div className='flex flex-col gap-4 items-center justify-center'>
            <div className='flex flex-row w-full justify-center'>
              <img src="withoutWards.png" className="w-[100px]" alt="" />
            </div>
            <h1 className='w-full text-center font-bold text-2xl text-white'>CapsCode EG
            </h1>
            <span className='w-[95%] md:w-[80%] lg:w-1/2 mx-auto text-center text-white'>CapsCode creates professional websites to help businesses grow and boost sales. We offer custom solutions that enhance engagement and digital presence. For full web solutions or digital marketing support, we are here to help.
            </span>
            <div className='container z-[50] justify-items-center mx-auto my-6 flex flex-row flex-wrap justify-center gap-4'>
              <div className='flex flex-col w-fit mx-auto pe-[73px]'>
                <div className='flex flex-row items-center text-white gap-2'>
                  <FaPhone />
                  <span>
                    Phone number
                  </span>
                </div>
                <a href="tel:+201272220625" className='text-white hover:cursor-pointer z-50'>+20 127 222 0625</a>
              </div>
              <div className='flex flex-col w-fit mx-auto'>
                <div className='flex flex-row items-center text-white gap-2'>
                  <MdEmail />
                  <span>
                    Email Address
                  </span>
                </div>
                <a href="mailto:capscodeeg.info@gmail.com" className='text-white hover:cursor-pointer z-50'>capscodeeg.info@gmail.com</a>
              </div>
              <div className='flex flex-col w-fit mx-auto'>
                <div className='flex flex-row items-center text-white gap-2'>
                  <MdEmail />
                  <span>
                    Email Address
                  </span>
                </div>
                <a href="https://caps-code.vercel.app/" className='text-white hover:cursor-pointer z-50'>https://caps-code.vercel.app/</a>
              </div>
            </div>
            <div className='flex flex-row justify-center w-full gap-4 z-[50]'>
              <MagneticComponent >
                <a title='facebook' className='border-[1px] border-white rounded-full p-3' href="https://www.facebook.com/profile.php?id=61567515213356">
                  <FaFacebook className='text-white' />
                </a>
              </MagneticComponent>
              <MagneticComponent >
                <a title='facebook' className='border-[1px] border-white rounded-full p-3' href='https://www.instagram.com/capscode.eg/'>
                  <RiInstagramFill className='text-white' />
                </a>
              </MagneticComponent>
              <MagneticComponent >
                <a title='facebook' className='border-[1px] border-white rounded-full p-3' href='https://www.linkedin.com/company/capscodeeg'>
                  <FaLinkedin className='text-white' />
                </a>
              </MagneticComponent>

            </div>
          </div>
        }
      />
    </>
  )
}

export default App
