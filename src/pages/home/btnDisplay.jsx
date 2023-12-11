import { useEffect, useMemo, useState } from "react";
import About from "./btnContent/about";
import Contact from "./btnContent/contact";
import Skill from "./btnContent/skill";

const BtnDisplay = () => {
    const [activeData,setActiveData] = useState(null)
    const contentData = useMemo(() => {
        return [
            {
                text:'about.component.jsx',
                image:"/assets/icon/jsxIcon.png",
                component:About
            },
            {
                text:'skill.component.js',
                image:"/assets/icon/jsIcon3.png",
                component:Skill
            },
            {
                text:'contact.scss',
                image:"/assets/icon/scssIcon.png",
                component:Contact
            }
        ]
    },[])
    useEffect(() => {
        setActiveData(contentData[0])
    },[contentData])
    const handleSetActive = (i) => {
        setActiveData(contentData[i])
    }
    return <div className="w-[80vw] h-auto flex flex-col justify-center bg-[#5C5C5C] rounded-t-3xl my-10">
        <div className="btn w-[99%] h-auto min-h-[50px] flex flex-wrap justify-start items-end mt-2 sm:px-0 px-2">
            {contentData.map((b,i) => <button onClick={() => {handleSetActive(i)}} key={b.text} className={`btnTitle w-full sm:w-3/5 md:w-[30%] min-w-[200px] h-[45px] mt-2 flex justify-start items-center xl:pl-8 text-[22px] text-white mx-1 rounded-t-[10px] ${b.text === activeData?.text ? 'bg-[#2C2C2C]' : 'bg-[#494949]'} `}>
                <img src={b.image} className="w-[35px] h-[35px] object-contain mx-6" alt="icon"/>
                <div className="w-[70%] sm:w-3/5 2xl:w-[75%] h-[90%] flex items-center"><span className="overflow-hidden whitespace-nowrap text-ellipsis">{b.text}</span></div>
                {b.text === activeData?.text && <div className="closeIcon w-[15%] 2xl:w-[5%] h-[90%] flex items-center justify-end">X</div>}
            </button>)}
        </div>
        <div className="detail w-full h-auto bg-[#242424] px-6 pt-10 text-[25px] overflow-y-auto ">
            {activeData !== null && <activeData.component />}
        </div>
    </div >
}
export default BtnDisplay;

