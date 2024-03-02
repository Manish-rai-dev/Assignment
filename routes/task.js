import express from "express"
import taskController from "../controllers/task.controller.js"
import requireAuth from "../middleware/requireAuth.js";

const router = express.Router();

router.post("/task", requireAuth, taskController.addTask)
router.get("/tasks", requireAuth, taskController.getAllTask)

router.post('/sub_task', requireAuth, taskController.addSubtask)
router.get('/sub_tasks', requireAuth, taskController.getAllSubtasks)

router.post("/update_subtask", requireAuth, taskController.updateSubTask)
router.post("/update_task", requireAuth, taskController. updateTask)


router.delete('/task', requireAuth, taskController.removeTask)
router.delete('/sub_task', requireAuth, taskController.removeSubTask)


export default router;