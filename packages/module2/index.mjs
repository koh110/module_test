// index.mjsはESMなのでrequireではなくimportを使う
// import { bar } from './foo.mjs'
import { bar } from './foo.cjs'
console.log(bar)
