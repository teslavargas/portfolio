import developer from "../svg/developer.svg";
import "animate.css";
import '../App.css'; 

export const Home = () => {
  return (
      <div className="container">
      <div className="hi animate__animated animate__bounceInLeft">

        <div className="presentation">
          <h1>Joel Vargas</h1>
          <h2>Frontend Developer</h2>
        </div>
        <div className="developer">
          <img src={developer}/>
        </div>
      </div>
    </div>
  );
};
