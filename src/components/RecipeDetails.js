import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const RecipeDetails = () => {
    
    const urlData = useParams();
    console.log(urlData)

    const { uniqueId } = useParams();
    const [ recipeInfo, setRecipeInfo ] = useState({});

    useEffect(()=>{
        axios({
          url: `https://api.spoonacular.com/recipes/${uniqueId}/information`,
          params: {
            apiKey: "dbce9eabfd0f437dbcce1553dc251387",
          },
        }).then((recipeInfo) => {
          console.log(recipeInfo.data);
          setRecipeInfo(recipeInfo.data);
        });
    }, []);

    return (
      <>
        <h2>{recipeInfo.title}</h2>
        <img
          src={`https://spoonacular.com/recipeImages/${recipeInfo.id}-556x370.jpg`}
          alt={`This dish is ${recipeInfo.title}`}
        />
        <ul className="healthyInfo">
          <li>
            <p>{`Dairy Free: ${recipeInfo.dairyFree}`}</p>
          </li>
          <li>
            <p>{`Vegan: ${recipeInfo.vegan}`}</p>
          </li>
          <li>
            <p>{`Gluten Free: ${recipeInfo.glutenFree}`}</p>
          </li>
        </ul>
        <h3>Ingredients</h3>

        <h3>Instructions</h3>
        <p dangerouslySetInnerHTML={{ __html: recipeInfo.instructions }}></p>
      </>
    );
}

export default RecipeDetails;