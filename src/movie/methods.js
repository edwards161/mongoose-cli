// const { modelName } = require("./model");
const Movie = require("./model");

exports.addMovie = async (movieObj) => {
    try {
        await Movie.create(movieObj);
    } catch (error) {
        console.log(error)
    }
};

exports.listMovies = async () => {
    try {
        return await Movie.find({});
    } catch (error) {
        console.log(error)
    }
};

    exports.updateMovie = async (movieObj) => {
        try {
            await Movie.findOneAndUpdate(
                {title: movieObj.title},
                {title: movieObj.newTitle,
                    actor: movieObj.newActor,
                    director: movieObj.newDirector,
                    year: movieObj.newYear,
                    genre: movieObj.newGenre});
        } catch (error) {
            console.log(error)
        }
    };

    exports.deleteMovie = async (movieObj) => {
        try {
            await Movie.deleteOne(movieObj);
        } catch (error) {
            console.log(error)
        }
    };
