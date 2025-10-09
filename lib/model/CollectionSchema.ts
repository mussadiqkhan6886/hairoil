import mongoose, { Schema } from "mongoose"

const CollectionSchema = new Schema({
    title: {type:String, required: true},
    image: {type: String, required: true},
    link: {type: String, required: true},
    slug: {type: String, required: true},
    
},
{timestamps: true}
)

const collection = mongoose.models.Collection || mongoose.model("Collection", CollectionSchema)

export default collection