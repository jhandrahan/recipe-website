import RecipeItem from "./RecipeItem";


const Results = ({ recipes }) => {
  return (
    <>
      <ul>
        {
            recipes.map((recipeObject)=>{
                return <RecipeItem key={recipeObject.id} recipeData={recipeObject}/>

            })
        }
      </ul>
    </>
  );
};
export default Results;
