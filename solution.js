function checkSum(data) {
  let result = []
  data.forEach(arr => {
    x = Math.min(...arr);
    y = Math.max(...arr)
    result.push(y-x)
  })
   return result.reduce((a, b) => a + b, 0)
}
