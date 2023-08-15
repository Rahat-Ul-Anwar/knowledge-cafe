import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./BlogDetails.css";
const BlogDetails = ({ blogDetails, handleBookmarkedClick }) => {
    const { author, blog } = blogDetails;
    
    

   
  return (
    <div className="blog-details">
      <img src={blog.cover_image} alt="" />
      <div className="blog-info">
        <div className="author-info">
          <img src={author.image} alt="" />
          <div className="name-published-date">
            <h4>{author.name}</h4>
            <p>{blog.publish_date}</p>
          </div>
        </div>

        <div className="blog-read-time">
          <p>
            <small>{blog.read_time} read</small>
          </p>
                  <FontAwesomeIcon onClick={() => handleBookmarkedClick(blogDetails)} icon={faBookmark} width="24px"/>
        </div>
      </div>
      <h2>{blog.title}</h2>
      <a href="http://">Mark as read</a>
    </div>
  );
};

export default BlogDetails;
