import { useEffect, useState } from "react";
import BraveBrowser from "./browser";

const Windows = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [isBrowser, setIsBrowser] = useState(false)
    const [greet, setGreet] = useState('');
    const [hour, setHour] = useState('');
    const [min, setMin] = useState('');
    useEffect(() => {
        setTimeout(() => {setIsLoading(false)},[7000])
    },[])
    useEffect(() => {
        const timer = setInterval(() => {
            const today = new Date();
            displayGreetings(today);
            displayClock(today);
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    function displayGreetings(today) {
        const hrs = today.getHours();
        let name = '';
        let greet;
        if (hrs < 12) {
            greet = 'AM' + name;
        } else if (hrs >= 12 && hrs <= 17) {
            greet = 'PM' + name;
        } else if (hrs >= 17 && hrs <= 24) {
            greet = 'PM' + name;
        }
        setGreet(greet);
    }



    function displayClock(today) {
        let hour = padZeros(twelveHour(today.getHours()));
        let minutes = padZeros(today.getMinutes());
        let seconds = padZeros(today.getSeconds());
        if (today.getHours() >= 12) {
            seconds
        } else {
            seconds
        }

        setHour(hour);
        setMin(minutes);
    }

    function twelveHour(hour) {
        if (hour > 12) {
            return hour -= 12;
        } else if (hour === 0) {
            return hour = 12;
        } else {
            return hour;
        }
    }

    function padZeros(num) {
        if (num < 10) {
            num = '0' + num;
        }
        return num;
    }
    return <div className="window-11 relative xl:w-[85vw] h-[90vh] rounded-lg bg-slate-300 border border-solid border-slate-500 overflow-hidden">
        {isLoading && <div className="absolute z-40 w-full h-full flex flex-col items-center justify-around bg-zinc-900">
            <img src="/assets/icon/Windows-logo.png" className="w-[200px] h-[200px]" />
            <div className="inline-block h-14 w-14 animate-spin text-white rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                {/* <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span> */}
            </div>
        </div>}
        {!isLoading && <>
            <img src="/assets/windows/background.jpeg" className="w-full h-full object-cover rounded-lg" alt="" />
            <div className="flex flex-row w-full backdrop-blur-xl bg-black-dark-transparent transition-all animaTransY absolute bottom-0 rounded-b-xl justify-between py-1 z-20 select-none">
                <div id="weatherpress" className="w-[30%] flex flex-row items-center hover:bg-white-transparent ml-3 rounded py-0.5 select-none duration-500 px-2">
                    <img className="h-6 w-6" src="" alt="" />

                </div>
                <div id="taskbar-icons" className="w-2/5 flex flex-row items-center space-x-6">
                    <div id="windows-icon" className="h-full w-[50px] flex justify-center items-center  hover:bg-slate-400 duration-500 p-1.5 rounded hover:visible">
                        <img src="/assets/windows/iconTask.png" alt="Windows Icon" className="scale-90 h-14 w-14 duration-500" />
                    </div>
                    <div id="stickynotes-icon" className="h-full w-[50px] flex justify-center items-center  hover:bg-slate-400 duration-500 p-1.5 rounded hover:visible">
                        <img src="/assets/windows/msstore.png" alt="Sticky Notes" className="scale-90 h-14 w-14 duration-500" />
                    </div>
                    <div id="fileexplorer-icon" className="h-full w-[50px] flex justify-center items-center  hover:bg-slate-400 duration-500 p-1.5 rounded hover:visible">
                        <img src="/assets/windows/fileexplorer.png" alt="File Explorer" className="scale-90 h-14 w-14 duration-500" />
                    </div>
                    <div id="mail-icon" className="h-full w-[50px] flex justify-center items-center  hover:bg-slate-400 duration-500 p-1.5 rounded hover:visible">
                        <img src="/assets/windows/docker.png" alt="Mail" className="scale-90 h-14 w-14 duration-500" />
                    </div>

                    <div id="vscode-icon" className="h-full w-[50px] flex justify-center items-center  hover:bg-slate-400 duration-500 p-1.5 rounded hover:visible">
                        <img src="/assets/windows/Visual_Studio_Code_1.35_icon.svg.png" alt="VS Code" className="scale-90 h-14 w-14 duration-500" />
                    </div>
                    <div id="edge-icon" className="h-full w-[50px] flex justify-center items-center  hover:bg-slate-400 duration-500 p-1.5 rounded hover:visible">
                        <img src="/assets/windows/edge.png" alt="Edge" className="scale-90 h-14 w-14 duration-500" />
                    </div>
                    <div id="brave-icon" onClick={() => { setIsBrowser(!isBrowser) }} className={`h-full w-[50px] flex justify-center items-center ${isBrowser ? 'bg-slate-400' : 'bg-transparent'} hover:bg-slate-400 duration-500 p-1.5 rounded hover:visible`}>
                        <img src="/assets/windows/Brave_icon_lionface.png" alt="Spotify" className="scale-90 h-14 w-14 duration-500" />
                    </div>
                </div>
                <div className="flex flex-row items-center text-white mr-2 select-none">
                    <div id="appshow" className="py-2.5 hover:bg-white-transparent duration-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 15l7-7 7 7"
                            />
                        </svg>
                    </div>
                    <div
                        id="keyeng"
                        className="flex flex-col rounded px-3 py-0.5 hover:bg-white-transparent duration-500"
                    >
                        <p className="text-[0.75rem]">ENG</p>
                    </div>
                    <div
                        id="wvb"
                        className="flex flex-row hover:bg-white-transparent rounded py-3 duration-500"
                    >
                        <img src="/assets/windows/wifi.png" alt="" className="h-7 px-1.5" />
                        <img src="/assets/windows/vloume.png" alt="" className="h-7 px-1.5" />
                        <img
                            src="/assets/windows/battery.png"
                            alt=""
                            className="h-7 px-1.5"
                        />
                    </div>
                    <div
                        id="notific"
                        className="flex flex-col text-right pl-2 pr-2 py-0.5 hover:bg-white-transparent rounded duration-500"
                    >
                        <p id="time" className="text-[0.75rem]">{hour}:{min} {greet}</p>
                        <p id="date" className="text-[0.75rem]">{new Date().toISOString().split('T')[0].split('-').reverse().join('/')}</p>
                    </div>
                </div>

            </div>
            <div
                className="absolute top-0 grid grid-rows-2 gap-y-2 text-white transition-all animaTransX font-semibold ml-2 mt-4 select-none">
                <div
                    className="w-40 rounded flex flex-col items-center hover:bg-slate-600 duration-300 p-1"
                >
                    <img className="" src="/assets/windows/Trash.png" alt="" />
                    <p className="text-[8px] text-center">Recycle Bin</p>
                </div>
                <div
                    className="w-40 rounded flex flex-col items-center hover:bg-slate-600 duration-300 p-1"
                >
                    <img className="" src="/assets/windows/PC.png" alt="" />
                    <p className="text-[8px] text-center">My Computer</p>
                </div>

            </div>
        </>}
        <BraveBrowser props={{ isBrowser, setIsBrowser }} />
    </div>
}
export default Windows