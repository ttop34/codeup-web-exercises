function wait(number){
    return new Promise((resolve) => {
        setTimeout(() => {
                resolve();
        }, number)
})
}

wait(1000).then(() => console.log("you'll see this after 1 second"));
wait(6000).then(() => console.log("you'll see this after 6 seconds"));

function getLastCommit(username) {
 let url = `https:api.github.com/users/${username}/repos`;
    return fetch(url).then((response)=> response.json())
        .then((repos) => repos.map((repo) => repo.pushed_at));

}

getLastCommit('ttop34').then((repoDates) => console.log(repoDates));





// .then(() => fetch(`https:api.github.com/repos/${username}/:repo/git/commits/:sha`, {
//                 headers: {'Authorization': 'token 3c640d7467d52bc782478156a71a63c3e8a7c9ae'}
//             }))
