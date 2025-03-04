const express = require('express');

const app = express();

app.use(express.json())

let books =[
    {
        id : 1,
        title: 'Book 1'
    },
    {
        id : 2,
        title: 'Book 2'
    }
];


//get message welcome page

app.get('/', (req,res)=>{
    res.json({
        message: "welcome to bookstore",
    });
});


//get list of books
app.get('/get',(req,res)=>{
    res.json(books);
});

//get books based on id
app.get('/get/:id',(req,res)=> {
    const book = books.find( i => i.id == req.params.id);
     
    if(book)
    {
        res.json(book).status(200);
    }
    else {
        res.status(404).json({
            message: "Book not found! Please try with diff id"
        });
    }
});

//post new book with default name
app.post('/add',(req,res)=>{
    const newBook = [
        {
            id: books.length +1,
            title: `Book ${books.length +1}`
        }
    ]

    books.push(newBook);
    res.status(200).json({
        data : newBook,
        message : "New Book added Successfully"
    });
});



//post new book with custom name in it
app.post('/add/:name',(req,res)=>{
    const newCustomBook =[
        {
            id: books.length +1,
            title: `${req.params.name} - Modified`
        }
    ]

    books.push(newCustomBook);
    res.status(200).json({
        data:newCustomBook,
        message:"New Customized Book added"
    });
});


//update based on id
app.put('/update/:id',(req,res)=>{

    const bookID = parseInt(req.params.id);
    const currBook = books.find(i => i.id === bookID);

    if(currBook)
    {
       if(req.body.title)
       {
        currBook.title = req.body.title;
        res.status(200).json({
            data:currBook,
            message:" Book Modified Successfully"
        });
       }
    }
    else{
        res.status(404).json({
            data:currBook,
            message:"Not found check params"
        });
    }
    
});


//delete by id
app.delete('/delete/:id', (req, res) => {
    const bookID = parseInt(req.params.id); // Convert to number
    const bookIndex = books.findIndex(i => i.id === bookID); // Find index

    if (bookIndex !== -1) {
        const deletedBook = books.splice(bookIndex, 1); // Remove book
        res.json({ message: "Book deleted", book: deletedBook[0] });
    } else {
        res.status(404).json({ message: "Book not found" });
    }
});


const PORT =3000;

app.listen(PORT, ()=>{
    console.log(`Server is now running on ${PORT}`);
})