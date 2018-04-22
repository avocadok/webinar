let current = 'red'

module.exports =  {
  change: () => {
    current = 'yellow'
  },

  getCurrent: () => {
    return current
  },
}
