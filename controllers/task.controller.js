import taskModel, {Status} from "../models/task.model.js";
import subtaskModel from "../models/subtask.model.js";
import subTaskModel from "../models/subtask.model.js";
import dotenv from "dotenv";
import cronScheduler from "../sevices/cronScheduler.js"
dotenv.config();

class TaskController {

    //  TASK
    addTask = async (req, res) => {
        const {title, description, due_date} = req.body;
        const userId = req.user.id;
        // const user = await userModel.find({ _id: userId });
        const newTask = new taskModel({title, description, userId, due_date})
        newTask.save()
            .then(() => {
                cronScheduler.createTaskScheduler()
                return (res.status(200).json({message: "Task added successfully"}))
            })
            .catch((error) => {
                return (
                    res.status(500).json({message: error.message})
                )
            })

    }

    getAllTask = (req, res) => {
        taskModel.find({userId: req.user.id})
            .then((data) => res.status(200).json(data))
            .catch((error) => res.status(501).json({message: error.message}))
    }

    updateTask = async (req, res) => {
        const {id, due_date, status} = req.body;

        let todoStatus;

        if(status == Status.DONE) todoStatus = Status.DONE
        else if(status == Status.IN_PROGRESS)   todoStatus = Status.IN_PROGRESS
        else todoStatus = Status.TODO

        const updateVal = {
            status: todoStatus,
            due_date: due_date
        }

        taskModel.findByIdAndUpdate({_id: id}, updateVal)
            .then(() => res.status(200).json({message: "Task updated successfully"}))
            .catch((error) => res.status(501).json({message: error.message}))
    }

    updateTaskPriority = async (priority, id)=> {

        taskModel.findByIdAndUpdate({_id: id}, {priority})
            .then(() => res.status(200).json({message: "Task updated successfully"}))
            .catch((error) => res.status(501).json({message: error.message}))
    }


    removeTask = (req, res) => {
        const {id} = req.body;
        console.log("id: ", id);
        taskModel.findByIdAndDelete({_id: id})
            .then(() => res.status(200).json({message: "Task deleted successfully"}))
            .catch((error) => res.status(501).json({message: error.message}))
    }


    //  SUB TASK
    addSubtask = async (req, res) => {
        const {task_id, content} = req.body;
        const newTask = new subtaskModel({task_id, content, status: false})
        newTask.save()
            .then(() => {
                return (res.status(200).json({message: "Sub Task added successfully"}))
            })
            .catch((error) => {
                return (
                    res.status(500).json({message: error.message})
                )
            })
    };

    updateSubTask = async (req, res) => {
        const {status, id} = req.body;
        try {
            const r = await subTaskModel.findByIdAndUpdate({_id: id}, {status: status});
            res.send("Updated Successfully")
        } catch (err) {
            console.log(err);
            res.error({error: err});
        }
    }

    getAllSubtasks = async (req, res) => {
        const {task_id} = req.body
        taskModel.find({task_id: task_id})
            .then((data) => res.status(200).json(data))
            .catch((error) => res.status(501).json({message: error.message}))
    }

    removeSubTask = async (req, res) => {
        const {id} = req.body;
        console.log("id: ", id);
        subtaskModel.findByIdAndDelete({_id: id})
            .then(() => res.status(200).json({message: "subtask deleted successfully"}))
            .catch((error) => res.status(501).json({message: error.message}))
    };
}

const taskController = new TaskController()
export default taskController