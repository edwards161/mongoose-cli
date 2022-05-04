const mongoose = require("mongoose");


//Schema is class that takes an object.? key value pairing.
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    actor: {
        type: String,
        default: "Not specified"
    },
    director: {
        type: String,
        default: "Not specified"
    },
    year: {
        type: Number,
        default: "Not specified"
    },
    genre: {
        type: String,
        default: "Not specified"
    },
});

//Using model method. All models must start with capital. Requires name and schema. 
//Const user is not the same as
//Creating a model, using a shcma we are crating a collection.
const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
