const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */

// this will GET the timesheet from the database
router.get('/', (req, res) => {
    // GET route code here

    if (req.isAuthenticated()) {
        pool
            .query(`select * from timesheet;`)
            .then((results) => res.send(results.rows))
            .catch((error) => {
                console.log('Error making SELECT for secrets:', error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403); // Forbidden
    };
});

// this will POST the timesheet Form inputs to the database
router.post('/', (req, res) => {
    let queryText = `insert into timesheet ("user_id","date","client_name","in","out","mileage","notes") values
    ($1,$2,$3,$4,$5,$6,$7);
    `;
    console.log('req.user.id is', req.user.id)
    //     let queryInserts = [req.user.id,1,'joe',3,4,323,'fun times'];
    let queryInserts = [req.user.id, req.body.date, req.body.client_name, req.body.in, req.body.out, req.body.mileage, req.body.notes];
    if (req.isAuthenticated()) {
        pool
            .query(queryText, queryInserts)
            .then((results) => {
            })
            .catch((error) => {
                console.log('error in post server', error);
                res.sendStatus(500);
            });
    } else {
        res.sendStatus(403);
    }
});


router.put('/:id', (req, res) => {
    console.log('/shelf put route', req.body);
    const queryText = `update timesheet set 
    "date" = $1,
    "client_name" = $2,
    "in" = $3,
    "out" = $4,
    "mileage" = $5,
    "notes" = $6
    where id = $7;`;

    const queryValues = [req.body.date, req.body.client_name,req.body.in,req.body.out,req.body.mileage,req.body.notes, req.params.id];

    pool.query(queryText, queryValues).then(() => {
        res.sendStatus(200)
    }).catch((error) => {
        console.log('Error updating item', error);
        res.sendStatus(500);
    })
});

module.exports = router;
