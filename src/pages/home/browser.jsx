import { IoMdClose } from "react-icons/io";
import { GoChevronLeft,GoChevronRight  } from "react-icons/go";
import { AiOutlineReload } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { FaRegWindowRestore } from "react-icons/fa6";
import { GoDash } from "react-icons/go";
import { HiUserCircle } from "react-icons/hi";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { BsLayoutSidebarInsetReverse } from "react-icons/bs";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { VscJson } from "react-icons/vsc";
import { StateContext } from "../../context/stateContext";
const BraveBrowser = ({props}) => {
    const {project} = useContext(StateContext)
    const [data,setData] = useState(null)
    useEffect(() => {
        project !== null && setData(project.flatMap(e =>
            e.url.map(u => {
                return { ...u, icon: e.icon }
            })
        )
        )
    }, [project])
    const [tab,setTab] = useState([{
        id:1,
        icon:'',
        url:'',
        title:''
    }])
    const [tabDefault,setTabDefault] = useState(1);
    const [url,setUrl] = useState('')
    const closeBrowser = () => {
        setTab([{
            id:1,
            icon:'',
            url:'',
            title:''
        }])
        props.setIsBrowser(false)
    }
    const closeTab = (e) => {
        if(tab.length === 1){
            setTab([{
                id:1,
                icon:'',
                url:'',
                title:''
            }])
            props.setIsBrowser(false)
            return
        }
        if(e === tabDefault &&  e === tab.length){
            setTabDefault(e)
           
        }
        if(e === tabDefault && e < tab.length) {
            setTabDefault(e)
        }
        setTab(tab.filter(f => f.id !== e).map(t => {
            return {
                ...t,
                id: t.id > e ? t.id - 1 : t.id,
                url:t.id > e ?  `new tab ${t.id - 1}`:t.url
            }
        }))
    }
    const addTab = () => {
        setTabDefault(tab.length + 1)
        setTab([...tab,{
            id:tab.length + 1,
            icon:'',
            url:"",
            title:''
        }])
    }
    const changeUrl = (url) => {
        setTab(tab.map(e => {
            return {
                ...e,
                url : e.id === tabDefault ? url : e.url
            }
        }))
    }
    const handleChange = (value) => {
        setUrl(value)
    }
    useEffect(() => {
        if(tabDefault > tab.length){
            setTabDefault(tab.length)
        }
        setUrl(tab.filter(f => f.id === tabDefault).flatMap(e => e.url))
    },[tabDefault,tab])
    return <div className={`brave ${props.isBrowser ? ' w-full h-[95%]' : 'w-0 h-0'} start-0 top-0 overflow-hidden transition-all bg-[#202124] absolute rounded-t-lg`}>
        <nav className="navBrave w-full h-[4%] flex justify-between bg-zinc-900 px-1 py-1 rounded-t-lg">
            <div className="w-[85%] h-full flex px-1">
                {tab.map(e => <div onClick={() => {setTabDefault(e.id)}} className={`w-[15%] h-[90%] flex justify-between items-center cursor-default px-2 ${e.id === tabDefault ? 'bg-slate-600 rounded-md' : 'border-r border-solid border-slate-500'} mx-1 transition-all`} key={e.id}>
                    <div className="icon w-[10%]">
                        {e.icon !== "" && <img src={`/assets/icon/${e.icon}-logo.png`} />}
                    </div>
                    <div className="title w-[85%] text-white font-medium">{e.title !== "" ? e.title : "New tab"}</div>
                    <div onClick={() => {closeTab(e.id)}} className="close w-[5%] text-white flex items-center"><IoMdClose /></div>
                </div>)}
                <div onClick={addTab} 
                    className="addTab w-[25px] h-[90%] flex items-center justify-center text-[20px] cursor-default text-white hover:bg-slate-600 rounded-lg mx-1 transition-all">
                    +
                </div>
            </div>
            <div className="btn w-[10%] h-full flex  justify-around">
                <div className="w-1/5 h- flex justify-center items-center rounded-lg hover:bg-zinc-800"><GoDash className="text-[20px] text-white"/></div>
                <div className="w-1/5 h- flex justify-center items-center rounded-lg hover:bg-zinc-800"><FaRegWindowRestore className="text-[12px] text-white "/></div>
                <div onClick={closeBrowser} className="w-1/5 h- flex justify-center items-center rounded-lg hover:bg-red-600"><IoMdClose className=" text-[20px] text-white"/></div>
            </div>
        </nav>
        <div className="content w-full h-[6%] flex flex-wrap justify-between bg-zinc-700 p-1">
            <div className="urlIcon w-[8%] h-2/4 flex items-center justify-around pt-1">
                <GoChevronLeft className="h-full w-1/5 text-white hover:bg-slate-600 rounded-lg "/>
                <GoChevronRight className="h-full w-1/5 text-white hover:bg-slate-600 rounded-lg "/>
                <AiOutlineReload className="h-full w-1/5 text-white hover:bg-slate-600 rounded-lg"/>
            </div>
            <input onKeyDown={(e) => {e.key === 'Enter' && changeUrl(e.target.value)}} onChange={(e) => {handleChange(e.target.value)}} className="w-[75%] h-[55%] bg-zinc-900 text-white rounded-lg px-2 py-1 outline-none" type="text" value={url} placeholder="Search on google or enter a url"/>
            <div className="urlIcon w-[15%] h-2/4 flex ">
                <div className="w-2/4 h-full flex justify-end">
                    <VscJson className="w-[33%] text-[25px] text-yellow-500 cursor-pointer hover:bg-zinc-800 rounded-lg p-1" />
                    <FaReact className="w-[33%] text-[25px] text-blue-500 cursor-pointer hover:bg-zinc-800 rounded-lg p-1" />
                    <IoExtensionPuzzleOutline className="w-[33%] text-[25px] text-white cursor-pointer hover:bg-zinc-800 rounded-lg p-1" />
                </div>
                <div className="w-2/4 h-full flex justify-around items-center">
                    <BsLayoutSidebarInsetReverse className="w-[33%] text-[25px] text-white cursor-pointer hover:bg-zinc-800 rounded-lg p-1"/>
                    <HiUserCircle className="w-[33%] text-[25px] text-white cursor-pointer hover:bg-zinc-800 rounded-lg p-1"/>  
                    <HiOutlineDotsVertical className="w-[33%] text-[25px] text-white cursor-pointer hover:bg-zinc-800 rounded-lg p-1"/>
                </div>
            </div>
            <div className="w-full h-2/5 text-white mt-1 flex">
                {data !== null && data.map(e => <div 
                onClick={() => {setTab(tab.map(
                    t => {
                        return {
                            ...t,
                            title:t.id === tabDefault ? e.name:t.title,
                            icon:t.id === tabDefault ? e.icon:t.icon,
                            url:t.id === tabDefault ? e.url:t.url,
                        }
                    }
                ))}}
                className="h-full w-[10%] flex items-center hover:bg-slate-600 mx-2 px-2 rounded-lg cursor-pointer" key={e.name}>
                    <img className="w-[15px] object-contain mr-2" src={`/assets/icon/${e.icon}-logo.png`} />
                    <span className="whitespace-nowrap overflow-hidden text-ellipsis">{e.name}</span>
                </div>)}
                
            </div>
        </div>
        <div className="content w-full h-[90%]">
            {url !== '' && <iframe className="w-full h-full" src={tab.filter(f => f.id === tabDefault).flatMap(e => e.url)} title=""></iframe>}
        </div>
    </div>
}
export default BraveBrowser