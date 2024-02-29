let Book = require('../models/book.model')

exports.get_list = function (req, res) {
    Book.get_all((data) => {
        res.json({result: data})
    })
}

exports.detail = function (req, res) {
    Book.get_by_id(req.params.id, (data) => { 
        res.json({result: data})
    });
        
}

exports.add_book = (req, res) => {
    let data = req.body
    
    Book.create(data, (data_result) => {
        res.json({result: data_result})
    });
}

exports.remove_book = (req, res) => { 
    let id = req.params.id
    
    Book.remove(id, (data_result) => {
        res.json({result: data_result})
    });
}

exports.update_book = (req, res) => { 
    let id = req.params.id
    let data = req.body
    
    Book.update(id, data, (data_result) => {
        res.json({result: data_result})
    });
}

