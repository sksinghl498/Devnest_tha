import './style.css';
import img1 from './images/meme.jpg';
function Card(){
   return(
       <div className="container">
       <img src={img1} alt="meme_images"/>
       <h1>Hello</h1>
       <h2>This is meme card</h2>
       </div>
   );
}

export default Card;