import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {


  return (
    <div className=" h-full">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default App
