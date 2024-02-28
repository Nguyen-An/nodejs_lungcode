exports.get_list = function (req, res) {
    let data = [
        {
            "id": 1,
            "name": "Book name 1",
        },
        {
            "id": 2,
            "name": "Book name 2",
        },
        {
            "id": 3,
            "name": "Book name 3",
        },
    ]
    res.json({result: data})
}

exports.detail = function (req, res) {
    let data =        {
        "id": req.params.id,
        "name": "Book name 1",
    }
        
    res.json({result: data})
}