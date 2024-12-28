
import logo from "../../src/assets/logo (2).svg";

const LoginForm = () => {
  return (
    <div className="w-screen h-screen flex ">
      
      <div className="bg-black h-full  w-full flex items-center justify-center md:w-[43.75%] text-assGray">
        <div className=" flex flex-col justify-center items-center h-full p-5 ">
          <div className=" font-sans ">
            <p className="font-bold text-4xl"><span className="text-red">#1 Doubt </span><span className="text-white"> Solving App</span></p>
            <p className="text-sm text-blue"><span>Solve problems </span><span className="text-white">anytime, anywhere</span></p>
          </div>
          <div className=" bg-red-600 h-[24.5625rem] mt-[5.375rem] justify-start w-full">
            {/* <div className="flex flex-col h-full "> */}
            <p className="font-bold text-5xl pb-2 pt-2 text-white">
              Login
            </p>
            <p className="pt-3 pb-3">
              Enter your account details
            </p>

            <div className="pt-3 pb-3">
              {/* <Input placeholder="User name" ></Input> */}
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
              <div className="pt-3 pb-3">Forgot Password</div>
            </div>
            <div className="w-full h-10">
              <button title="Login" className="w-full bg-purple text-white bg-none mb-4 h-full rounded-lg" >Login</button>
            </div>
          </div>
          {/* </div> */}
          <div className="  flex items-end w-full  md:h-[20%] gap-16 ">
            <div className="mb-3">
              Dont't have an account?
            </div>
            <div className=" bg-slate-500 rounded-lg text-white ">
              <button className="p-3 rounded-lg">Sign up</button>
            </div>
          </div>

        </div>
      </div>
      <div className="md:w-[56.25%] h-full bg-purple md:block hidden ">
        <div className="justify-center items-center flex-col flex h-full">
          <div className="text-white">
            <p className="font-bold text-7xl">Welcome to</p>
            <p className="text-7xl">student portal</p>
            <p>Login to access your account</p>
          </div>
          <div><img src={logo}/></div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
