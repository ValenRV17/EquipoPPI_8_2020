const express = require('express');
const router = express.Router();

const connection = require('../db/db.js');

router.get('/usuarios', (req,res)=>{

    connection.query('SELECT * FROM usuario', (err, rows, fields)=>{
        if (!err){
            res.json(rows);
        }   else{
            console.log(err);
        }
    });

});

router.get('/usuarios/:usuario_id', (req,res)=>{
    const {usuario_id} = req.params;
    connection.query('SELECT * FROM usuario WHERE usuario_id=?', [usuario_id],
    (err,rows,fields)=>{
        if(!err){
            res.json(rows[0]);
        } else{
            console.log(err);
        }
    });
});

router.post('/nuevo-usuario', (req, res)=>{

    const{first_name, contraseña, last_name, email} = req.body;

    let usuario = [first_name, contraseña, last_name, email];

    let nuevoUsuario = `INSERT INTO usuario (first_name, contraseña, last_name, email) VALUES (?,?,?,?)`;

    connection.query(nuevoUsuario, usuario, (err, results, fields)=>{
        if (err){
            return console.error(err.message);
        }
        res.json({message: `Usuario resgistrado`, })
    });
});

router.put('/usuario/:usuario_id', (req, res)=>{
    const{first_name, contraseña, last_name, email} = req.body;
    
    const{usuario_id} = req.params;

    connection.query(`UPDATE usuario SET first_name=?, contraseña=?, last_name=?, email=? WHERE usuario_id=?`,
    [first_name, contraseña, last_name, email, usuario_id], (err, rows, fields) =>{
        if(!err){
            res.json({status: 'Estudiante actualizado'});
        }else{
            console.log(err);
        }
    });
});

router.delete('/usuario/:usuario_id', (req,res)=>{
    const {usuario_id} = req.params;
    
    connection.query(`DELETE FROM usuario WHERE usuario_id = ?`, [usuario_id], (err, rows, fields) =>{
        if(!err){
            res.json({status: 'Estudiante eliminado'});
        }else{
            console.log(err);
        }
    })
})

module.exports= router;