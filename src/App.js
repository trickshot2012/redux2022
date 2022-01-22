import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import About from "./page1";
import Users from "./page2";
import { Countonly } from './features/counter/Countonly';

export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/page1">Page1</Link>
                        </li>
                        <li>
                            <Link to="/page2">Page2</Link>
                        </li>
                    </ul>
                </nav>
                <Countonly/>
                <Routes>
                    <Route path='/page1' element={<About />} />
                    <Route path='/page2' element={<Users />} />
                    <Route exact path='/' element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}

function Home() {
    return <div>
        <h1>Home</h1>
        on Page1 you can set the counter
    </div>;
}

