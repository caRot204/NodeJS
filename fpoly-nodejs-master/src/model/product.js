import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    },
    desc: {
        type: String
    },
    category: {
        type: mongoose.ObjectId,
        ref: 'category'
    }
});

export default mongoose.model('Product', productSchema)