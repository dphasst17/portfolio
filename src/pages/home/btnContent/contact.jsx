import "../home.scss"
const Contact = () => {
    return <div className="contact h-auto min-h-[480px] overflow-x-auto">
        <div className="w-1/4 h-[38px] textNoWrap textEffect animaDelay-0s">
            <span className="text-white text-3xl font-bold font-['Mplus 1p Bold']"> </span>
            <span className="text-amber-400 text-3xl font-bold font-['Mplus 1p Bold']">
                {'.Contact {'} <br /> 
            </span>
        </div>
        <div className="w-2/4 h-[38px] textNoWrap textEffect animaDelay-0-5s">
            <span className="text-amber-400 text-3xl font-bold font-['Mplus 1p Bold']">&nbsp;&nbsp;&nbsp;{'.linkedin'} </span>
            <span className="text-fuchsia-800 text-3xl font-bold font-['Mplus 1p Bold']">{'{'}<br /></span>
        </div>
        <div className="w-2/4 h-[38px] textNoWrap textEffect animaDelay-1s">
            <span className="text-amber-400 text-3xl font-bold font-['Mplus 1p Bold']"></span>
            <span className="text-[#79c0ff] text-3xl font-bold font-['Mplus 1p Bold']">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background</span>
            <span className="text-amber-400 text-3xl font-bold font-['Mplus 1p Bold']">: </span>
            <span className="text-fuchsia-800 text-3xl font-bold font-['Mplus 1p Bold']">url</span>
            <span className="text-amber-400 text-3xl font-bold font-['Mplus 1p Bold'] cursor-pointer" onClick={() => {window.location.href = "https://www.linkedin.com/in/dinhphat17/"}}>(‘https://www.linkedin.com/in/dinhphat17/’);<br /> </span>
        </div>
        
        <div className="w-2/4 h-[38px] textNoWrap textEffect animaDelay-1-5s"><span className="text-fuchsia-800 text-3xl font-bold font-['Mplus 1p Bold']">&nbsp;&nbsp;&nbsp;{'}'}<br /></span></div>
        {/* <span className="text-amber-400 text-3xl font-bold font-['Mplus 1p Bold']">&nbsp;&nbsp;&nbsp;.facebook </span>
        <span className="text-fuchsia-800 text-3xl font-bold font-['Mplus 1p Bold']">{'{'}<br /></span>
        <span className="text-amber-400 text-3xl font-bold font-['Mplus 1p Bold']">
        </span>
        <span className="text-[#79c0ff] text-3xl font-bold font-['Mplus 1p Bold']"
        >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background</span>
        <span className="text-amber-400 text-3xl font-bold font-['Mplus 1p Bold']"
        >:</span>
        <span className="text-fuchsia-800 text-3xl font-bold font-['Mplus 1p Bold']"
        >url</span>
        <span className="text-amber-400 text-3xl font-bold font-['Mplus 1p Bold']"
        >(‘https://www.facebook.com/dfasst5’);<br /> </span>
        <span className="text-fuchsia-800 text-3xl font-bold font-['Mplus 1p Bold']"
        >&nbsp;&nbsp;&nbsp;{'}'}<br /></span> */}
        <div className="w-2/4 h-[38px] textNoWrap textEffect animaDelay-2s">
            <span className="text-amber-400 text-3xl font-bold font-['Mplus 1p Bold']">&nbsp;&nbsp;&nbsp;.github </span>
            <span className="text-fuchsia-800 text-3xl font-bold font-['Mplus 1p Bold']"
            >{'{'}<br /></span>
        </div>
        <div className="w-2/4 h-[38px] textNoWrap textEffect animaDelay-2-5s">
            <span className="text-[#79c0ff] text-3xl font-bold font-['Mplus 1p Bold']"
            >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;background</span>
            <span className="text-amber-400 text-3xl font-bold font-['Mplus 1p Bold']"
            >:</span>
            <span className="text-fuchsia-800 text-3xl font-bold font-['Mplus 1p Bold']"
            >url</span>
            <span className="text-amber-400 text-3xl font-bold font-['Mplus 1p Bold'] cursor-pointer" onClick={() => {window.location.href = "https://github.com/dphasst17"}}
            >(‘https://github.com/dphasst17’);<br /> </span>
        </div>
        <div className="w-2/4 h-[38px] textNoWrap textEffect animaDelay-3s">
            <span className="text-fuchsia-800 text-3xl font-bold font-['Mplus 1p Bold']"
            >&nbsp;&nbsp;&nbsp;{'}'}</span>
        </div>
        <div className="w-2/4 h-[38px] textNoWrap textEffect animaDelay-3-5s">
            <span className="text-amber-400 text-3xl font-bold font-['Mplus 1p Bold']">{'}'}</span>
        </div>
    </div>
}
export default Contact