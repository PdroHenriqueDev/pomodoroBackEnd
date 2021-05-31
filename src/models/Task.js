const knex = require('../database/db');

class Task{

    async new(taskName, taskTime){
        try{

            await knex.insert({taskName, taskTime}).table("tasks")   

        }catch(err){

            console.log(err)

        }
    }

    async findById(id){
        try{
            const result = await knex.select(["id", "taskName", "taskTime"]).where({id: id}).table("tasks")

            if(result.length > 0){
                return result[0];
            }else {
                return undefined;
            }
            
        }catch(err){
            console.log(err)
            return undefined;
        }  
    }

    async findAll(){
        try{
            const result = await knex.select(["id", "taskName", "taskTime" ]).table("tasks")
            return result
        }catch(err){
            console.log(err)
            return []
        }   
    }

    async delete(id){
        
        const task = await this.findById(id)

        if(task != undefined){
            try{
                await knex.delete().where({id: id}).table("tasks")
                return {deleted: true}
            }catch(err){
                return {deleted: false, err: err}
            }
        }else{
            return {err: "O taks não existe. Logo, não pode ser deletado!"}
        }
    }
}

module.exports = new Task();