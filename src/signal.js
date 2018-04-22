let current = 'red'

module.exports =  {
  change: () => {
    if (current === 'red') {
      current = 'yellow'
    } else if (current === 'yellow') {
      current = 'green'
    } else if (current === 'green') {
      current = 'yellow'
    }
  },

  getCurrent: () => {
    return current
  },
}
