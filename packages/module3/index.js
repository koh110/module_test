import { bar } from './foo.js'
console.log(bar)

// ./cjs_dir/index.js は `.js` だがpackage.jsonでCommonJS扱いになっているのでESMからCommonJSを読み込んでいることになり正常に動作する
import { cjsbar } from './cjs_dir/index.js'
console.log(cjsbar)
