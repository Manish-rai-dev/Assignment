import mongoose from "mongoose";

const subTaskInstance = mongoose.Schema({
    task_id: {type: Number, required: true},
    content: { type: String },
    status: { type: Boolean, default: false }
}, { timestamps: true });


const subTaskModel = mongoose.model("SubTask", subTaskInstance);
export default subTaskModel;