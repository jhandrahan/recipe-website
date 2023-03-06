const RecipeItem = ({ recipeData }) => {
    return(
        <li>
            <h2>{recipeData.title}</h2>
            <img src={recipeData.image} alt={recipeData.title} />

        </li>
    )
}

export default RecipeItem;