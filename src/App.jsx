import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react';

import AddEmployee from './pages/Addemployee';
import Editemployee from './pages/Editemployee';
import Protectroutetwo from './components/Protectroutetwo';
import Home from './pages/Home';
import Header from './components/Header';
import Contact from './pages/Contact';
import Employee from './pages/Employee';
import Protectroute from './components/Protectroute'; // Used for authenticated pages
import Login from './pages/Login';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        let loginStatus = JSON.parse(localStorage.getItem("isLoggedIn"));
        setIsLoggedIn(loginStatus);
    }, []);

    return (
        <BrowserRouter>
            <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Header" element={<Header />} />
                <Route path="/contact" element={<Contact />} />
                
                <Route path="/login" element={
                    <Protectroutetwo isLoggedIn={isLoggedIn}>
                        <Login setIsLoggedIn={setIsLoggedIn} />
                    </Protectroutetwo>
                } />

                <Route path="/employees" element={
                    <Protectroute isLoggedIn={isLoggedIn}>
                        <Employee />
                    </Protectroute>
                } />

                <Route path="/add-employee" element={
                    <Protectroute isLoggedIn={isLoggedIn}>
                        <AddEmployee />
                    </Protectroute>
                } />

                <Route path="/edit-employee/:id" element={
                    <Protectroute isLoggedIn={isLoggedIn}>
                        <Editemployee />
                    </Protectroute>
                } />
            </Routes>
            <ToastContainer />
        </BrowserRouter>
    );
}

export default App;
