//imported libraries
import RecipeItem from "./RecipeItem";
import { useState, useEffect } from "react";

//passed down props
const Results = ({ recipes, loading, error, recipePages }) => {
  //initialized a piece of state to create pagination
  const [recipeCounter, setRecipeCounter] = useState(0);
  const [disable, setDisable] = useState(true);

  //handle click function for the Next Button for pagination
  const handleNextClick = () => {
    if (recipeCounter < recipes.length - 5) {
      setRecipeCounter(recipeCounter + 5);
    }
  };

  //handle click function for the Back Button for pagination
  const handleBackClick = () => {
    if (recipeCounter !== 0) {
      setRecipeCounter(recipeCounter - 5);
    }
  };
  //used math method to round up page numbers
  const resultPageNumber = () => {
    if (recipes.length > 5) {
      return Math.ceil(recipes.length / 5);
    } 
  };

  //disable back button
  useEffect(() => {
    if (recipeCounter === 0) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [recipeCounter]);

  //conition for page load
  if (loading) {
    return <h2>Loading...</h2>;
  }
  //error handling
  //using slice method to create pagination
  //map method to create recipe object
  //Next and Back Button ternary to appear when needed
  return (
    <>
      <ul className="recipeGallery">
        {error ? (
          <p>
            Hmmm... No Recipes Found. Try again with some diffrent key words.
          </p>
        ) : (
          recipes
            .slice(recipeCounter, recipeCounter + 5)
            .map((recipeObject) => {
              return (
                <RecipeItem key={recipeObject.id} recipeData={recipeObject} />
              );
            })
        )}
      </ul>

      {recipePages ? (
        <div className="paginationContainer">
          {disable ? (
            <button className="paginationBtn" onClick={handleBackClick}>
              Back
            </button>
          ) : null}
          <span>{recipeCounter / 5 + 1}</span>of
          <span>{resultPageNumber()}</span>
          
          <button className="paginationBtn" onClick={handleNextClick}>
            Next
          </button>
        </div>
      ) : null}
    </>
  );
};
export default Results;
