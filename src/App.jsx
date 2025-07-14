import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { useEffect, useState } from 'react';
import Employees from './pages/Employees';
import ProtectedRoutes from './components/ProtectedRoutes';

import AddEmployee from './pages/Addemployee';
import Editemployee from './pages/Editemployee';
import Protectroutetwo from './components/Protectroutetwo';
import Home from './pages/Home';
import Header from './components/Header';
import Contact from './pages/Contact';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        let loginStatus = JSON.parse(localStorage.getItem("isLoggedIn"))
        setIsLoggedIn(loginStatus)
    }, [])

    return (
        <BrowserRouter>
            <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Header" element={<Header />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/login" element={
                    <Protectroutetwo isLoggedIn={isLoggedIn}>
                        <Login setIsLoggedIn={setIsLoggedIn} />
                    </Protectroutetwo>
                }/>
                <Route path="/employees" element={<ProtectedRoutes Component={Employees} />} />
                <Route path="/add-employee" element={<ProtectedRoutes Component={AddEmployee} />} />
                <Route path="/edit-employee/:id" element={<ProtectedRoutes Component={Editemployee} />} />
            </Routes>
            <ToastContainer />
        </BrowserRouter>
    )
}

export default App