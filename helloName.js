function hello(name) {
  name = name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : "World";
  return `Hello, ${name}!`;
}
