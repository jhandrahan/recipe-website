//imported libraries
import { useState } from "react";
import axios from "axios";
import Results from "./Results";


const Form = () => {
  //initialize state
  const [recipes, setRecipes] = useState([]);
  const [userInput, setUserInput] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [recipePages, setRecipePages] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setUserInput("");
    setLoading(true);
    setRecipePages(false);

    axios({
      baseURL: "https://api.spoonacular.com/recipes/complexSearch",
      params: {
        apiKey: "dbce9eabfd0f437dbcce1553dc251387",
        query: userInput,
        number: 50,
        addRecipeInformation: true,
      },
    }).then((apiData) => {
      setRecipes(apiData.data.results);
      setLoading(false);
      setRecipePages(true);

      if(apiData.data.results.length === 0){
        setError(true);
      }else{
        setError(false);
      }
    });
  };

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <>
      <div className="wrapper">
        <form
          action=""
          onSubmit={(event) => {
            handleClick(event, userInput);
          }}
        >
          <label htmlFor="search"></label>
          <input
            onChange={handleChange}
            value={userInput}
            type="text"
            placeholder="pie, pasta, etc"
          />
          <button className="searchBtn">Search</button>
        </form>
        <Results recipes={recipes} loading={loading} error={error} recipePages={recipePages}/>
      </div>
    </>
  );
};

export default Form;
