const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,

}

function index(req, res) {
    res.render('skills/index', {
        title: "Skills",
        skills: Skill.getAll()
    });
}

function show(req, res) {
    const skill = Skill.getOne(req.params.id);
    console.log('Show here');
    res.render('skills/show', {
        title: skill.name,
        skill: skill,
    });
}

function newSkill(req, res) {
    res.render('skills/new', { title: 'Add a new skill! '});
}

function create(req, res) {
    console.log(req.body);
    Skill.create(req.body);
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills')
}