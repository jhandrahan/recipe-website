import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; 

const RecipeDetails = () => {
    // 2f4e7cc2e89b435f9ca2a22c6b368c9b
    const urlData = useParams();
    console.log(urlData)

    const { uniqueId } = useParams();
    const [ recipeInfo, setRecipeInfo ] = useState({});

    useEffect(()=>{
        axios({
          url: `https://api.spoonacular.com/recipes/${uniqueId}/information`,
          params: {
            apiKey: "2f4e7cc2e89b435f9ca2a22c6b368c9b",
          },
        }).then((recipeInfo) => {
          setRecipeInfo(recipeInfo.data);
        });
    }, []);

    return (
      <section className="wrapper">
        <Link to="/"><button className="backBtn">Back to Homepage</button></Link>
        <h1>{recipeInfo.title}</h1>
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

          <div className="indgredientContainer">
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
            <p
              dangerouslySetInnerHTML={{ __html: recipeInfo.instructions }}
            ></p>
          </div>

        </div>
      </section>
    );
}

export default RecipeDetails;