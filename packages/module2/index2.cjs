async function main() {
  const { bar } = await import('./foo.mjs')
  console.log(bar)
}
main().catch(console.error)
