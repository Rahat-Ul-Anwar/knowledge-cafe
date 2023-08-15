import './BookmarkedTitle.css';


const BookmarkedTitle = (props ) => {
    const { bookmarked } = props;
    console.log(bookmarked)
    return (
        <div className='bookmarked-title'>
              <h3>Bookmarked Blogs : {bookmarked.length} </h3>
            <div> 
            {
                
                bookmarked.map(books => <h4 key={books.id}>{books.blog.title}</h4>)
              }
            </div>
        </div>
    );
};

export default BookmarkedTitle;