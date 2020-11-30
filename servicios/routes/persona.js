const express = require('express');
const router = express.Router();

const connection = require('../db/db.js');

router.get('/personas', (req,res)=>{

    connection.query('SELECT * FROM personas', (err, rows, fields)=>{
        if (!err){
            res.json(rows);
        }   else{
            console.log(err);
        }
    });

});

router.post('/nueva-persona', (req, res)=>{

    const{nombre_pers, parentesco, usuario_id} = req.body;

    let persona = [nombre_pers, parentesco, usuario_id];

    let nuevoPersona = `INSERT INTO personas (nombre_pers, parentesco, usuario_id) VALUES (?,?,?)`;

    connection.query(nuevoPersona, persona, (err, results, fields)=>{
        if (err){
            return console.error(err.message);
        }
        res.json({message: `Persona ingresada`, })
    });
});

router.put('/persona/:pers_id', (req, res)=>{
    const{nombre_pers, parentesco, usuario_id} = req.body;
    
    const{pers_id} = req.params;

    connection.query(`UPDATE persona SET nombre_pers=?, parentesco=?, usuario_id=? WHERE pers_id=?`,
    [nombre_pers, parentesco, usuario_id, pers_id], (err, rows, fields) =>{
        if(!err){
            res.json({status: 'Persona actualizada'});
        }else{
            console.log(err);
        }
    });
});

router.delete('/persona/:pers_id', (req,res)=>{
    const {pers_id} = req.params;
    
    connection.query(`DELETE FROM ingresos WHERE pers_id = ?`, [pers_id], (err, rows, fields) =>{
        if(!err){
            res.json({status: 'Persona eliminada'});
        }else{
            console.log(err);
        }
    })
})

module.exports= router;