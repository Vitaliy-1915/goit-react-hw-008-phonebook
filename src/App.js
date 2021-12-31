import './App.css';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppBar from './Components/AppBar/AppBar';
import HomeView from './views/HomeView/HomeView';
import ContactsView from './views/ContactsView/ContactsView';
import RegisterView from './views/RegisterView/RegisterView';
import LoginView from './views/LoginView/LoginView';

function App() {
  return (
    <div className="App">
      <AppBar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/mycontacts" element={<ContactsView />} />
          <Route path="/signup" element={<RegisterView />} />
          <Route path="/login" element={<LoginView />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
