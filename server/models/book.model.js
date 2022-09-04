const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Book title required."]
    },
    author: {
        type: String,
        required: [true, "Author name required."]
    },
    series: {
        type: String,
    },
    posterName: {
        type: String,
        required: [true, "Please put your name."]
    },
    rating: {
        type: Number,
        required: [true, "Please give your book a rating."],
        min: [1, "Please rate your book on a 1-5 scale."],
        max: [5, "Please rate your book on a 1-5 scale."]
    },
    thoughts: {
        type: String,
        required: [true, "Please add your book thoughts."],
        minlength: [5, "Your thoughts must be at least 5 characters."]
    }
}, {timestamps: true})

module.exports = mongoose.model("Book", BookSchema);