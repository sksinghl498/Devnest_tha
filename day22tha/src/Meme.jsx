import { useState } from "react";

const Meme = ({meme,setMeme})=>{
    const [form,setForm]=useState({
        template_id: meme.id,
        username: "sksinghl498",
        password: "sksinghl498",
        boxes: [],
    });
    const generateMeme = ()=>{
        console.log(form);
    };
    return (
        <div className="meme">
            <img src={meme.url} alt =""/>
            <div>
                {
                    [...Array(meme.box_count)].map((_,index)=>(
                        <input 
                        key ={index}
                        type="text" placeholder={`Meme caption ${index}`} 
                            onChange= {(e)=>{
                                const newBoxes = form.boxes;
                                newBoxes[index]= {text: e.target.value};
                                setForm({...form, boxes: newBoxes})
                            }}
                        />
                    ))
                }
            </div>
            <div>
                <button onClick={generateMeme}>Generate Meme</button>
                <button onClick={()=>{
                    setMeme(null);
                }}>Choose Template</button>
            </div>
        </div>
    );
};


export default Meme;