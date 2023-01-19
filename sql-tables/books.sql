CREATE TABLE Books (
book_id SERIAL PRIMARY KEY,
book_name varchar(255) NOT NULL,
book_price varchar(255),
book_author varchar(255),
book_genre varchar(255),
book_description varchar(255),
book_rating varchar(255)

)


ALTER TABLE books
ADD book_description TEXT;


UPDATE books
SET book_genre = 'novel'
WHERE book_id = 4;




INSERT INTO books (book_name, book_price, book_author, book_genre, book_description, book_rating, book_img) 
VALUES ('What Have I Done?', '25','Amanda Prowse', 'Novel', 'Kathryn Brooker is the headmasters wife. While her husband spends his days disciplining unruly teenagers in the grand halls of Mountbriers Academy, Kathryn spends hers baking scones for her son cricket match in a beautiful cottage in the manicured school grounds.', 4, 'https://live.staticflickr.com/65535/52633019418_45db19d21f_o.png');









SELECT * FROM books;



