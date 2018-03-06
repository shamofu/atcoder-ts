
import { main } from '../main'

const spyLog = jest.spyOn(console, 'log')
spyLog.mockImplementation((x) => x)
afterEach(() => {
  spyLog.mockClear()
})

test('Judge 1', () => {
  main('1\n2 3\ntest')
  expect(spyLog.mock.calls[0][0]).toEqual('6 test')
})

test('Judge 2', () => {
  main('72\n128 256\nmyonmyon')
  expect(spyLog.mock.calls[0][0]).toEqual('456 myonmyon')
})
