import mongoose from "mongoose";

const CategorySchema = mongoose.Schema({
    name: {
        type: String
    }
});

export default mongoose.model('Category', CategorySchema)