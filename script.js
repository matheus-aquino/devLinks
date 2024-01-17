function toggleMode() {
  const html = document.documentElement

  /*
  if(html.classList.contains('light')) {
    html.classList.remove('light')
  }
  else {
    html.classList.add('light')
  }
  */
  html.classList.toggle("light")
  
  //Pegar a tag img
  const img = document.querySelector("#profile img")
  const name = document.getElementById("@maquino")

  //Substituir a imagem
  if(html.classList.contains('light')) {
    //Se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png") /* serve para 
    adicionar ou alterar um atributo */
    img.setAttribute("alt", "Nova imagem de perfil")
    name.innerHTML = "@maquino_diurno"
  } else {
    //Se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
    name.innerHTML = "@maquino"
  }
}