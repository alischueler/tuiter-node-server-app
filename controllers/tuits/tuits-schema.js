import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    liked: Boolean,
    topic: String,
    title: String,
    handle: String,
    username: String,
    image: String,
    time: String
}, {collection: 'tuits'});
export default schema;