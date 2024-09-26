const fs = require('fs/promises')
const resolveRoot = require('../resolve-root')
const firstCharUpperCase = require('../first-char-upper-case')

module.exports = async (layer, sliceName) => {
  const componentName = firstCharUpperCase(sliceName)
  const schemaName = `${sliceName}Schema`

  try {
    await fs.writeFile(
      resolveRoot('src', layer, sliceName, 'index.ts'),
      `export { ${componentName} } from './ui/${componentName}/${componentName}';
export { ${firstCharUpperCase(schemaName)} } from './model/types/${schemaName}';`
    )
  } catch (e) {
    console.log('Не удалось создать PUBLIC API')
  }
}
