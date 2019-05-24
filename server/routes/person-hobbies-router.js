const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//   '/all'
router.get('/all', (req,res) => {
    const queryString = `SELECT * FROM "person"
                    JOIN "person_hobbies" ON "person"."id"="person_hobbies"."person_id"
                    JOIN "hobby" ON "person_hobbies"."hobby_id"="hobby"."id";`;

    pool.query(queryString)
        .then((response) => {
            res.send(response.rows);
        })
        .catch((err) => {
            res.sendStatus(500);
        })
});

router.get('/:person', (req,res) => {
    const queryString = `SELECT "name", "hobby_name" FROM "person"
                JOIN "person_hobbies" ON "person"."id"="person_hobbies"."person_id"
                JOIN "hobby" ON "person_hobbies"."hobby_id"="hobby"."id"
                WHERE "name"=$1;`;

    pool.query(queryString, [req.params.person])
        .then((response) => {
            res.send(response.rows);
        })
        .catch((err) => {
            res.sendStatus(500);
        })
});

// ?hobby=""
router.get('/', (req,res) => {
    const queryString = `SELECT "name", "hobby_name" FROM "person"
                JOIN "person_hobbies" ON "person"."id"="person_hobbies"."person_id"
                JOIN "hobby" ON "person_hobbies"."hobby_id"="hobby"."id"
                WHERE "hobby_name"=$1;`;

    pool.query(queryString, [req.query.hobby])
        .then((response) => {
            res.send(response.rows);
        })
        .catch((err) => {
            console.log('err', err);
            res.sendStatus(500);
        })
});

router.post('/add', (req,res) => {
    const queryString = `INSERT INTO "person_hobbies" ("person_id", "hobby_id")
                    VALUES ($1, $2);`;

    pool.query(queryString, [req.body.personId, req.body.hobbyId])
        .then((response) => {
            res.sendStatus(201);
        })
        .catch((err) => {
            res.sendStatus(500);
        })
});


module.exports = router;