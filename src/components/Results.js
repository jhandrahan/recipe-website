import RecipeItem from "./RecipeItem";

const Results = ({ recipes, loading, error }) => {
  if(loading){
    return <h2>Loading...</h2>
  }
  return (
    <>
      <ul className="recipeGallery">
        {error ? (
          <p>Hmmm... No Recipes Found. Try again with some diffrent key words.</p>
        ) : (
            recipes.map((recipeObject)=>{
                return <RecipeItem key={recipeObject.id} recipeData={recipeObject}/>
            })
        )}
      </ul>
    </>
  );
};
export default Results;
