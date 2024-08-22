const db = require('../config/db');


exports.createUser = (req , res) => {

    const { id , username , emailid , password} = req.body;

    if( !id || !username|| !emailid || !password){

        return res.status(400).send({error: true , message: 'Please provide id , name , email and password '});

    }

    const query = 'INSERT INTO user ( id , username , password , emailid) VALUES (?,?,?,?)';
    db.query(query , [ id , username , emailid , password], (error , results) => {

        if(error){

            if(error.code === 'ER_DUP_ENTRY'){
                return res.status(409).send({error: true , message: 'Email or id already Exists'});
            }
        }

        res.status(201).send({ error: false, data: results, message: 'New user has been created Successfully.' });

    });
};
