import { Register } from "./pages/Register"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";
function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/registro" element={<Register/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
