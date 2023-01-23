// Color Picker Tool Js
const dynamicInputs = document.querySelectorAll('.team1-input-color-picker')

const team2dynamicInputs = document.querySelectorAll(
  '.team2-input-color-picker',
)

//handled updaten van de css root variabelen
const handleThemeUpdate = (cssVars) => {
  const root = document.querySelector(':root')
  const keys = Object.keys(cssVars)
  keys.forEach((key) => {
    root.style.setProperty(key, cssVars[key])
  })
}

//players left color pick
dynamicInputs.forEach((item) => {
  item.addEventListener('input', (e) => {
    const cssPropName = `--${e.target.getAttribute('data-id')}`
    console.log(cssPropName)
    handleThemeUpdate({
      [cssPropName]: e.target.value,
    })
  })
})

//players right color pick
team2dynamicInputs.forEach((item) => {
  item.addEventListener('input', (e) => {
    const cssPropName2 = `--${e.target.getAttribute('data-id')}`
    console.log(cssPropName2)
    handleThemeUpdate({
      [cssPropName2]: e.target.value,
    })
  })
})
