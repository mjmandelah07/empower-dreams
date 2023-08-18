import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout';
import Home  from './pages/Home';
import AboutMe from './pages/AboutMe';
import NoPage from './pages/NoPage';

function App() {


  return (
    <BrowserRouter>
     
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutMe />} />
        {/* <Route path="contact" element={<Contact />} /> */}
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
   
  </BrowserRouter>
  )
}

export default App
