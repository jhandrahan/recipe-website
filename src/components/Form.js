//imported libraries
import { useState } from "react";
import axios from "axios";
import Results from "./Results";

const Form = () => {
  //initialized state
  const [recipes, setRecipes] = useState([]);
  const [userInput, setUserInput] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [recipePages, setRecipePages] = useState(false);
  const [cuisine, setCuisine] = useState("");

  //created a function to call the API onclick
  const handleClick = (event) => {
    event.preventDefault();
    setUserInput("");
    setLoading(true);
    setRecipePages(false);

    axios({
      baseURL: "https://api.spoonacular.com/recipes/complexSearch",
      params: {
        apiKey: "838dac08d2a84ba4b8fbc3cbf41c93dd",
        query: userInput,
        number: 50,
        addRecipeInformation: true,
        cuisine: cuisine,
      },
    }).then((apiData) => {
      setRecipes(apiData.data.results);
      setLoading(false);
      setRecipePages(true);

      if (apiData.data.results.length === 0) {
        setError(true);
        setRecipePages(false);
      } else {
        setError(false);
      }
    });
  };

  //created a function to save user input
  const handleChange = (event) => {
    setUserInput(event.target.value);
  };
  const cuisineSelection = (event) => {
    setCuisine(event.target.value);
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
          <label htmlFor="search" className="sr-only">search for a kind of food</label>
          <input
            onChange={handleChange}
            value={userInput}
            type="text"
            placeholder="pie, pasta, etc"
          />
          <select defaultValue={" "} onChange={cuisineSelection}>
            <option value=" ">All Cuisine Types</option>
            <option value="american">American</option>
            <option value="french">French</option>
            <option value="greek">Greek</option>
            <option value="italian">Italian</option>
            <option value="thai">Thai</option>
            <option value="indian">Indian</option>
          </select>
          <button className="searchBtn">Search</button>
        </form>
        <Results
          recipes={recipes}
          loading={loading}
          error={error}
          recipePages={recipePages}
        />
      </div>
    </>
  );
};

export default Form;
