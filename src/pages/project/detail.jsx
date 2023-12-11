import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StateContext } from '../../context/stateContext';
const ProjectDetail = () => {
    const { project } = useContext(StateContext)
    let { id } = useParams();
    const [data, setData] = useState(null);
    useEffect(() => {
        project !== null && setData(project.filter(p => p.id === id)[0])
    }, [id, project])
    return data !== null && <div className="project-detail w-4/5 h-auto mx-auto flex flex-wrap justify-center items-center my-10">
        <div className="title w-full flex flex-col items-center">
            <h1 className="text-[30px] xl:text-[50px] text-white font-bold my-10">{data !== null && data.nameProject}</h1>
            <h2 className="text-[20px] text-white font-semibold">{data !== null && `${data.startDay} - ${data.endDay}`}</h2>
        </div>
        <div className="background w-full h-auto"><img src={`${data.background}`} className="w-full object-contain rounded-lg" alt="background-project" /></div>
        <div className="description w-full h-auto text-white text-[20px] font-semibold my-10">{data !== null && data.description}</div>
        <div className="technology w-full">
            <h2 className="text-[30px] text-red-400 font-semibold text-center">Technology</h2>
            <span className="text-[25px] text-red-100 font-semibold">
                <br />- Front-end:{data?.technology?.frontend?.map((f, i) => i < data?.technology?.frontend.length - 1 ? ` ${f},` : ` ${f}.`)}
                <br />- Back-end:{data?.technology?.backend?.map((f, i) => i < data?.technology?.backend.length - 1 ? ` ${f},` : ` ${f}.`)}
            </span>
        </div>
        <div className="feature w-full">
            <h2 className="text-[30px] text-red-400 font-semibold text-center">Feature</h2>
            <span className="text-[25px] text-red-100 font-semibold">
                <br /><span className="text-blue-400">- User</span>:{data?.feature?.user?.map((f, i) => [<br key={i} />, `+ ${f}`])}
                <br /><span className="text-blue-400">- Admin</span>:{data?.feature?.admin?.map((f, i) => [<br key={i} />, `+ ${f}`])}
            </span>
        </div>
        <div className="github w-full flex flex-col">
            <h2 className="text-[30px] text-red-400 font-semibold text-center">Github</h2>
            <br />
            {data?.urlGit?.map((g, i) => <span className="text-[25px] text-red-100 font-semibold" key={i}>
                - {g.name.toUpperCase()}&nbsp;: &nbsp;<div className="text-white hover:text-blue-500 overflow-hidden whitespace-normal transition-all" onClick={() => {window.location.href=`${g.url}`}} >{g.url}</div>
            </span>)}
        </div>
        <div className="deploy w-full flex flex-col">
            <h2 className="text-[30px] text-red-400 font-semibold text-center">Deploy</h2>
            <br />
            {data?.deploy?.map((g, i) => <span className="text-[25px] text-red-100 font-semibold" key={i}>
                - {g.name.toUpperCase()}&nbsp;: &nbsp;<a>{g.deploy}</a>
            </span>)}
        </div>
        <div className="deploy w-full flex flex-col">
            <h2 className="text-[30px] text-red-400 font-semibold text-center">Url Project</h2>
            <br />
            {data?.urlProject?.map((g, i) => <span className="text-[25px] text-red-100 font-semibold" key={i}>
                - {g.name.toUpperCase()}&nbsp;: &nbsp;<a className="text-white hover:text-blue-500 transition-all" href={`${g.url}`}>{g.url}</a>
            </span>)}
        </div>
        <div className="deploy w-full flex flex-col">
            <h2 className="text-[30px] text-red-400 font-semibold text-center">Image Project</h2>
            <div className="imageDetail w-full h-auto flex flex-wrap justify-around">
                {data?.imgProject?.map((e,i) => <img src={`${e.url}`} className={`${i === 0 ? 'w-full' :'w-[25%]'} m-2 object-contain`} key={i} />)}
            </div>
        </div>
    </div>
}
export default ProjectDetail