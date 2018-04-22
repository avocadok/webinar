import test from 'ava'
import signal from '../src/signal'

test('start with red light', t =>{
  const light = signal.getCurrent()

  t.is(light, 'red')
})


test('changes to yellow as second', t =>{
 signal.change()

 const light = signal.getCurrent()

 t.is(light, 'yellow')
})

test('changes to yellow as second', t =>{
  signal.change()

  const light = signal.getCurrent()

  t.is(light, 'green')
})

test('changes to yellow as fourth', t =>{
  signal.change()

  const light = signal.getCurrent()

  t.is(light, 'yellow')
})
