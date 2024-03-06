import { useContext, useState } from "react"
import { StateContext } from "../../context/stateContext";
import { FaAngleDoubleDown } from "react-icons/fa";
const Project = () => {
    const { project } = useContext(StateContext);
    const [listUrl, setListUrl] = useState(null);
    const [isShow, setIsShow] = useState(false)
    return <div id="project" className="w-[80vw] h-auto flex flex-wrap justify-center rounded-3xl my-10">
        <h2 className="w-full text-center text-white text-[38px] font-[700]">PROJECT</h2>
        <div className="items w-full h-auto flex flex-wrap justify-around">
            {project !== null && project.map(p => <div
                className={`project ${project !== null ? 'w-[20%]' : 'w-0'}  min-h-[500px] sm:min-h-[300px] skew-x-[20deg] flex flex-wrap justify-start m-2 p-2 bg-[#423F3F] 
                rounded-lg cursor-pointer hover:scale-105 transition-all`} key={p.id}>
                <div className="info w-full h-auto min-h-[200px] sm:min-h-0 sm:h-full flex flex-wrap justify-center ">
                    <div className="name w-full h-auto text-white text-[22px] flex items-center justify-center font-bold">{p.nameProject}</div>
                    <div className="w-full flex flex-wrap justify-around text-white font-bold text-[20px]">
                        <span className="w-full flex justify-center items-center"> Technology</span> {p.technology.map(e => <img className="w-[30px] h-[30px] object-contain mx-2" src={`/assets/icon/${e}-logo.png`} alt="" key={e} />)}
                    </div>
                    <div className="btnProject w-4/5 flex flex-wrap justify-between text-white font-semibold">
                        <button onClick={() => { setListUrl(p.url.flatMap(e => e.url), isShow === false ? setIsShow(true) : '') }} className=" flex items-center justify-center w-[48%] h-[30px] bg-red-500 my-2 rounded-lg">Preview < FaAngleDoubleDown /></button>
                        <button onClick={() => { setListUrl(p.github.flatMap(e => e.url), isShow === false ? setIsShow(true) : '') }} className="w-[48%] h-[30px] bg-slate-500 my-2 rounded-lg">Github</button>
                    </div>
                </div>
            </div>)}
            <div className={`fixed ${isShow ? 'w-[30vw]' : 'w-0'} flex flex-wrap justify-center bg-gray-900 rounded-lg text-white font-regular bottom-[6vw] z-50 left-1/2 transform -translate-x-1/2 transition-all overflow-hidden`}>
                <span className="w-full ml-2 font-bold cursor-pointer hover:text-red-500" onClick={() => { setIsShow(false) }}>X</span>
                {listUrl !== null && listUrl.map((e, i) => <span onClick={() => { window.open(e); }} key={i} className="w-full flex justify-center cursor-pointer font-semibold hover:text-blue-500">{e}</span>)}
            </div>
        </div>
    </div>
}
export default Project
