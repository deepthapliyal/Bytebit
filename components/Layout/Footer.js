import React from "react";
// import Facebook from "../../public/assets/Icon/facebook.svg";
// import Twitter from "../../public/assets/Icon/twitter.svg";
// import Instagram from "../../public/assets/Icon/instagram.svg";
const Footer = () => {
  return (
    <div className="bg-white  dark:bg-black text-black dark:text-white pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          
          <p className="mb-4">
            <strong className="font-medium">Bit Genius</strong> Unleashing the power of a single mind, I craft digital masterpieces with precision and passion.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
             
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              
            </div>
          </div>  
          <p className="text-gray-400 dark:text-white ">©{new Date().getFullYear()} - Bit Genius</p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className=" mb-4 font-medium text-lg">Services</p>
          <ul >
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Website developement{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Pricing{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Tutorials{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              API{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Blog{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className=" mb-4 font-medium text-lg">Project</p>
          <ul>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Ask for serviecs{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Colab with me{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              FAQ{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              About Me{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Privacy Policy{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Terms of Service{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className=" mb-4 font-medium text-lg">Hire me</p>
          <ul >
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Contact me{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Become Partner{" "}
            </li>
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
              Work with me{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
