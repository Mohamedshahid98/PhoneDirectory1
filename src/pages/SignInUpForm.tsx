import { FC } from "react";

interface ISignInUpForm {
  isSignUp: boolean
}

const SignInUpForm: FC<ISignInUpForm> = ({ isSignUp }) => {
  return (
    <div className='flex justify-center items-center w-full h-full'>
      <div className=' w-[90%] h-full md:w-[70%] lg:w-[60%]'>
        <div className=''>
          <p className=' md:text-4xl text-xl'>Login</p>
          <p className=' mt-5'>
            Enter the account details
          </p>
        </div>
        {isSignUp ? <>
          <div className="pt-2 ">
            <input
              className="bg-transparent border-b-2 border-gray-400 text-gray-400 placeholder-assGray focus:outline-none  mb-4 w-full pb-3"
              placeholder="Full name"

            />
          </div>
          <div className="pb-2">
            <input
              className="bg-transparent border-b-2 border-gray-400 text-gray-400 placeholder-assGray focus:outline-none w-full  mb-4 pb-2"
              placeholder="Email ID"
            />
          </div>
          <div className="pb-2">
            <input
              className="bg-transparent border-b-2 border-gray-400 text-gray-400 placeholder-assGray focus:outline-none  mb-4 w-full pb-2"
              placeholder="Phone number"

            />
          </div>
          <div className="pb-2">
            <input
              className="bg-transparent border-b-2 border-gray-400 text-gray-400 placeholder-assGray focus:outline-none w-full  mb-4 pb-2"
              placeholder="City"
            />
          </div>
          <div className="pb-2">
            <input
              className="bg-transparent border-b-2 border-gray-400 text-gray-400 placeholder-assGray focus:outline-none  mb-4 w-full pb-2"
              placeholder="Choose Password"

            />
          </div>
          <div className="pb-2">
            <input
              className="bg-transparent border-b-2 border-gray-400 text-gray-400 placeholder-assGray focus:outline-none w-full  mb-4 pb-1"
              placeholder="Confirm Password"
            />
          </div>
        </> : <div className=''>
          <div className="pt-3 pb-3">
            <input
              className="bg-transparent border-b-2 border-gray-400 text-gray-400 placeholder-assGray focus:outline-none  mb-4 w-full pb-3"
              placeholder="Username"

            />
          </div>
          <div className="pt-3 pb-3">
            <input
              className="bg-transparent border-b-2 border-gray-400 text-gray-400 placeholder-assGray focus:outline-none w-full  mb-4 pb-3"
              placeholder="Password"
              type="password"
            />
          </div>
          <div>
            <div className="pt-3 pb-3 text-gray-400">Forgot Password?</div>
          </div>
        </div>}
        <div className=''>
          <div className="w-full h-10">
            <button title="Login" className="w-full bg-purple text-white bg-none mb-4 h-full rounded-lg" >Login</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SignInUpForm;
