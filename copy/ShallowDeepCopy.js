const books=[
    {
        title:'Harry Potter',
        price:90,
        author:'J K Rowlings'
    },{
        title:'Indian Constitution',
        price:720,
        author:'Lakshmikanth'
    },{
        title:'Wings of fire',
        price:150,
        author:'Dr. APJ Abdul Kalam'
    },
]

const booksWithGst= books.map(book=>{
    book.price=book.price*0.18+book.price         //shallow copy. change obejcts in booksWithGst will not affect books
    return book
})
console.log(booksWithGst);


console.log('--------- deep copy using spread OPERATOR ----------------');
//--------- deep copy using spread OPERATOR ----------------

const booksAftDiscount=books.map(book=>{
    const b={...book}                                  // object copy -> deep copy. change in objects of booksAftDiscount will not affect books
    b.price=b.price - b.price*0.20
    return b                      
})
console.log(booksAftDiscount);


console.log('Books array -',books);                     // will change with change in booksWithGst 
console.log('Books with gst -',booksWithGst);           // will change with change in books(shallow copy)
console.log('Books after discount -',booksAftDiscount); //independent of books ans booksWithGst (Deep copy)
// let newBooks = books
// console.log(newBooks);
// let newBooksCopy=[...books]
// console.log(newBooksCopy);


//reference copy
// const newbooksCopy = books
// console.log(books===booksCopy)           //true
// const booksCopy=[...books]
// console.log(books===booksCopy);          //false
// console.log(books[0]===booksCopy[0]);    //true

// books[0].price=100
// console.log(books[0].price);             //100
// console.log(booksCopy[0].price);         //100

//Deep copy using Spread operator (...) to object {}
// const booksCopy = books.map(book=>{
//     return {...book}
// }
// )
// console.log(booksCopy);
// console.log(books[0]===booksCopy[0]);    //false

// books[0].price=100
// console.log(books[0].price);             //100
// console.log(books[0]===booksCopy[0]);    //90


//-------------------------------------------- product list -----------------------------
console.log('-------------------------------- Product list---------------------------------------------');

const products=[
    {
        productName:'Lipstick',
        price:999,
        brand:'Maybeline'
    },{
        productName:'eyeLiner',
        price:500,
        brand:'Lakme'
    },{
        productName:'Trimmer',
        price:1000,
        brand:'phillips'
    },{
        productName:'Beardo oil',
        price:260,
        brand:'Beardo'
    }
]

const productWithGst = products.map(product=>{
    const productcopy={...product}
    productcopy.price=productcopy.price*0.03+productcopy.price
    return productcopy
})
console.log(products);
console.log(productWithGst);


const filteredProducts = products.filter(product=>product.price>500)    //filter prod price > 500
console.log(filteredProducts);

