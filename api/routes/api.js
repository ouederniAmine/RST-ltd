const router = require('express').Router();
const mysql = require('mysql');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {users} = require('../database');


require('dotenv').config();
var client = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Med1212809@",
    database: "rst"
  });




router.get('/checkadmin/:id', async (req, res) => {
    const {id} = req.params;
    const query = `SELECT * FROM admins WHERE adminid = '${id}'`;
    client.query(
        query,
        (err, result) => {
            if (result.length === 0) {
                res.json({isAdmin: false});
            } else {
                res.json({isAdmin: true});
            }
        }
      );    
}); 
router.get('/clients', async (req, res) => {
    try {
        const query = `SELECT * FROM users`;
        client.query(
            query,
            (err, result) => {
                res.json(result);
            }
          );
      
    } catch (e) {
        res.status(500).json({message: 'Something went wrong'});
    }
});
router.post('/invoices', async (req, res) => {
    try {
        // insert into table invoices the values of columns : clientid, responses, date, pdflink
        const {clientid, responses, pdflink} = req.body;
        const date = new Date();
        const query = `INSERT INTO invoices (clientid, responses, date, pdflink) VALUES ('${clientid}', '${responses}', '${date.toDateString()}', '${pdflink}')`;
        const result = await client
        .query
        (query);
        res.json(result.rows);
    } catch (e) {
        console.log(e)

        res.status(500).json({message: 'Something went wrong'});
    }
});



module.exports = router;
