const Skill = require('../models/skill');

module.exports = {
    index,
    show
}

function index(req, res) {
    res.render('skills/index', {
        title: "Skills",
        skills: Skill.getAll()
    });
}

function show(req, res) {
    console.log(req.params.id);
    res.render('skills/show', {
        title: Skill.getOne(req.params.id).skill,
        skill: Skill.getOne(req.params.id),
    });
}