// const Task = {
//     _name : "",
//     _description: "",
//     _due_date : "",
// }

class Task {
    constructor(_name = null,_description = null,_due_date =null){
        this._name = _name;
        this._description = _description;
        this._due_date = _due_date;
    }
    checkSchema(testObj){
        for(let key of Object.keys(this)){
            if(!testObj.hasOwnProperty(key)) return false;
        }
        return true;
    }
}


module.exports = Task;