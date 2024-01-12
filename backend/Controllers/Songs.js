// const mongoose = require('mongoose');
// const {SongsModel} = require('../Schemas/Songs')
import mongoose from 'mongoose';
import {SongsModel} from '../Schemas/Songs.js';

export const createSong = (req, res) =>{
    const {name, album, minutes, seconds} = req.body

    SongsModel.create({
        name:name,
        album:album,
        minutes:minutes,
        seconds:seconds
    })
    .then((response) =>{
        console.log(response)
        res.json({"status":"Success, user created successfully",
        "id": response._id
    })
    })
    .catch((err) =>{
        console.error(err)
    })

}