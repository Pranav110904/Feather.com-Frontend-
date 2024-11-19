import React from 'react'
import { BsFeather } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { DiApple } from "react-icons/di";

const Login = () => {
  return (
    <div className='bg-black h-screen flex justify-center items-center '>
        
        <section className=' flex flex-row w-[92%] mx-auto h-[60%]'>
            <div className='w-[57%] flex justify-center items-center'>
                <BsFeather size='80%' style={{ color: 'white', fontSize: '50px' }}/>
            </div>
            <div className=' w-[43%]  text-white text-[3vw] font font-bold font-syne'>
                <div className='mb-6'>Happening now</div>
                <div className='text-white mb-3 text-[2vw] font-bold font-syne'>Join today</div>
                <div className='flex mb-3 gap-6 text-xl items-center justify-center text-black  font-medium bg-white h-[50px] w-[300px] rounded-full'>
                    Sign In With Google
                    <FcGoogle />
                </div>
                <div className='flex gap-6 mb-3 text-xl items-center justify-center text-black  font-medium bg-white h-[50px] w-[300px] rounded-full'>
                    Sign In With Apple
                    <DiApple />
                </div>

                <div className='flex flex-row w-[300px] mb-3 justify-center items-center'>
                <div className='bg-white h-[1px] w-[40%] '></div><span className='text-lg text-white mx-3'>or</span><div className='bg-white h-[1px] w-[40%] '></div>
                </div>
                
                <div className='flex gap-6 mb-3 text-xl items-center justify-center text-white font-medium bg-[#1D9BF0] h-[50px] w-[300px] rounded-full'>
                    Create Account
                </div>

                <div className='mb-8 text-[1.4vh] font-medium w-[300px]'>By signing up, you agree to the <a href='https://x.com/en/tos' target='_blank' className='text-[#1D9BF0]'>Terms of Service</a> and <a href='https://x.com/en/privacy' target='_blank' className='text-[#1D9BF0]'>Privacy Policy</a>, including <a href='https://help.x.com/en/rules-and-policies/x-cookies' target='_blank' className='text-[#1D9BF0]'>Cookie Use.</a></div>
                
                <div className='text-lg mb-4'>Already have an account?</div>
                <div className='flex gap-6 mb-3 text-xl items-center border-[1px] justify-center text-[#1D9BF0] font-medium h-[50px] w-[300px] rounded-full'>
                    Sign in
                  
                </div>
            </div>
        </section>

    </div>
  )
}

export default Login