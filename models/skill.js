const skills = [
    {id: 001, name: 'Javascript', level: 'Good', experience: '10 years'},
    {id: 021, name: 'HTML', level: 'Okay', experience: '7 years'},
    {id: 321, name: 'CSS', level: 'Bad', experience: '2 years'},
    {id: 521, name: 'jQuery', level: 'Not bad', experience: '5 years'},
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    skill.id = Date.now() % 10000;
    skill.level = 'Beginner';
    skill.experience = '0 years';
    skills.push(skill);
}

function deleteOne(id) {
    id = parseInt(id);
    skills.splice(skills.findIndex(skill => skill.id === id), 1);
}