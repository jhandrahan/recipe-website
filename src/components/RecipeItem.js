import { Link } from "react-router-dom";

//used props to pass down data from API
const RecipeItem = ({ recipeData }) => {
  return (
    <li className="itemContainer">
      <Link to={`/recipeData/${recipeData.id}`}>
        <h2>{recipeData.title}</h2>
        <img src={recipeData.image} alt={recipeData.title} />
      </Link>
    </li>
  );
};

export default RecipeItem;
