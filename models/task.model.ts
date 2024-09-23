import mongoose from "mongoose";

const taskModel = new mongoose.Schema(
  {
    title: String,
    status: String,
    content: String,
    timeStart: Date,
    timeFinish: Date,
    createBy: String,
    listUsers: Array,
    deleted: {
      type: Boolean,
      default: false
    },
    deleteAt: Date,
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model('Task', taskModel, "tasks");

export default Task;