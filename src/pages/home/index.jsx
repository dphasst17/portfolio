import BtnDisplay from "./btnDisplay";
import Contact from "./contact";
import Des from "./des";
import Project from "./project";
import Windows from "./windows";

const Home = () => {
    return <div className="w-full h-auto min-h-max flex flex-col items-center mb-80 md:mb-40">      
            <Des />
            <BtnDisplay />
            <Project />
            <h2 className="w-full text-center text-white text-[38px] font-[700]">PREVIEW UI PROJECT</h2>
            <Windows />
            <Contact />
    </div>
}
export default Home;