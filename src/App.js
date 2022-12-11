import React from "react";
import "./App.css";
  
import Posts from "./components/Posts/Posts";
import background from './resources/newworld.webp';

  
const App = () => {
  return (
    <div  className="main-container"> {/*style={{ backgroundImage: `url(${background})` }}*/}
      <div className="heading-spacer">
        <div className="heading-container">
          <h1 className="main-heading">
            Bring Your Models To Life With Artisan Skill
          </h1>
        </div>
      </div>
      
      <div className="Ben-Info-Spacer">
        <div className="Ben-Info">
          <p className="body">
          Good day! My name is Benji, I have been a full time commission painter for 2 years. 
          I initially got into painting playing Warhammer, but as my passion evolved i started getting more involved 
          with the artistic aspect, I expanded my reach to other fantasy and sci-fi miniatures. I have been getting involved 
          in painting competitions, and have even produced award winning work! Today, I paint armies for clients overseas and locally, extending my passion 
          for gaming and painting to every miniature I paint.
          </p>

          <p className="body">
          Contact: lordhunterwolf@gmail.com
          </p>
        </div>
      </div>

      <Posts />

      <div className="Ben-Info-Spacer">
        <div className="Ben-Info">
          <p className="body">
          The price for each contract depends on the complexity of the model, the desired paint job, 
          and the quanity and size of the figures to be painted. To get an idea of what your commision would cost, reach
          out to me at: lordhunterwolf@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};
  
export default App;