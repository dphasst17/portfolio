import { useEffect, useState } from "react"
import { AiTwotoneThunderbolt } from "react-icons/ai";

const Battery = () => {
    const [batteryLevel, setBatteryLevel] = useState(0);
    const [charging, setCharging] = useState(true);
    useEffect(() => {
        navigator.getBattery()
            .then(battery => {
                setBatteryLevel(battery.level * 100)
                setCharging(battery.charging)
                battery.addEventListener('chargingchange', () => {
                    setCharging(battery.charging);
                });
    
                battery.addEventListener('levelchange', () => {
                    setBatteryLevel(battery.level * 100);
                });
            })
    }, [])
    return <div className="w-2/4 flex flex-wrap justify-center">
        <div className="w-[187px] flex justify-center">
            <div className="shadow w-[93.5px] rounded border-2 border-gray-400 flex my-1 relative">
                <div
                    className="border-r-8 h-6 rounded-r absolute flex border-gray-400 ml-40 mt-2 z-10"></div>
                <div
                    className="cursor-default w-full bg-green-400 text-xs font-bold leading-none flex items-center justify-center m-1 py-4 text-center text-white"
                >
                    <div  className="absolute flex items-center justify-center left-0 mx-8 text-gray-700">
                        {batteryLevel}%
                        {charging && <AiTwotoneThunderbolt className="text-[18px]" />}
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
}
export default Battery