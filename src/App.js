import "./styles.css";
import Homepage from "./components/Homepage";
import RecipeDetails from "./components/RecipeDetails";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/recipeData/:uniqueId" element={<RecipeDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
