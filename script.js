function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto do Anderson Kramin com barba e camisa colorida e óculos escuros na praia"
    )
  } else {
    img.setAttribute("src", "assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto do Anderson Kramin Sorrindo com barba e camisa rosa"
    )
  }
}
