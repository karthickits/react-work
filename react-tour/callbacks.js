
function firstcallback(response) {
    console.log(response.data.repos_url);
    return axios.get(response.data.repos_url);
}

function secondcallback(response) {
    console.log(response.data[0].owner.avatar_url);

    document.getElementById("avatarId").setAttribute("src",response.data[0].owner.avatar_url ); 

    return axios.get(response.data[0].owner.avatar_url);
}


axios.get('https://api.github.com/users/prakashm88')
.then(firstcallback)
        .then(secondcallback)
    .catch((error) => {
        console.log(error);
        }) ;