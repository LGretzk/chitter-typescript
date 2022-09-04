import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm/LoginForm'
import RegistrationForm from './components/LoginForm/RegistrationForm';

const App: React.FC = () => {
  return (
    <div className="App">
      <LoginForm />
      <RegistrationForm />
    </div>
  )
}

export default App;
