import AuthFooterLinks from "../components/AuthFooterLinks";
import { BsFeather } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { DiApple } from "react-icons/di";
import RoundedButton from "../components/RoundedButton"; 
import AuthDivider from "../components/AuthDivider";

const Login = () => {
  return (
    <div className="bg-black h-screen overflow-x-hidden flex flex-col justify-center items-center">
      <section className="mt-8 mb-20 flex flex-col md:flex-row w-[92%] mx-auto h-[100%] md:h-[80%]">
        {/* Logo Section */}      
        <div className="w-full md:w-[57%] mt-56 lg:mt-96   flex justify-center items-center">
          <BsFeather
            className="
              text-white 
              text-[150px]       /* default for very small screens */
              sm:text-[250px]    /* small screens */
              md:text-[350px]   /* medium screens */
              lg:text-[400px]   /* large screens */
              xl:text-[450px]   /* extra-large screens */
            "
          />
        </div>



        {/* Content Section */}
        <div className="w-full md:w-[43%] md:mt-64 mt-20  text-white text-[6vw] md:text-[3vw] font-bold font-syne">
          <div className="mb-4 text-center md:text-left">Happening now</div>
          <div className="mb-3 text-[5vw] md:text-[2vw] font-bold text-center md:text-left">
            Join today
          </div>

          {/* Google Sign-In Button */}
          <RoundedButton
            label="Sign In With Google"
            icon={FcGoogle}
            color="bg-white text-black hover:bg-[#d7d7d7]"
            onClick={() => console.log("Google login clicked")}
          />

          {/* Apple Sign-In Button */}
          <RoundedButton
            label="Sign In With Apple"
            icon={DiApple}
            color="bg-white text-black hover:bg-[#d7d7d7]"
            onClick={() => console.log("Apple login clicked")}
          />

          <AuthDivider/>

          {/* Create Account Button */}
          <RoundedButton
            label="Create Account"
            color="bg-[#1D9BF0] text-white hover:bg-[#54b2ff]"
            onClick={() => console.log("Create account clicked")}
          />

          {/* Terms of Service */}
          <div className="mb-4 text-xs md:text-sm font-medium w-[95%] md:w-[300px] mx-auto md:mx-0 text-center md:text-left">
            By signing up, you agree to the
            <a
              href="https://x.com/en/tos"
              target="_blank"
              rel="noreferrer"
              className="text-[#1D9BF0]"
            >
              {" "}
              Terms of Service
            </a>{" "}
            and
            <a
              href="https://x.com/en/privacy"
              target="_blank"
              rel="noreferrer"
              className="text-[#1D9BF0]"
            >
              {" "}
              Privacy Policy
            </a>
            , including
            <a
              href="https://help.x.com/en/rules-and-policies/x-cookies"
              target="_blank"
              rel="noreferrer"
              className="text-[#1D9BF0]"
            >
              {" "}
              Cookie Use
            </a>
            .
          </div>

          {/* Sign-In Link */}
          <div className="text-base md:text-lg mb-2 text-center md:text-left">
            Already have an account?
          </div>
          <RoundedButton
            label="Sign in"
            color="border  text-[#1D9BF0] hover:bg-[#1d9cf010]"
            onClick={() => console.log("Sign in clicked")}
          />
        </div>
      </section>
      <AuthFooterLinks />

    </div>
  );
};

export default Login;
