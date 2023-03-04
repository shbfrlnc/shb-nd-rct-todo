import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import { renewToken } from "./actions/authaction";
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Todo from "./pages/Todo";
import Home from "./pages/Home";

import "./App.css";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        setInterval(() => {
            dispatch(renewToken());
        }, 1000 * 60);
    }, []);

    return (
        <>
            <BrowserRouter>
                <Container>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />

                        <Route path="/todo" element={<Todo />} />

                        <Route path="/login" element={<Login />} />

                        <Route path="/register" element={<Register />} />
                    </Routes>
                </Container>
            </BrowserRouter>
        </>
    );
}

export default App;
