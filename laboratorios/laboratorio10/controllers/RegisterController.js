const Register = require('../models/Register')

const insert = (req, res)=>{ //peticion y el resultado.
    let Register = new Register(req.body);
    Register.save((err)=>{
        if(err) return res.status(500).json({
            message:'Algo salio mal al tratar de insertar un Register'//error de servidor
    })
    res.status(200).json({
        message: 'Insercion de register exitosa'//peticion exitosa.
    })
}) 
};//registrarlo en la base de datos

const update = (req, res)=>{
    let Register = req.body

    if(!register._id){ //_ lo pone mongoDB
        return res.status(400).json({
            message: 'el campo id es obligatorio'
        })
    }
    Register.update({_id: register._id},register)
    .then(value=>{
        res.status(200).json({
            message: 'Operacion de modificar exitosa'
        })
    })
    .catch(err=>{
        res.status(500).json({
            message: 'Algo salio mal en la operacion de modificar'
        })
    })
};

const deleteById = (req, res)=>{

    let register = req.body
    if(!register._id){ //_ lo pone mongoDB
        return res.status(400).json({
            message: 'el campo id es obligatorio'
        })
    }
    Register.deleteOne({_id:register._id})
    .then(value=>{
        res.status(200).json({
            message: 'Operacion de modificar exitosa'
        })
    })
    .catch(err=>{
        res.status(500).json({
            message: 'Algo salio mal en la operacion de modificar'
        })
    })
    
};

const getAll = (req,res)=>{
    Register.find((err, registers)=>{
        if(err) return res.status(500).json({
            message:'Algo salio mal al seleccionar todos'
        })
        if(registers){
            res.status(200).json(registers)
        }
        else{
            res.status(404).json({
                message: 'No hay ningun registro'
            })
        }
    })
};

const getOneById =(req, res)=>{
    let id = req.params._id //el id que nos paso

    Register.findByID(id, (err,register)=>{
        if(err) return res.status(500).json({
            message:'Algo salio mal al seleccionar uno'
        })
        if(register){
            res.status(200).json(register)
        }else{
            res.status(404).json({
                message:'No se encontro el registro solicitado'
            })
        }
    })
};

module.exports = {
    insert,
    update,
    deleteById,
    getAll,
    getOneById
}