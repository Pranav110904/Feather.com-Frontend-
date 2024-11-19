import React from 'react';
import { BsFeather } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { DiApple } from "react-icons/di";

const Login = () => {
  return (
    <div className='bg-black h-screen overflow-x-hidden flex flex-col   justify-center items-center'>
      <section className='mt-8 mb-8 flex flex-col md:flex-row w-[92%] mx-auto h-[100%] md:h-[80%]'>
        
        {/* Logo Section */}
        <div className='w-full md:w-[57%] mt-24 flex justify-center items-center'>
          <BsFeather size='30vw' style={{ color: 'white', fontSize: '50px' }} />
        </div>

        {/* Content Section */}
        <div className='w-full md:w-[43%] mt-20 text-white text-[6vw] md:text-[3vw] font-bold font-syne'>
          <div className='mb-4 text-center md:text-left'>Happening now</div>
          <div className='mb-3 text-[5vw] md:text-[2vw] font-bold text-center md:text-left'>Join today</div>

          {/* Google Sign-In Button */}
          <div className='flex mb-3 gap-6 text-lg md:text-xl transition-all duration-300 ease-in-out hover:cursor-pointer hover:bg-[#d7d7d7] items-center justify-center text-black font-medium bg-white h-[50px] w-[95%] md:w-[300px] rounded-full mx-auto md:mx-0'>
            Sign In With Google
            <FcGoogle />
          </div>

          {/* Apple Sign-In Button */}
          <div className='flex gap-6 mb-3 text-lg md:text-xl items-center hover:cursor-pointer hover:bg-[#d7d7d7] justify-center transition-all duration-300 ease-in-out text-black font-medium bg-white h-[50px] w-[95%] md:w-[300px] rounded-full mx-auto md:mx-0'>
            Sign In With Apple
            <DiApple />
          </div>

          {/* Divider */}
          <div className='flex flex-row w-[95%] md:w-[300px] mb-3 justify-center items-center mx-auto md:mx-0'>
            <div className='bg-white h-[1px] w-[40%]'></div>
            <span className='text-base md:text-lg text-white mx-3'>or</span>
            <div className='bg-white h-[1px] w-[40%]'></div>
          </div>

          {/* Create Account Button */}
          <div className='flex gap-6 mb-3 text-lg md:text-xl items-center justify-center transition-all duration-300 ease-in-out text-white font-medium hover:cursor-pointer hover:bg-[#54b2ff] bg-[#1D9BF0] h-[50px] w-[95%] md:w-[300px] rounded-full mx-auto md:mx-0'>
            Create Account
          </div>

          {/* Terms of Service */}
          <div className='mb-4 text-xs md:text-sm font-medium w-[95%] md:w-[300px] mx-auto md:mx-0 text-center md:text-left'>
            By signing up, you agree to the 
            <a href='https://x.com/en/tos' target='_blank' className='text-[#1D9BF0]'> Terms of Service</a> and 
            <a href='https://x.com/en/privacy' target='_blank' className='text-[#1D9BF0]'> Privacy Policy</a>, including 
            <a href='https://help.x.com/en/rules-and-policies/x-cookies' target='_blank' className='text-[#1D9BF0]'> Cookie Use</a>.
          </div>

          {/* Sign-In Link */}
          <div className='text-base md:text-lg mb-2 text-center md:text-left'>Already have an account?</div>
          <div className='flex gap-6 text-lg md:text-xl items-center border-[1px] justify-center transition-all duration-300 ease-in-out text-[#1D9BF0] font-medium h-[50px] w-[95%] md:w-[300px] hover:cursor-pointer rounded-full mx-auto md:mx-0'>
            Sign in
          </div>
        </div>
      </section>
      <div className="bg-black text-gray-400 text-xs font-syne md:text-sm mt-32 font-medium py-4">
  <div className="container mx-auto flex flex-wrap justify-center space-x-4">
    <a href="#" className="hover:text-gray-200">About</a>
    <a href="#" className="hover:text-gray-200">Download the X app</a>
    <a href="#" className="hover:text-gray-200">Help Center</a>
    <a href="#" className="hover:text-gray-200">Terms of Service</a>
    <a href="#" className="hover:text-gray-200">Privacy Policy</a>
    <a href="#" className="hover:text-gray-200">Cookie Policy</a>
    <a href="#" className="hover:text-gray-200">Accessibility</a>
    <a href="#" className="hover:text-gray-200">Ads info</a>
    <a href="#" className="hover:text-gray-200">Blog</a>
    <a href="#" className="hover:text-gray-200">Careers</a>
    <a href="#" className="hover:text-gray-200">Brand Resources</a>
    <a href="#" className="hover:text-gray-200">Advertising</a>
    <a href="#" className="hover:text-gray-200">Marketing</a>
    <a href="#" className="hover:text-gray-200">X for Business</a>
    <a href="#" className="hover:text-gray-200">Developers</a>
    <a href="#" className="hover:text-gray-200">Directory</a>
    <a href="#" className="hover:text-gray-200">Settings</a>
    <span className="text-gray-500">© 2024 X Corp.</span>
  </div>
</div>

    </div>
  );
};

export default Login;
