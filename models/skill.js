const skills = [
    {id: 001, name: 'Javascript', level: 'Pro', experience: '10 years'},
    {id: 021, name: 'HTML', level: 'Intermediate', experience: '7 years'},
    {id: 321, name: 'CSS', level: 'Intermediate', experience: '2 years'},
    {id: 521, name: 'jQuery', level: 'Beginner', experience: '5 years'},
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update,
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
    skill.experience = skill.experience + " years";
    skills.push(skill);
    console.log(skill);
}

function deleteOne(id) {
    id = parseInt(id);
    skills.splice(skills.findIndex(skill => skill.id === id), 1);
}

function update(updateData, id) { 
    const skill = skills[skills.findIndex(skill => skill.id === parseInt(id))]
    skill.name = updateData.name;
    skill.level = updateData.level;
    skill.experience = updateData.experience + " years";
}