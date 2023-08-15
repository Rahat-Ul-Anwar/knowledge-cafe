import { useEffect } from "react";
import { useState } from "react";
import './Blogs.css';

import BlogDetails from "../BlogDetails/BlogDetails";
import BookmarkedTitle from "../BookmarkedTitle/BookmarkedTitle";

const Blogs = () => {


    const [blogs, setBlogs] = useState([]);
    const [bookmarked, setBookmarked] = useState([]);

    useEffect(() => { 

        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);

    const handleBookmarkedClick = (blogDetails) => {
        console.log(blogDetails.blog.title)
        const newBookmarked = [...bookmarked, blogDetails];
        setBookmarked(newBookmarked);
        console.log(newBookmarked)
    }

    return (
        <div className="blogs-area">
            <div className="blogs">
                {
                    blogs.map(blogDetails => <BlogDetails key={blogDetails.id}
                        blogDetails={blogDetails} handleBookmarkedClick={handleBookmarkedClick}
                    ></BlogDetails>)
              }

            </div>
            <div className="bookmarked-blogs">
                <h2>Spent time on read: </h2>
   
              
                <BookmarkedTitle bookmarked={bookmarked}></BookmarkedTitle>
            </div>
            


        </div>
    );
};

export default Blogs;