const skills = [
    {id: 001, skill: 'Javascript', level: 'Good'},
    {id: 021, skill: 'HTML', level: 'Good'},
    {id: 321, skill: 'CSS', level: 'Good'},
    {id: 521, skill: 'jQuery', level: 'Good'},
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}