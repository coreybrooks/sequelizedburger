var db = require("../models");

module.exports = function(app) {

app.get("/", function(req,res) {
    db.Burger.findAll({}).then(function(Burger) {
        var hbsObject = {
            Burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

app.post("/", function(req, res) {
    db.Burger.create({
        burger_name: req.body.burger_name,
        devoured: req.body.devoured
    }).then(function(Burger) {
            res.redirect("/");
        });
});

app.put("/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition: " + condition);

    db.Burger.update({
        devoured: req.body.devoured
    }, condition, function() {
        res.redirect("/");
    });
});

}