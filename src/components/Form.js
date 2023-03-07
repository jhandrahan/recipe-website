//imported libraries
import { useState } from "react";
import axios from "axios";
import Results from "./Results";


const Form = () => {
//initialize state
  const [ recipes, setRecipes ] = useState([]);
  const [ userInput, setUserInput ] = useState([]);

  const handleClick = (event) => {
    event.preventDefault();
    setUserInput("");
    
    axios({
        baseURL: 'https://api.spoonacular.com/recipes/complexSearch',
        params: {
          apiKey: 'dbce9eabfd0f437dbcce1553dc251387',
          query: userInput,
          number: 5,
          addRecipeInformation: true
        }
      }).then((apiData) => {
        setRecipes(apiData.data.results)
      })  
  }

  const handleChange = (event) => {
    setUserInput(event.target.value);
  }

  return (
    <>
      <form action="" onSubmit={ (event) => {handleClick(event, userInput)} }>
        <label htmlFor="search"></label>
        <input onChange={ handleChange } value={userInput} type="text" placeholder="" />
        <button>Search</button>
      </form>
      <Results recipes={ recipes } />
    </>
  );
};

export default Form;
