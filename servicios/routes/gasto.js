const express = require('express');
const router = express.Router();

const connection = require('../db/db.js');

router.get('/gastos', (req,res)=>{

    connection.query('SELECT * FROM gastos', (err, rows, fields)=>{
        if (!err){
            res.json(rows);
        }   else{
            console.log(err);
        }
    });

});

router.post('/nuevo-gasto', (req, res)=>{

    const{nombre_gasto, tipo_gasto, valor_gasto, usuario_id} = req.body;

    let gasto = [nombre_gasto, tipo_gasto, valor_gasto, usuario_id];

    let nuevoGasto = `INSERT INTO gastos (nombre_gasto, tipo_gasto, valor_gasto, usuario_id) VALUES (?,?,?,?)`;

    connection.query(nuevoGasto, gasto, (err, results, fields)=>{
        if (err){
            return console.error(err.message);
        }
        res.json({message: `Gasto ingresado`, })
    });
});

router.put('/gasto/:gasto_id', (req, res)=>{
    const{nombre_gasto, tipo_gasto, valor_gasto, usuario_id} = req.body;
    
    const{gasto_id} = req.params;

    connection.query(`UPDATE gastos SET nombre_gasto=?, tipo_gasto=?, valor_gasto=?, usuario_id=? WHERE gasto_id=?`,
    [nombre_gasto, tipo_gasto, valor_gasto, usuario_id, gasto_id], (err, rows, fields) =>{
        if(!err){
            res.json({status: 'Gasto actualizado'});
        }else{
            console.log(err);
        }
    });
});

router.delete('/gasto/:gasto_id', (req,res)=>{
    const {gasto_id} = req.params;
    
    connection.query(`DELETE FROM gastos WHERE gasto_id = ?`, [gasto_id], (err, rows, fields) =>{
        if(!err){
            res.json({status: 'Gasto eliminado'});
        }else{
            console.log(err);
        }
    })
})

module.exports= router;