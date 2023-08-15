import './BookmarkedTitle.css';


const BookmarkedTitle = ({ bookmarked }) => {
    const blog = bookmarked;
    return (
        <div>
              <h3>Bookmarked Blogs : {bookmarked.length} </h3>
              <h3> {blog?.title} </h3>
        </div>
    );
};

export default BookmarkedTitle;