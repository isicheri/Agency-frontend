import { Route, Routes } from "react-router"
import Home from "./routes/Home/Home"

const App = () => {
  return <>
<div className="bg-[#D5DEDC] min-h-screen w-full">
  <Routes>
  <Route index element={<Home />}/>
 </Routes>
</div>
</>
}


export default App