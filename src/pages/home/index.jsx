import BtnDisplay from "./btnDisplay";
import Contact from "./contact";
import Des from "./des";
import Project from "./project";

const Home = () => {
    return <div className="w-full h-auto min-h-max flex flex-col items-center mb-80 md:mb-40">
        <Des />
        <BtnDisplay />
        <Project />
        <Contact />
    </div>
}
export default Home;