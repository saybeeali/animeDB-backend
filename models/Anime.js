const mongoose = require("mongoose");



const reviewSchema = new mongoose.Schema ({
    // username:{type: String, required:true},
    post:String 

});

const AnimeSchema = new mongoose.Schema({
 mal_id: Number,
url: String,
status: String,
images: { 
    jpg:{
    image_url:String
    }
},
trailer: {
    embed_url: String
},
title: String,
title_japanese: String,
rating: String,
episodes: Number,
synopsis: String,
reviews: [reviewSchema]
      });

const Anime = mongoose.model("Anime", AnimeSchema);

module.exports = Anime;