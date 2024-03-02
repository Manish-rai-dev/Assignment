🚀🚀 To-do Application API using the Cron and Twilio voice calling services  🚀🚀


Local Setup


git clone https://github.com/Manish-rai-dev/Assignment.git
npm install

get your environment Variable's Setup

Start the local server by writing :
npm start
The server would be running locally at API endpoints at http://localhost:3000.

API Endpoints

Endpoint: POST /api/v0/task/task Input: title, description, due_date, jwt auth token Create Subtask

Endpoint: POST /api/v0/task/tasks Get All User Tasks

Endpoint: GET /api/v0/task/sub_tasks Filters: priority, due date, proper pagination Get All User Subtasks

Endpoint: POST /api/v0/task/update_task Filters: task_id (if passed) Update Task

Endpoint: POST /api/v0/task/update_subtask Update: due_date and status ("TODO" or "DONE") Update Subtask

Endpoint: POST /api/v0/task/task Update: status (0 or 1) Delete Task

Endpoint: DELETE /api/v0/task/sub_task Delete Subtask 

Endpoint: DELETE /api/v0/task/task

Cron Jobs
Change Task Priority
Logic: Automatically adjusts priority based on due_date. 

Logic: Calls users if a task passes its due_date, prioritized based on user priority (0, 1, 2).

Contributors
Manish Rai
Feel free to contribute to this project by submitting pull requests or opening issues. Happy coding! 🚀
