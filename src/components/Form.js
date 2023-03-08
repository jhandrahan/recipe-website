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

  const handleClick = (event) => {
    event.preventDefault();
    setUserInput("");
    setLoading(true);

    axios({
      baseURL: "https://api.spoonacular.com/recipes/complexSearch",
      params: {
        apiKey: "dbce9eabfd0f437dbcce1553dc251387",
        query: userInput,
        number: 5,
        addRecipeInformation: true,
      },
    }).then((apiData) => {
      setRecipes(apiData.data.results);
      setLoading(false);

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
        <Results recipes={recipes} loading={loading} error={error}/>
      </div>
    </>
  );
};

export default Form;
