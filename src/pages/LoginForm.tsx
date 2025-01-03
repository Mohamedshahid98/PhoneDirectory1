
import { useState } from "react";
import logo from "../../src/assets/logo (2).svg";
import SignInUpForm from "./SignInUpForm";

const LoginForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  return (
    <div className="w-screen h-screen flex ">
      <div className="bg-black w-full h-full text-white font-sans">
        <div className="h-full w-full flex flex-col justify-center items-center">
          <div className="text-white  h-[80%] w-[100%] sm:w-[60%] flex flex-col justify-center md:w-full ">
            <div className="w-full  h-[15%] flex justify-center">
              <div className="w-[90%] md:w-[70%] lg:w-[60%]">
                <p className="lg:text-4xl text-xl md:text-3xl "><span className="text-red ">#1 Doubt </span><span>Solving App</span></p>
                <p><span className="ml-4 text-blue">Solve problems </span><span>anytime, anywhere</span></p>
              </div>
            </div>
            <div className="w-full  lg:h-[85%] h-full  ">
              <SignInUpForm isSignUp={isSignUp} />
            </div>
          </div>

          <div className="lg:h-[10%] w-[100%] flex justify-center mt-4 sm:w-[60%]  md:w-full lg:w-[60%] ">
            <div className="w-[90%] md:w-[70%] lg:w-[90%] flex justify-between items-end  h-full ">
              <div className="p-3 ">
                Dont't have an account?
              </div>
              <div className="  rounded-lg text-white ">
                <button className="rounded-lg bg-slate-500 p-3" onClick={() => setIsSignUp(!isSignUp)}>{isSignUp ? "Sign in" : "Sign up"}</button>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="bg-purple w-full h-full hidden lg:flex  justify-center items-center">
        <div className=" h-[90%] w-[90%] flex flex-col justify-between ">
          <div className="text-white">
            <p className="font-bold lg:text-7xl text-2xl">Welcome to</p>
            <p className="lg:text-7xl text-2xl mb-4">student portal</p>
            <p>Login to access your account</p>
          </div>
          <div className="w-[90%]"><img src={logo} /></div>
        </div>

      </div>
    </div >
  );
}

export default LoginForm;
