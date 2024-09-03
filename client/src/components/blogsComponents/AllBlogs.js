import {useEffect} from "react";
import {useGetAllBlogsMutation} from "../../lib/blogsApi/blogApis";
import BlogCard from "./BlogCard";
const AllBlogs = ()=> {

// initialize rtk query hook
const [getAllBlogs,{isError, isSuccess, error, data, isLoading}] = useGetAllBlogsMutation();
useEffect(()=> {
    getAllBlogs();
},[]);
const baseUrl = process.env.REACT_APP_API_BASE_URL;

console.log(error);
console.log(data)
    return (
        <section className="container" style={{marginTop:"100px"}}>
            <div className="row">
                <BlogCard/>
            </div>
        </section>
    )
}
export default AllBlogs;