import { useEffect } from "react";
import { useState } from "react";
import "./Blogs.css";
import BlogDetails from "../BlogDetails/BlogDetails";
import BookmarkedTitle from "../BookmarkedTitle/BookmarkedTitle";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookmarked, setBookmarked] = useState([]);

  const [readCount, setReadCount] = useState(0);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleBookmarkedClick = (bloginfo) => {
    const newBookmarked = [...bookmarked, bloginfo];
    setBookmarked(newBookmarked);
  };

  const handleMarkRead = (blogDetails) => {
    let total = 0;
    let readTime = blogDetails.blog.read_time;

    let stringSplit = readTime.split(" ")[0];
    let number = parseInt(stringSplit);

    for (number in blogDetails) {
      total = total + number;

      setReadCount(total);
    }
  };

  return (
    <div className="blogs-area">
      <div className="blogs">
        {blogs.map((blogDetails) => (
          <BlogDetails
            key={blogDetails.id}
            blogDetails={blogDetails}
            handleBookmarkedClick={handleBookmarkedClick}
            handleMarkRead={handleMarkRead}
          ></BlogDetails>
        ))}
      </div>
      <div className="bookmarked-blogs">
        <h2>Spent time on read: {readCount}</h2>

        <BookmarkedTitle bookmarked={bookmarked}></BookmarkedTitle>
      </div>
    </div>
  );
};

export default Blogs;
