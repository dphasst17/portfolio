import { useContext, useState } from "react"
import { StateContext } from "../../context/stateContext";
import { useNavigate } from "react-router-dom";
const Project = () => {
    const { project } = useContext(StateContext);
    const navigate = useNavigate();
    const [listUrl, setListUrl] = useState(null);
    const [isShow, setIsShow] = useState(false)
    return <div id="project" className="w-[80vw] h-auto flex flex-wrap justify-center rounded-3xl my-10">
        <h2 className="w-full text-center text-white text-[38px] font-[700]">PROJECT</h2>
        <div className="items w-full h-auto flex flex-wrap justify-center xl:justify-start">
            {project !== null && project.map(p => <div className={`${project !== null ? 'w-full md:w-4/5 xl:w-[48%]' : 'w-0'}  min-h-[500px] sm:min-h-[200px] flex flex-wrap justify-center m-2 p-2 bg-[#423F3F] rounded-lg cursor-pointer transition-all`} key={p.id}>
                <div onClick={() => { navigate(`/project/${p.id}/${p.nameProject}`) }} style={{ backgroundImage: `url(${p.background})`, backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%' }} className="background w-full sm:w-1/4 h-2/4 sm:h-full "></div>
                <div className="info w-full sm:w-3/4 h-auto min-h-[200px] sm:min-h-0 sm:h-full flex flex-wrap justify-center">
                    <div onClick={() => { navigate(`/project/${p.id}/${p.nameProject}`) }} className="name w-full h-auto text-white text-[22px] flex items-center justify-center font-bold">{p.nameProject}</div>
                    <div className="description w-4/5  hidden sm:flex justify-center text-white font-semibold">{p.description.slice(0, 235) + '...'}</div>
                    <div className="btnProject w-4/5 flex flex-wrap justify-between text-white font-semibold">
                        <button onClick={() => { window.open(`/project/${p.id}/${p.nameProject}`, '_blank') }} className="w-full h-[30px] bg-cyan-950 my-2 text-[20px] font-bold rounded-lg">Detail</button>
                        <button onClick={() => { setListUrl(p.urlProject.flatMap(e => e.url), !isShow ? setIsShow(true) : '') }} className="w-[48%] h-[30px] bg-red-500 my-2 rounded-lg">Live Preview</button>
                        <button onClick={() => { setListUrl(p.urlGit.flatMap(e => e.url), !isShow ? setIsShow(true) : '') }} className="w-[48%] h-[30px] bg-slate-500 my-2 rounded-lg">Github</button>
                    </div>
                </div>
            </div>)}
            <div className={`fixed ${isShow ? 'w-[30vw]' : 'w-0'} flex flex-wrap justify-center bg-gray-900 rounded-lg text-white font-regular bottom-[6vw] left-1/2 transform -translate-x-1/2 transition-all overflow-hidden`}>
                <span className="w-full ml-2 font-bold cursor-pointer hover:text-red-500" onClick={() => { setIsShow(false) }}>X</span>
                {listUrl !== null && listUrl.map((e, i) => <span onClick={() => { window.open(e); }} key={i} className="w-full flex justify-center cursor-pointer font-semibold hover:text-blue-500">{e}</span>)}
            </div>
        </div>
    </div>
}
export default Project
