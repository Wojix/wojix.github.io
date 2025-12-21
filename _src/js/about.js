const toggle = document.getElementById("themeToggle")
const isDark = document.documentElement.classList.contains("dark")

toggle.checked = isDark

toggle.addEventListener("change", () => {
  document.documentElement.classList.toggle("dark", toggle.checked)
  document.documentElement.classList.toggle("light", !toggle.checked)
  document.documentElement.style.colorScheme = toggle.checked ? "dark" : "light"
  localStorage.setItem("theme", toggle.checked ? "dark" : "light")
})
