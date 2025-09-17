import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import './App.css';
import Header from "./TravelBlog/Header";
import Footer from "./TravelBlog/Footer";
import Home from "./TravelBlog/Home";
import Blogs from "./TravelBlog/Blogs";
import Review from "./TravelBlog/Review";
import Contact from "./TravelBlog/Contact";
import Routing from "./TravelBlog/Routing";
import AdminLogin from "./TravelBlog/Admin/AdminLogin";
import AdminDashboard from "./TravelBlog/Admin/AdminDashboard";
import AddBlog from "./TravelBlog/Admin/AddBlog";
import ViewBlog from "./TravelBlog/Admin/ViewBlog";
import EditBlog from "./TravelBlog/Admin/EditBlog";
import { createContext, useState } from "react";

export const loginstatus = createContext();

function App() {
    const [login, setlogin] = useState(false);
    return (
        <loginstatus.Provider value={{ login, setlogin }}>
            <div className="App">
                <Header/>
                <Routing/>
                <Footer/>
            </div>
        </loginstatus.Provider>
    );

}

export default App;
