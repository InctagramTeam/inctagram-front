const fs = require('fs/promises')
const resolveRoot = require('../resolve-root')
const firstCharUpperCase = require('../first-char-upper-case')

module.exports = async (layer, sliceName) => {
  const resolveUIPath = (...segments) => resolveRoot('src', layer, sliceName, 'ui', ...segments)

  const createUIDir = async () => {
    try {
      await fs.mkdir(resolveUIPath())
    } catch (e) {
      console.log('Не удалось создать UI директорию')
    }
  }

  const createComponent = async () => {
    try {
      const componentName = firstCharUpperCase(sliceName)
      await fs.mkdir(resolveUIPath(componentName))
      await fs.writeFile(resolveUIPath(componentName, `${componentName}.tsx`))
    } catch (e) {
      console.log('Не удалось создать компонент. Создайте пожалуйста сами:)')
    }
  }

  await createUIDir()
  await createComponent()
}
