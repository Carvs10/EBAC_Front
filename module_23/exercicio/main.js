document.addEventListener("DOMContentLoaded", () => {
  const nameEl = document.querySelector("#name");
  const usernameEl = document.querySelector("#username");
  const avatarEl = document.querySelector("#avatar");
  const followingEL = document.querySelector("#following");
  const followersEl = document.querySelector("#followers");
  const reposEl = document.querySelector("#repos");
  const linkEL = document.querySelector("#link");

  fetch("https://api.github.com/users/carvs10")
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      nameEl.innerText = json.name;
      usernameEl.innerText = json.login;
      avatarEl.src = json.avatar_url;
      followingEL.innerText = json.following;
      followersEl.innerText = json.followers;
      reposEl.innerText = json.public_repos;
      linkEL = json.html_url;
    });
});
