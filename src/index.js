module.exports = function check(str, bracketsConfig) {
  const open = []
  const pairs = {}
  bracketsConfig.forEach((item) => {
      open.push(item[0])
      let key = item[1]
      let value = item[0]
      pairs[key] = value
  })
  
  let arr = [];
  
  for (let i = 0; i < str.length; i++) {
    let curr = str[i]
    if (arr[arr.length - 1] === curr && pairs[curr] === curr) {
      arr.pop()
    }
    else if (open.includes(curr)) {
       arr.push(curr)
    }
    else {
       if (arr.length === 0) {
          return false
       }

          let last = arr[arr.length - 1]
          if (pairs[curr] === last) {
             arr.pop()
          }
          else {
             return false
          }
    }
  }
  return arr.length === 0
}