const Skill = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update,
}

function index(req, res) {
    res.render('skills/index', {
        title: "Skills",
        skills: Skill.getAll()
    });
}

function show(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render('skills/show', {
        title: skill.name,
        skill: skill,
    });
}

function newSkill(req, res) {
    res.render('skills/new', { title: 'Add a new skill! '});
}

function create(req, res) {
    Skill.create(req.body);
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills')
}

function edit(req, res) {
    res.render('skills/edit', {
        title: 'Edit your skill',
        skill: Skill.getOne(req.params.id),
    })
}

function update(req, res) {
    Skill.update(req.body, req.params.id);
    res.redirect(`/skills/${req.params.id}`)
}