const router = require('express').Router();
let Exercise = require('../model/exercise.model');

router.route('/').get((req, res) =>{
    Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) =>{
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const contactNo = Number(req.body.contactNo);
    const gender = req.body.gender;
    const country = req.body.country;

    const newExercise = new Exercise({
        firstname,
        lastname,
        contactNo,
        gender,
        country,
    });

    newExercise.save()
    .then(() => res.json('Exercise added!'))
    .catch(err => res.status(400).json('Error: ' + err));

});



module.exports = router;