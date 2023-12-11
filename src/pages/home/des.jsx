import { useEffect, useState } from "react";

const Des = () => {
    const finalText = 'FRONTEND';
    const finalText2 = 'DEVELOPER'
    const possibleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const [text, setText] = useState(Array(finalText.length).fill(' '));
    const [text2,setText2] = useState(Array(finalText2.length).fill(' '));

    useEffect(() => {
        const interval = setInterval(() => {
            setText((oldText) => {
                const newText = [...oldText]; // Tạo một bản sao của mảng cũ
                for (let i = 0; i < newText.length; i++) {
                    if (newText[i] !== finalText[i]) { // Nếu ký tự hiện tại không phải là ký tự đích
                        newText[i] = possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length)); // Thay thế nó bằng một ký tự ngẫu nhiên
                    }
                }
                return newText;
            });
            setText2((oldText) => {
                const newText = [...oldText]; // Tạo một bản sao của mảng cũ
                for (let i = 0; i < newText.length; i++) {
                    if (newText[i] !== finalText2[i]) { // Nếu ký tự hiện tại không phải là ký tự đích
                        newText[i] = possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length)); // Thay thế nó bằng một ký tự ngẫu nhiên
                    }
                }
                return newText;
            });
        }, 50);

        return () => clearInterval(interval);
    }, []);
    return <div className="Role w-full h-auto flex flex-col justify-center items-center">
        <div className="items w-full xl:w-3/5 h-auto min-h-[150px] flex justify-center items-center">
            <div className="FrontEnd w-3/5 text-center text-zinc-300 text-[6vw] sm:text-[5vw] lg:text-[5vw] font-bold font-['Montserrat'] animateText">{text.join('')}</div>
            <img className="ReactIcon w-[15%] lg:w-[10%] h-40 object-contain" src="/assets/icon/reactIcon.png" />
            <img className="MysqlIcon w-[15%] lg:w-[10%] h-40 object-contain mx-4 rounded-lg" src="/assets/icon/tailwindIcon.png" />

        </div>
        <div className="items w-full lg:w-3/5 h-auto min-h-[150px] flex flex-row-reverse justify-center items-center">
            <div className="Developer w-3/5 text-center text-neutral-400 text-[6vw] sm:text-[5vw] lg:text-[5vw] font-bold font-['Montserrat'] mx-2 animateText">{text2.join('')}</div>
            <img className="TailwindIcon w-[15%] lg:w-[10%] h-40 object-contain mx-2" src="/assets/icon/mysqlIcon.png" />
        </div>
    </div>
}
export default Des