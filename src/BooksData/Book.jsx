import "../BooksData/Books-style.css"

export const Book = ({cover, title, author, price, reserved, }) => {
  const handleButtonClick = () => {
    onUpdateStatus(id, !reserved);
  }
    return (
      
    <div>
     <div className="Book-style">
          <img src={cover} alt="book cover" />
          <p><b>Title:</b> {title}</p>
          <p><b>Author:</b> {author}</p>
          <p><b>Price:</b> {price}</p>
          <p><b>Reserved:</b> {reserved ? 'Yes' : 'No'}</p>
          <button onClick={handleButtonClick}>{reserved ? 'Return' : 'Reserve'}</button>
            </div>
        </div>
    );
  }; 
