const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: { type: String, require: true },
    body: { type: String, require: true },
    status: { type: Boolean, require: true },
    category: {type: mongoose.ObjectId, ref: 'Category'},
    user: { type: mongoose.ObjectId, ref:'User'}

},
    {
        timestamps: true
    }
)

const Post = mongoose.model('Post', postSchema);

module.exports = Post