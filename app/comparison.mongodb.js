use('MBDB')
// db.form.find();
// db.form.find({
//     "price":{$gt:"233"}
// })
// db.form.find({
//     categary:"student"
// })
// db.form.find({
//     price:{$gte:123, $lte:443}
// })
// db.form.find({
//     $or:[{categary:"student"},{price:{$lt:300}}]
// })
// db.form.find({},{name:1,price:1,_id:0})
// db.form.find().sort({price:-1}).limit(2)
db.form.updateOne(
    { "name": "alam" },       // filter
    { $set: { "name": "almo" } }  // update
)
