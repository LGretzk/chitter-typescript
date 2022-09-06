import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import LoginForm from '../components/LoginForm/LoginForm'
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import Peeps from '../routes/Peeps/Peeps'

const App: React.FC = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/peeps" element={<Peeps />} />
            </Routes>
        </div>
    )
}

export default App;
