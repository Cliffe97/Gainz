'use strict'

exports.renderMain =  (req,res) => {
  console.log("in the preMade.renderMain")
  res.render('preMade',{
    user:req.user
  })
}
