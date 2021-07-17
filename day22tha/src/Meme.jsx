const Meme = ({meme})=>{
    return (
        <div className="meme">
            <img src={meme.url} alt =""/>
        </div>
    );
};


export default Meme;