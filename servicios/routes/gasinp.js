const express = require('express');
const router = express.Router();

const connection = require('../db/db.js');

router.get('/gasinp', (req,res)=>{

    connection.query('SELECT * FROM gasinps', (err, rows, fields)=>{
        if (!err){
            res.json(rows);
        }   else{
            console.log(err);
        }
    });

});

router.post('/nuevo-gasinp', (req, res)=>{

    const{nombre_gasinp, tipo_gasinp, valor_gasinp, usuario_id} = req.body;

    let gasinp = [nombre_gasinp, tipo_gasinp, valor_gasinp, usuario_id];

    let nuevoGasinp = `INSERT INTO gasinps (nombre_gasinp, tipo_gasinp, valor_gasinp, usuario_id) VALUES (?,?,?,?)`;

    connection.query(nuevoGasinp, gasinp, (err, results, fields)=>{
        if (err){
            return console.error(err.message);
        }
        res.json({message: `Gasto sin planificar ingresado`, })
    });
});

router.put('/gasinp/:gasinp_id', (req, res)=>{
    const{nombre_gasinp, tipo_gasinp, valor_gasinp, usuario_id} = req.body;
    
    const{gasinp_id} = req.params;

    connection.query(`UPDATE gasinps SET nombre_gasinp=?, tipo_gasinp=?, valor_gasinp=?, usuario_id=? WHERE gasinp_id=?`,
    [nombre_gasinp, tipo_gasinp, valor_gasinp, usuario_id, gasinp_id], (err, rows, fields) =>{
        if(!err){
            res.json({status: 'Gasto sin planificar actualizado'});
        }else{
            console.log(err);
        }
    });
});

router.delete('/gasinp/:gasinp_id', (req,res)=>{
    const {gasinp_id} = req.params;
    
    connection.query(`DELETE FROM gasinps WHERE gasinp_id = ?`, [gasinp_id], (err, rows, fields) =>{
        if(!err){
            res.json({status: 'Gasto sin planificar eliminado'});
        }else{
            console.log(err);
        }
    })
})

module.exports= router;