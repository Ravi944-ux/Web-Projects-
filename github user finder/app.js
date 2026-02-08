async function getUser() {
  const username = document.getElementById("username").value.trim();
  const result = document.getElementById("result");

  if (username === "") {
    result.innerHTML = `<p class="error">Please enter a username</p>`;
    return;
  }

  // Loading animation
  result.innerHTML = `<div class="loading"></div>`;

  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      result.innerHTML = `<p class="error">User not found ❌</p>`;
      return;
    }

    const data = await response.json();

    result.innerHTML = `
      <div class="profile">
        <img src="${data.avatar_url}" alt="Profile">
        <h3>${data.name || data.login}</h3>
        <p>${data.bio || "No bio available"}</p>

        <div class="stats">
          <div>Repos<br><b>${data.public_repos}</b></div>
          <div>Followers<br><b>${data.followers}</b></div>
          <div>Following<br><b>${data.following}</b></div>
        </div>

        <a href="${data.html_url}" target="_blank">View Profile →</a>
      </div>
    `;
  } catch (error) {
    result.innerHTML = `<p class="error">Network error ⚠️</p>`;
  }
}
