let a = {
  mode: 'slide',
  pagination: false,
  box: {
    rows: 6,
    cols: 3
  },
  loop: true
}

let b = {
  mode: 'flip',
  pagination: true,
  box: {
    rows: 4,
    cols: 1
  }
}

console.log(Object.assign({}, a, b))