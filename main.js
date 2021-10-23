const linksSocialMedia = {
  github: 'joaoteodev',
  youtube: 'channel/UCVtUTKyT0dk6C0UMqmSsBHQ/featured',
  twitter: 'goytten',
  instagram: 'joaoteodev'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userGitHubLink.href = data.html_url
      userImage.src = data.avatar_url
      userGitHubLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
