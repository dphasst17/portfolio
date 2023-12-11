const Contact = () => {
    const arrContact = [
        {
            url:'',
            title:'Facebook',
            colorCode:'bg-[#4789EC]'
        },
        {
            url:'https://www.linkedin.com/in/dinhphat17/',
            title:'Linkedin',
            colorCode:'bg-[#0A66C2]'
        },
        {
            url:'https://github.com/dphasst17',
            title:'Github',
            colorCode:'bg-[#131313]'
        },
        {
            url:'',
            title:'Mail',
            colorCode:'bg-[#6C788A]'
        }
    ]
    return <div id="contact" className="w-4/5 h-auto min-h-[500px] sm:min-h-[350px] flex flex-col items-center mb-10">
        <h2 className="text-white text-[38px] font-[700]">CONTACT</h2>
        <div className="items w-[95%] h-[90%] flex flex-wrap items-center justify-around">
            <div className="urlContact w-full lg:w-2/5 h-3/5 sm:h-2/4 flex flex-wrap justify-center sm:justify-between items-center">
                {arrContact.map((c,i) => <div key={i}
                    onClick={() => { c.url !== '' ? window.location.href = `${c.url}` :''}}
                    className={`w-4/5 sm:w-[49%] my-1 h-[60px] flex items-center justify-center text-[20px] text-white font-bold rounded-2xl cursor-pointer ${c.colorCode}`}>
                        {c.title}
                    </div>
                )}
            </div>
            <div className="messageContact w-full lg:w-2/4 h-3/5 sm:h-full flex flex-col justify-around">
                <div className="w-full h-[60px] flex justify-center items-center bg-white rounded-lg">
                    <input type="text" className="w-[95%] h-[55px] outline-none" placeholder="Enter your email" />
                </div>
                <div className="w-full h-2/4 flex justify-center items-center bg-white rounded-lg">
                    <textarea style={{resize:'none'}} className="w-[95%] h-4/5 outline-none" id="w3review" name="w3review" placeholder="Message..."></textarea>
                </div>
                <button className="w-[250px] h-[50px] bg-[#4789EC] text-[20px] text-white font-bold rounded-xl">Submit</button>
            </div>
        </div>
    </div>
}
export default Contact