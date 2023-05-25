import React, { useState, useEffect } from "react";
import Link from "next/link";
import DarkModeSwitcher from "./darkmode";
const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  const [dropdown0, setDropdown0] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [tutorialbox, setTutorialbox] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);

  const HandleMenuOpen = () => {
    if (!dropdownMenu) {

      setDropdownMenu(true)
    }
    else {
      setDropdownMenu(false)
    }
  }


  const handleMouse = () => {
    setDropdown(true)


  }
  const handleMouseleave = () => {
    setDropdown(false)


  }
  const handleMouse1 = () => {
    setDropdown1(true)


  }
  const handleMouseleave1 = () => {
    setDropdown1(false)


  }
  const handleMouse0 = () => {
    setDropdown0(true)


  }
  const handleMouseleave0 = () => {
    setDropdown0(false)


  }
  const handleMouse2 = () => {
    setDropdown2(true)


  }
  const handleMouseleave2 = () => {
    setDropdown2(false)


  }
  const handleTutorial = () => {
    if (!tutorialbox) {
      setTutorialbox(true)
    }
    else {
      setTutorialbox(false)
    }
  }


  return (
    <>
      <nav className="bg-white mobileNav  border-b-2 border-gray-200 dark:bg-gray-900 dark:border-gray-700 text-black dark:text-white">
        <div className="max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto ">



          <Link href="/" className="flex ml-1 lg:ml-5 hover:text-o  items-center">
            <span class="material-symbols-outlined text-4xl">
              data_object
            </span>

          </Link>

          <div className="flex items-center">
            <div className="lg:hidden">

              <DarkModeSwitcher />
            </div>
            <Link href="https://github.com/deepthapliyal" target="_blank" className="lg:hidden  dark:text-white mx-3" passHref>


              <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="currentcolor" height="30" color="" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>

            </Link>




            <button onClick={HandleMenuOpen} data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2  text-gray-500 rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-white  dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">

              <span className="sr-only">Open main menu</span>
              <svg className="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>

            </button>
          </div>






          <div className={`w-full items-center  md:block md:w-auto ${!dropdownMenu ? "hidden" : ""} `} id="navbar-multi-level">
            <ul className="flex flex-col   lg:items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">


              <li


                className={
                  "px-4 py-2 mx-2  cursor-pointer  relative" +
                  (activeLink === "testimoni"
                    ? " text-orange-500 animation-active "
                    : " text-black-500 hover:text-orange-500 ")
                }

              ><Link href="/">
                  Home
                </Link>
              </li>

              <li


                className={
                  "px-4 py-2 mx-2  cursor-pointer  relative" +
                  (activeLink === "testimoni"
                    ? " text-orange-500 animation-active "
                    : " text-black-500 hover:text-orange-500 ")
                }

              >
                <a href="/about">About</a>
              </li>





              <li onMouseEnter={handleMouse0} onMouseLeave={handleMouseleave0}

                className={
                  "px-1 py-2 mx-2 cursor-pointer  relative"
                }

              >

                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center  tify-between w-full py-2 pl-3 pr-4  text-gray-700 border-b border-gray-100 hover:text-orange-500 md:hover:bg-transparent md:border-0  md:p-0 md:w-auto dark:text-white md:dark:hover:text-orange-500 dark:focus:text-white dark:border-gray-700  md:dark:hover:bg-transparent">Tutorials<svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>

                <div id="dropdownNavbar" className={`z-10 absolute  font-normal bg-white-500 divide-y divide-gray-100 ${!dropdown0 ? 'hidden' : ''} rounded-lg shadow w-44 bg-white dark:bg-gray-700 dark:divide-gray-600`}>
                  <ul className="py-2 text-sm text-gray-700 dark:text-white" aria-labelledby="dropdownLargeButton">
                    <li>
                      <Link href="/python" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Python</Link>
                    </li>
                    <li>
                      <Link href="/java" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Java</Link>
                    </li>
                    <li aria-labelledby="dropdownNavbarLink">
                      <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" onClick={handleTutorial} type="button" className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Web devlopment<svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg></button>

                      <div id="doubleDropdown" className={`z-10 bg-white ${!tutorialbox ? "hidden" : ""}  divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="doubleDropdownButton">
                          <li>
                            <Link href="/html" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-black-500 dark:hover:text-white">HTML</Link>
                          </li>
                          <li>
                            <Link href="/css" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-black-500 dark:hover:text-white">CSS</Link>
                          </li>
                          <li>
                            <Link href="/js" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-black-500 dark:hover:text-white">Javascript</Link>
                          </li>
                          <li>
                            <Link href="/Reactjs" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-black-500 dark:hover:text-white">ReactJS</Link>
                          </li>
                          <li>
                            <Link href="/NOdejs" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-black-500 dark:hover:text-white">NodeJS</Link>
                          </li>
                          <li>
                            <Link href="/Django" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-black-500 dark:hover:text-white">Django</Link>
                          </li>
                          <li>
                            <Link href="/MongoDB" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-black-500 dark:hover:text-white">MongoDB</Link>
                          </li>
                          <li>
                            <Link href="/Mysql" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-black-500 dark:hover:text-white">MySql</Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <Link href="/android" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Android App</Link>
                    </li>
                  </ul>

                </div>


              </li>
              <li className="px-4 py-2 mx-2  cursor-pointer hidden sm:block relative">
                <DarkModeSwitcher />
              </li>

              <li className="px-4 py-2 mx-2 hover:text-orange-500 cursor-pointer hidden sm:block relative">
                <Link href="https://github.com/deepthapliyal" target="_blank" passHref>


                  <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="currentColor" height="30" color="" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>

                </Link>
              </li>

              <li className="px-4  mx-2  flex text-center items-center cursor-pointer  relative">
 



                <div className="px-4 mt-2  hidden sm:block mx-2">
                  <Link href="/Contact">

                    <button type="button" class="text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 hover:text-orange-400 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                      <span class="material-symbols-outlined mr-4 ">
                        login
                      </span >
                      Get Started
                    </button>
                  </Link>
                </div>

              </li>

            </ul>

          </div>
        </div>
      </nav>



    </>
  );
};

export default Header;