import Noticias from './componets/Noticias';
import MasInformacion from './componets/MasInformacion';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <div className='row'>
        <div className='col-12 text-center'>
          <h1>Noticias</h1>
        </div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Noticias />} />
          <Route path="/info" element={<MasInformacion />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
