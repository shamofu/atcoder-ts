
import { main } from '../main'
const samples = require('./samples')

describe('Automated Judging', () => {
  const spyLog = jest.spyOn(console, 'log')
  spyLog.mockImplementation((x) => x)
  afterEach(() => {
    spyLog.mockClear()
  })

  Object.keys(samples).forEach((key) => {
    test(key, () => {
      main(samples[key].input)
      expect(spyLog.mock.calls[0][0]).toEqual(samples[key].output)
    })
  })
})
