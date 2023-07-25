import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Income from "./pages/Income"
import Expense from "./pages/Expense"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/income' element={<Income/>} />
        <Route path='/expense' element={<Expense/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
