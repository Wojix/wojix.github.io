const el = document.getElementById("time")

const render = () => {
  const d = new Date()
  const h = String((d.getUTCHours() + 9) % 24).padStart(2, "0")
  const m = String(d.getUTCMinutes()).padStart(2, "0")
  el.textContent = `${h}:${m}`
}

const sync = () => {
  render()
  const now = new Date()
  const wait =
    (60 - now.getUTCSeconds()) * 1000 -
    now.getUTCMilliseconds()

  setTimeout(() => {
    render()
    setInterval(render, 60000)
  }, wait)
}

sync()
