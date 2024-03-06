const db = require('../common/connect')

const Book = function (book) {
    this.id = book.id;
    this.name = book.name;
}

Book.get_all = (callback) => {
    db.query("select * from Book", (err, book) => {
        err ? callback(null) : callback(book)
    })

}

Book.get_by_id = (id, callback)  => {
    db.query("select * from Book WHERE id = ?", id, (err, book) => {
        (err || book.length) ? callback(null) : callback(book[0])
    })
}

Book.create = (data, callback) => { 
    db.query("INSERT INTO Book SET ?", data, (err, book) => { 
        (err || book.length) ? callback(null) : callback({id: book})
    })
}

Book.remove = (id, callback) => { 
    callback(id)
}

Book.update = (id, data, callback) => { 
    callback(data)
}


module.exports = Book;