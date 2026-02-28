use('MBDB')
db.form.find(
  {'stock':{$gt:10,$lt:2000} //And Operator
   } )
db.form.find({$or:[
      {category: "Electronics"},{"stock":{$gte:33}} //or operator
]

})
db.form.find({},{"category": 1,"tags":1,_id:0}) //select specific field
db.form.find().sort({'category':-1}).limit(2)