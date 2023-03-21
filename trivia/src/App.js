import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Questions from "./pages/Questions";
import { DifficultyProvider } from "./context/difficulty";
import { CategoryProvider } from "./context/category";
import { CorrectAnswersProvider } from "./context/correct-answers";
import FinalPage from "./pages/FinalPage";

function App() {
  return (
    <div className="App">
      <DifficultyProvider>
        <CategoryProvider>
          <CorrectAnswersProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/questions/:id" element={<Questions />} />
              <Route path="/finalPage" element={<FinalPage />} />
            </Routes>
          </CorrectAnswersProvider>
        </CategoryProvider>
      </DifficultyProvider>
    </div>
  );
}

export default App;
