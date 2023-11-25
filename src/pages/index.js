import * as React from "react"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from "../components/header";
import Anniversary from "./anniversary";
import AboutPage from "./about";
import Home from "./home";

const IndexPage = () => {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/anniversary" element={<Anniversary/>}/>
                <Route path="/about" element={<AboutPage/>}/>
            </Routes>
        </Router>
    );
};

export const Head = () => <title>Kimi & Clara</title>;


export default IndexPage;
