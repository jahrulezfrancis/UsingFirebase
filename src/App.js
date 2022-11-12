import { Route, Routes } from 'react-router-dom';
import './App.css';
import { WaitlistForm } from './Form';
import { UserProvider } from './Helpers/ContextProvider';
import HomePage from './HomePage';
import { LoginForm } from './login';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <WaitlistForm />
        <LoginForm />
        <Routes>
          <Route path='homepage' element={<HomePage />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
