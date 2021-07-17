const Meme = ({meme,setMeme})=>{
    return (
        <div className="meme">
            <img src={meme.url} alt =""/>
            <div>
                {
                    [...Array(meme.box_count)].map((_,index)=>(
                        <input type="text" placeholder={`Meme caption ${index}`}/>
                    ))
                }
            </div>
            <div>
                <button>Generate Meme</button>
                <button onClick={()=>{
                    setMeme(null);
                }}>Choose Template</button>
            </div>
        </div>
    );
};


export default Meme;