const firstCharUpperCase = require('../first-char-upper-case')

module.exports = sliceName => `export interface ${firstCharUpperCase(sliceName)}Schema {
    
}`
