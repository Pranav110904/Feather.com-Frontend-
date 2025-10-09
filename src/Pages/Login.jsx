
import { useNavigate } from "react-router-dom";
import AuthFooterLinks from "../components/AuthComponents/AuthFooterLinks";
import { BsFeather } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { DiApple } from "react-icons/di";
import RoundedButton from "../components/UIComponents/RoundedButton"; 
import AuthDivider from "../components/AuthComponents/AuthDivider";

const Login = () => {
  
  const navigate = useNavigate();
  return (
    
    
    <div className="bg-black h-screen flex flex-col justify-between">
      
      <section className="flex flex-col md:flex-row items-center justify-center w-[92%] mx-auto h-full md:h-[80%]">
        
        {/* Logo Section */}
        <div className="flex justify-center items-center w-full md:w-[55%] mb-10 md:mb-0">
          <BsFeather
            className="
              text-white
              text-[80px]    /* mobile */
              sm:text-[150px]
              md:text-[250px]
              lg:text-[320px]
              xl:text-[400px]
            "
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-[45%] flex flex-col items-center md:items-start text-white">
          <h1 className="mb-4 text-center md:text-left text-[7vw] md:text-[2.5vw] font-bold font-syne">
            Happening now
          </h1>
          <h2 className="mb-6 text-center md:text-left text-[5vw] md:text-[1.8vw] font-bold font-syne">
            Join today
          </h2>

          {/* Buttons */}
          <div className="w-[90%] sm:w-[70%] md:w-[300px] flex flex-col gap-3 font-syne">
            <RoundedButton
              label="Sign In With Google"
              icon={FcGoogle}
              color="bg-white text-black hover:bg-[#d7d7d7]"
              onClick={() => console.log("Google login clicked")}
            />

            <RoundedButton
              label="Sign In With Apple"
              icon={DiApple}
              color="bg-white text-black hover:bg-[#d7d7d7]"
              onClick={() => console.log("Apple login clicked")}
            />

            <AuthDivider />

            
            < RoundedButton
              label="Create Account"
              color="bg-[#1D9BF0] text-white hover:bg-[#54b2ff]"
              onClick={() => navigate("/setup/Account")}
            />
          </div>

          {/* Terms */}
          <p className="mt-4 text-xs md:text-sm text-center md:text-left max-w-[90%] md:max-w-[300px] font-syne">
            By signing up, you agree to the
            <a href="https://x.com/en/tos" target="_blank" rel="noreferrer" className="text-[#1D9BF0]"> Terms of Service</a> and
            <a href="https://x.com/en/privacy" target="_blank" rel="noreferrer" className="text-[#1D9BF0]"> Privacy Policy</a>,
            including
            <a href="https://help.x.com/en/rules-and-policies/x-cookies" target="_blank" rel="noreferrer" className="text-[#1D9BF0]"> Cookie Use</a>.
          </p>

          {/* Sign In */}
          <div className="mt-6 text-base md:text-lg text-center md:text-left font-syne">
            Already have an account?
          </div>
          <div className="w-[90%] sm:w-[70%] md:w-[300px] mt-2 font-syne ">
            <RoundedButton
              label="Sign in"
              color="border text-[#1D9BF0] hover:bg-[#1d9cf010]"
              onClick={() => console.log("Sign in clicked")}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <AuthFooterLinks />
    </div>
  );
};

export default Login;
