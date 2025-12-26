const toggle = document.getElementById("themeToggle")
const root = document.documentElement

toggle.checked = root.classList.contains("dark")

toggle.addEventListener("change", () => {
  const theme = toggle.checked ? "dark" : "light"

  root.classList.toggle("dark", theme === "dark")
  root.classList.toggle("light", theme === "light")
  root.style.colorScheme = theme
  localStorage.setItem("theme", theme)
})
