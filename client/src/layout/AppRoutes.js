import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BlogPage from "../pages/BlogPage";
const AppRoutes =()=> {
    return (
        <Routes>
            <Route path="*" element={<h1 style={{marginTop:"100ppx"}}>1Page Not Found</h1>}/>
            <Route path="/" element={<HomePage />}/>
            <Route path="/blogs" element={<BlogPage />}/>
        </Routes>
    )
}

export default AppRoutes;