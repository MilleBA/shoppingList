import mongoose, {Schema} from "mongoose";

const itemsSchema = new Schema(
    {
        name: String,
        items: String
    },
    {
        timestamps: true,
    }
);

const Items = mongoose.models.Items || mongoose.model("Items", itemsSchema);

export default Items;