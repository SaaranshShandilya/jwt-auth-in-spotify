// const mongoose  = require("mongoose");
import mongoose from "mongoose";

const SongsSchema = new mongoose.Schema({
    name: String ,
    album: String ,
    minutes:String,
    seconds:String,
})


export const SongsModel =  mongoose.model("songs",SongsSchema)
