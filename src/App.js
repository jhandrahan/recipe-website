import Homepage from "./components/Homepage";
import RecipeDetails from "./components/RecipeDetails";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Homepage />} />
        <Route path="/recipeData/:uniqueId" element={ <RecipeDetails />} />
      </Routes>
    </>
  );
}

export default App;
