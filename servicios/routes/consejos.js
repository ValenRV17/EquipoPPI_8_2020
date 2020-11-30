const express = require('express');
const router = express.Router();

const connection = require('../db/db.js');

router.get('/consejos', (req,res)=>{

    connection.query('SELECT * FROM consejos', (err, rows, fields)=>{
        if (!err){
            res.json(rows);
        }   else{
            console.log(err);
        }
    });

});

router.post('/nuevo-consejo', (req, res)=>{

    const{titulo, texto_cons} = req.body;

    let consejo = [titulo, texto_cons];

    let nuevoConsejo = `INSERT INTO consejos (titulo, texto_cons) VALUES (?,?)`;

    connection.query(nuevoConsejo, consejo, (err, results, fields)=>{
        if (err){
            return console.error(err.message);
        }
        res.json({message: `Consejo ingresado`, })
    });
});

router.put('/consejo/:cons_id', (req, res)=>{
    const{titulo, texto_cons} = req.body;
    
    const{cons_id} = req.params;

    connection.query(`UPDATE consejos SET titulo=?, texto_cons=? WHERE cons_id=?`,
    [titulo, texto_cons, cons_id], (err, rows, fields) =>{
        if(!err){
            res.json({status: 'Consejo actualizado'});
        }else{
            console.log(err);
        }
    });
});

router.delete('/consejo/:cons_id', (req,res)=>{
    const {cons_id} = req.params;
    
    connection.query(`DELETE FROM consejos WHERE cons_id = ?`, [cons_id], (err, rows, fields) =>{
        if(!err){
            res.json({status: 'Consejo eliminado'});
        }else{
            console.log(err);
        }
    })
})

module.exports= router;