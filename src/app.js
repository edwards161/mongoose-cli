require("./db/connection");
const { default: mongoose } = require("mongoose");
const yargs = require("yargs");
const { addMovie, listMovies, updateMovie, deleteMovie,} = require("./movie/methods");

const app = async (yargsObj) => {
    try {
      if (yargsObj.add) {
        //add movie function that takes yargsObj terminal input
        await addMovie({ 
          title: yargsObj.title, 
          actor: yargsObj.actor,
          director: yargsObj.director,
          year: yargsObj.year,
          genre: yargsObj.genre,
           });
        console.log(`Successfully added ${yargsObj.title}`);
      } else if (yargsObj.list) {
        //list movies from database
        console.log( await listMovies())
      } else if (yargsObj.update) {
        //update movies with filterObj and updateObj
        await updateMovie(yargsObj);
           console.log(`Updated ${yargsObj.title} to ${yargsObj.newTitle}`);
      } else if (yargsObj.delete) {
        //delete movie with filterObj
        await deleteMovie({title: yargsObj.title});
        console.log(`Successfully deleted ${yargsObj.title}`);
      } else {
        console.log("Incorrect command");
      }
    } catch (error) {
      console.log(error);
    }
  };

app(yargs.argv);