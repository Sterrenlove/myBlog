# vue开发中遇到的问题

## vue 封装金额分割符
- 在utils文件新建一个文件夹filter.js
```javascript
function nums(num) {
  num = num.toString().split('.')
  const arr = num[0].split('').reverse()
  let res = []
  for (let i = 0, len = arr.length; i < len; i++) {
    if (i % 3 === 0 && i !== 0) {
      res.push(',')
    }
    res.push(arr[i])
  }
  res.reverse()
  if (num[1]) {
    // 如果有小数的话添加小数部分
    res = res.join('').concat('.' + num[1])
  } else {
    res = res.join('')
  }
  return res
}
export default {
  nums
}
```
- 在main.js去引用
```javascript
import filters from '../src/utils/filter'
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
```
- 在需要分割的页面
```javascript
{{ num | nums }}
```