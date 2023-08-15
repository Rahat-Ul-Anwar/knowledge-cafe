import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./BlogDetails.css";
const BlogDetails = (props) => {
    const { author, blog } = props.blogDetails;
    const { name, image } = author;
    const { title, cover_image, publish_date, read_time } = blog;
    const handleBookmarkedClick = props.handleBookmarkedClick;
    
    

   
  return (
    <div className="blog-details">
      <img src={cover_image} alt="" />
      <div className="blog-info">
        <div className="author-info">
          <img src={image} alt="" />
          <div className="name-published-date">
            <h4>{name}</h4>
            <p>{publish_date}</p>
          </div>
        </div>

        <div className="blog-read-time">
          <p>
            <small>{read_time} read</small>
          </p>
                  <FontAwesomeIcon onClick={() => handleBookmarkedClick(props.blogDetails)} icon={faBookmark} width="24px"/>
        </div>
      </div>
      <h2>{title}</h2>
      <a href="http://">Mark as read</a>
    </div>
  );
};

export default BlogDetails;
