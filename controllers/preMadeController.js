'use strict'

exports.renderMain =  (req,res) => {
  //console.log("in the swController.renderMain")
  res.render('preMade',{
    user:req.user
  })
}
