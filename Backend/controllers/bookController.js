const mongoose= require('mongoose');
const Book= require('../models/Book');

const getBooks= async (req,res)=>{
    try{
        const books= await Book.find();
        res.status(200).json(books);
    } catch(error){
        console.error(error);
    }
}

module.exports={
    getBooks
}