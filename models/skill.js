const skills = [
    {id: 001, skill: 'Javascript', level: 'Good', experience: '10 years'},
    {id: 021, skill: 'HTML', level: 'Okay', experience: '7 years'},
    {id: 321, skill: 'CSS', level: 'Bad', experience: '2 years'},
    {id: 521, skill: 'jQuery', level: 'Not bad', experience: '5 years'},
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