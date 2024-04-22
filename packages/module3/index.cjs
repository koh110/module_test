async function main() {
  const { esmbar } = await import('./esm_dir/index.js')
  console.log(esmbar)
}
main().catch(console.error)