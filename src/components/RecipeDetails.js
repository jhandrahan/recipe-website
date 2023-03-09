//imported libraries
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RecipeDetails = () => {
  const { uniqueId } = useParams();
  //initialize state to hold data from API
  const [recipeInfo, setRecipeInfo] = useState({});

  //side effect which will run once after component mounted
    // to request recipe details and save returned data within state 
  useEffect(() => {
    axios({
      url: `https://api.spoonacular.com/recipes/${uniqueId}/information`,
      params: {
        apiKey: "838dac08d2a84ba4b8fbc3cbf41c93dd",
      },
    }).then((recipeInfo) => {
      setRecipeInfo(recipeInfo.data);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="wrapper">
      <Link to="/">
        <button className="backBtn">Back to Homepage</button>
      </Link>
      <h1 className="recipeDetailPageTitle">{recipeInfo.title}</h1>
      <div className="imageContainer">
        <img
          src={`https://spoonacular.com/recipeImages/${recipeInfo.id}-556x370.jpg`}
          alt={`This dish is ${recipeInfo.title}`}
        />
      </div>
      <ul className="healthyInfo">
        <li>
          <p>{`⭐️ Dairy Free: ${recipeInfo.dairyFree} `}</p>
        </li>
        <li>
          <p>{` ⭐️ Vegan: ${recipeInfo.vegan} `}</p>
        </li>
        <li>
          <p>{` ⭐️ Gluten Free: ${recipeInfo.glutenFree} `}</p>
        </li>
      </ul>
      <div className="textContainer">
        <div className="ingredientContainer">
          <h2>Ingredients</h2>
          <ul>
            {recipeInfo.extendedIngredients &&
              recipeInfo.extendedIngredients.map(({ id, original }) => (
                <li key={id}>{original}</li>
              ))}
          </ul>
        </div>

        <div className="instructionContainer">
          <h2>Instructions</h2>
          <p dangerouslySetInnerHTML={{ __html: recipeInfo.instructions }}></p>
        </div>
      </div>
    </section>
  );
};

export default RecipeDetails;
