const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
    },
];

function hasThreeLanguages(user){
    return user.languages.length >= 3
}

let threeLanguages = users.filter(hasThreeLanguages);




function userEmails(user){
    return user.email
}

let emailString = users.map(userEmails);


let changeObj = users.reduce((obj, obVal) => {
    obj [obVal.id] = obVal;
    return obj;
}, {});
console.log(changeObj);


