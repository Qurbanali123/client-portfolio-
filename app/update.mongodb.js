use('MBDB');
db.form.updateOne({"name":"fazal"},
                 {$set:{"name":"qurban ali"}}
)
db.form.updateMany(
    {"category":"Electronics"},
    {$inc:{"stock":20}}
)
db.form.updateMany(
    {"category":"Electronics"},
    {$set:{"category":"Digitals"}}
)
db.form.updateOne(
    {"name":"Gaming Laptop"},
    {$push:{"tags":"appdogon"}}
)