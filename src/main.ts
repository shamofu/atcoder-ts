
export const main = (input: string) => {
  const lines = input.split('\n')
  const tmp = lines[1].split(' ')
  const a = parseInt(lines[0], 10)
  const b = parseInt(tmp[0], 10)
  const c = parseInt(tmp[1], 10)
  const s = lines[2]
  console.log(`${a + b + c} ${s}`)
}

if (process.env.NODE_ENV !== 'test') {
  main(require('fs').readFileSync('/dev/stdin', 'utf8'))
}
