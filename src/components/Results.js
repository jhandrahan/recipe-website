import RecipeItem from "./RecipeItem";
import { useState } from "react";

const Results = ({ recipes, loading, error, recipePages }) => {
  const [pageCounter, setPageCounter] = useState(0)

  const handleNextClick = () => {
    if(pageCounter < recipes.length - 5 ){
     setPageCounter(pageCounter + 5);  
    }
  }

  const handleBackClick = () => {
    if(pageCounter !== 0){
     setPageCounter(pageCounter - 5);
    }
  }

  if(loading){
    return <h2>Loading...</h2>
  }
  return (
    <>
      <ul className="recipeGallery">
        {error ? (
          <p>
            Hmmm... No Recipes Found. Try again with some diffrent key words.
          </p>
        ) : (
          recipes.slice(pageCounter, pageCounter + 5).map((recipeObject) => {
            return (
              <RecipeItem key={recipeObject.id} recipeData={recipeObject} />
            );
          })
        )}
      </ul>
      {recipePages ? (
        <div className="paginationContainer">
          <button className="paginationBtn" onClick={handleBackClick}>
            Back
          </button>
          <span>{pageCounter / 5 + 1}</span>of<span>{recipes.length / 5}</span>
          <button className="paginationBtn" onClick={handleNextClick}>
            Next
          </button>
        </div>
      ) : null}
    </>
  );
};
export default Results;
