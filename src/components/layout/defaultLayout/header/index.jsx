import { useEffect, useState } from "react";
import { ImHome } from "react-icons/im";
import { CgWebsite } from "react-icons/cg";
import { MdContactPage } from "react-icons/md";
import { ImArrowUp } from "react-icons/im";
import { FaBars } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
import Widget from "./widget"
import {useNavigate} from 'react-router-dom';
const Header = () => {
    const navigate = useNavigate();
    const [isVisible, setIsVisible] = useState(false);
    const [showNav,setShowNav] = useState(true)

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const handleSetNav = () => {
    setShowNav(!showNav)
  }
    return <header className="w-full h-[12vh] flex flex-wrap justify-center items-center my-4">
        <Widget />
            <div onClick={scrollToTop} className={`fixed bottom-[20vw] sm:bottom-[10vw] md:bottom-[5vw] left-[2vw] ${isVisible ? 'w-[60px] h-[50px]' :'w-0 h-0'} flex mx-2 items-center justify-center text-[15px] text-slate-100 font-semibold cursor-pointer bg-slate-700 rounded-lg hover:bg-slate-600 transition-all overflow-hidden`}>
                <ImArrowUp className="w-full h-3/5"/>
            </div>
            <div onClick={handleSetNav} className={`fixed bottom-[1vw] left-[2vw] w-[60px] h-[50px] flex mx-2 items-center justify-center text-[15px] text-slate-100 font-semibold cursor-pointer bg-slate-700 rounded-lg hover:bg-slate-600 transition-all overflow-hidden`}>
                <FaBars className="w-full h-3/5"/>
            </div>
        <nav className={`fixed bottom-[1vw] z-50 flex justify-center items-center ${showNav ? 'w-screen ssm:w-[80vw] sm:w-[60vw] xl:w-[40vw] h-[80px]':'w-0 h-0'} overflow-hidden mx-auto rounded-lg transition-all`}>
            <div className="navOverlay absolute w-screen ssm:w-[80vw] sm:w-[60vw] lg:w-full h-full bg-slate-900 rounded-lg z-10 opacity-100 ssm:opacity-50"></div>
            <FaRegWindowClose className=" block ssm:hidden w-[10%] h-full text-white z-30" onClick={handleSetNav} />
            <div onClick={() => {navigate('/')}} className="w-1/4 min-w-[100px] h-3/5 flex mx-2 items-center justify-center text-[20px] text-slate-100 font-semibold cursor-pointer bg-slate-700 rounded-lg hover:text-blue-500 transition-all z-30">
                <ImHome /><span className="mx-2 hidden lg:block">Home</span>
            </div>
            <div onClick={() => {window.location.href="/#project"}} className="w-1/4 min-w-[100px] h-3/5 flex mx-2 items-center justify-center text-[20px] text-slate-100 font-semibold cursor-pointer bg-slate-700 rounded-lg hover:text-blue-500 transition-all z-30">
                <CgWebsite/><span className="mx-2 hidden lg:block">Project</span>
            </div>
            <div onClick={() => {window.location.href="/#contact"}} className="w-1/4 min-w-[100px] h-3/5 flex mx-2 items-center justify-center text-[20px] text-slate-100 font-semibold cursor-pointer bg-slate-700 rounded-lg hover:text-blue-500 transition-all z-30">
                <MdContactPage/><span className="mx-2 hidden lg:block">Contact</span>
            </div>
        </nav>
    </header>
}
export default Header