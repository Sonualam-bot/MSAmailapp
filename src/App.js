import { Routes, Route } from 'react-router-dom';
import './App.css';
import { InboxPage } from './pages/InboxPage';
import { SpamPage } from "./pages/SpamPage";
import { TrashPage } from './pages/TrashPage';
import { IndividualPage } from './pages/IndividualPage';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<InboxPage />} />
          <Route path="/spam" element={<SpamPage />} />
          <Route path="/trash" element={<TrashPage />} />
          <Route path='/individual/:mailID' element={<IndividualPage />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
