const express = require('express');
const router = express.Router();

const connection = require('../db/db.js');

router.get('/ingresos', (req,res)=>{

    connection.query('SELECT * FROM Ingresos', (err, rows, fields)=>{
        if (!err){
            res.json(rows);
        }   else{
            console.log(err);
        }
    });

});

router.post('/nuevo-ingreso', (req, res)=>{

    const{nombre_ingre, tipo_ingre, valor_ingre, usuario_id} = req.body;

    let ingreso = [nombre_ingre, tipo_ingre, valor_ingre, usuario_id];

    let nuevoIngreso = `INSERT INTO Ingresos (nombre_ingre, tipo_ingre, valor_ingre, usuario_id) VALUES (?,?,?,?)`;

    connection.query(nuevoIngreso, ingreso, (err, results, fields)=>{
        if (err){
            return console.error(err.message);
        }
        res.json({message: `Ingreso resgistrado`, })
    });
});

router.put('/ingreso/:ingres_id', (req, res)=>{
    const{nombre_ingre, tipo_ingre, valor_ingre, usuario_id} = req.body;
    
    const{ingres_id} = req.params;

    connection.query(`UPDATE Ingresos SET nombre_ingre=?, tipo_ingre=?, valor_ingre=?, usuario_id=? WHERE ingre_id=?`,
    [nombre_ingre, tipo_ingre, valor_ingre, usuario_id, ingres_id], (err, rows, fields) =>{
        if(!err){
            res.json({status: 'Ingreso actualizado'});
        }else{
            console.log(err);
        }
    });
});

router.delete('/ingreso/:ingres_id', (req,res)=>{
    const {ingres_id} = req.params;
    
    connection.query(`DELETE FROM Ingresos WHERE ingres_id = ?`, [ingres_id], (err, rows, fields) =>{
        if(!err){
            res.json({status: 'Ingreso eliminado'});
        }else{
            console.log(err);
        }
    })
})

module.exports= router;