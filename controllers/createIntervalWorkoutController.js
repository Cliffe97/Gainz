'use strict'
const IntervalWorkout = require( '../models/AddIntervalWorkout' );
console.log("loading the createIntervalWorkout Controller")

exports.renderMain =  (req,res) => {
  //console.log("in the swController.renderMain")
  res.render('createIntervalWorkout')
}

exports.saveIntervalWorkout = ( req, res ) => {
  console.log("in saveIntervalWorkout!")
  console.dir(req)
  let intervalWorkout = new IntervalWorkout( {
    workoutName: req.body.workoutName,
    timeDuration: req.body.timeDuration
  } )

  console.log("intervalWorkout = "+ intervalWorkout)

  intervalWorkout.save()
    .then( () => {
      res.redirect( '/createIntervalWorkout' );
    } )
    .catch( error => {
      res.send( error );
    } );
};
