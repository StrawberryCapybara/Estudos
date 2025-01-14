document.addEventListener('DOMContentLoaded', function(){
    const avatar = document.querySelector('#avatar');
    const name = document.querySelector('#name');
    const username = document.querySelector('#username');
    const repositories = document.querySelector('#repositories');
    const followers = document.querySelector('#followers');
    const following = document.querySelector('#following');
    const link = document.querySelector('#link');

    fetch('https://api.github.com/users/StrawberryCapybara')
        .then(function(resposta){
            return resposta.json()
        })
        .then(function(json){
            avatar.src = json.avatar_url;
            name.innerText = json.name;
            username.innerText = json.login;
            repositories.innerText = json.public_repos;
            followers.innerText = json.followers;
            following.innerText = json.following;
            link.href = json.html_url;
        })
    .catch(function(erro){
        alert("Algo deu errado ao carregar as informações, tente novamente mais tarde.");
    })
})