const express = require('express');
const router = express.Router();
const config = require('../config.js');
const sql = require('mysql');
  
router.use(express.json());
router.use(express.urlencoded({ 'extended' : false }));
// create connection using database credentials stored in config.js file
  let pool = sql.createPool({
        connectionLimit:20,
        host : config.host,
        user : config.user,
        password : config.password,
        database : config.database,
        port: 3306
    });

    router.post('/signup', (req, res) => {
      console.log('hit add user route');

      let user = req.body;
  
      pool.getConnection((err, connection) => {
          if (err) throw err;
  
          let query = `INSERT INTO user(first_name, last_name, password, role, permissions, avatar) VALUES('${user.username}', 'test', '${user.password}', 0, 3, '')`;
  
          connection.query(query, (err, result) => {
              connection.release();
  
              if (err) throw err;
  
              console.log(result);
  
              res.json({action: 'added'});
          })
      })
    });
    router.post('/getone',(req, res) => {
      console.log(`hit the user route: the user is ${req.body}`)
      //res.end('done');

      pool.getConnection((err, connection) => {
        if (err) throw err;

        //getting user from incoming route request ( the data passed from front end)
        let currentUser = req.body,

        //create an object to store the login attempt results (pass/fails)
          loginResult = {};

        let query = `SELECT first_name, password FROM user WHERE first_name="${currentUser.username}"`;

        // run a query, get a user (or an error)
        connection.query(query, function(error, user) {
            connection.release();

            if (error) throw error;
            if (!user[0]){
              loginResult.action = "add";
            }

            else if (user[0].password !== currentUser.password) {
              loginResult.field = "password";
              loginResult.action= "retry";

            } else {
              loginResult.action = "antheticate";
            }

            res.json(loginResult);
        })
    })
    
    })
    router.get('/getall', (req, res) => {
      pool.getConnection((err, connection) => {
          if (err) throw err;
  
          // run a query, get some results (or an error)
          connection.query('SELECT * FROM user', function(error, results) {
              connection.release();
  
              if (error) throw error;
              
            results.forEach(result =>{
              delete result.password;
              delete results.last_name;

              if (!result.avatar) {
                result.avatar = "temp_avatar.jpg";
              }
            })

              console.log(results);
              res.json(results);
          })
      })
  })

    module.exports = router;