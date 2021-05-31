const Task = require('../models/Task');

class TaskController{
    async index(req, res){}
    
    async create(req, res){

        const {taskName, taskTime} = req.body;

        if(taskName == undefined || taskTime == undefined){
            res.status(400);
            res.json({err: "taskName ou taskTime is undefined!"})
            return
        }

        await Task.new(taskName, taskTime)
        res.status(200)
        res.send("Tudo ok!")
    }

    async remove(req, res){
        const id = req.params.id

        const result = await Task.delete(id)

        if(result.deleted){
            res.status(200)
            res.send("Tudo ok!")
        }else{
            res.status(406)
            res.send(result.err)
        }
    }

    async taskDone(req, res){

        const tasks = await Task.findAll()
        res.json(tasks)
    }
}

module.exports = new TaskController();