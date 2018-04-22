let current = 'red'

module.exports =  {
  change: () => {
    if (current === 'red'{
      current = 'yellow'
    }else{
      current = 'green'
    }
  },

  getCurrent: () => {
    return current
  },
}
