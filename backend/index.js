
import express from 'express'
import mongoose from 'mongoose'
// import songsRoutes from '../backend/Routes/Songs.js'
import songsRoutes from '../backend/Routes/Songs.js';
import cookieParser from 'cookie-parser';
import userRoutes from '../backend/Routes/Users.js'
const app = express();
const PORT  = 8080

app.use(express.json())
app.use(cookieParser())
app.use('/v1/songs',songsRoutes)
app.use('/v1/user', userRoutes)

app.get('/',(req, res) => {
    res.send('Hello World!')
})
mongoose.connect("mongodb://0.0.0.0:27017/spotifydb",
  { useNewUrlParser: true, }
)
.then(() => console.log('MongoDB connection established.'))
.catch((error) => console.error("MongoDB connection failed:", error.message))





app.listen(PORT, async () => {
    try {
      console.log(`Server running at PORT:${PORT} 🚀`);
      console.log("Database Connected !!");
    } catch (err) {
      console.log(err);
    }
});
  