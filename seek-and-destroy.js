function destroyer(arr) {
  let args = [...arguments].slice(1);
  return arr.filter(item => !args.includes(item));
}
