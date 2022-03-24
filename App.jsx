import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TitleBar from "./TitleBar";
import Navbar from "./Navbar";
import News from "./News";
import Tech from "./Tech";
import Politics from "./Politics";
import Details from "./Details";


const App = ()=> {
    return ( 
        <div className="App">
            <TitleBar/>
            <Navbar/>
            <Routes> 
                <Route path="/" element={<News/>}></Route>
                <Route path="/details/:id" element={<Details/>}></Route>

                <Route path="/tech" element={<Tech/>}></Route>
                <Route path="/bitcoin" element={<Politics/>}></Route>
            </Routes>
            
        </div>
    );
}
 
export default App
// 4eb490a9d0f96b24a8b4ec7c789a5f2c