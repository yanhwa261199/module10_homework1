let map = new Map();
map.set("1", "string");
map.set(1, "number"); 
map.set(true, "boolean");
console.log(map.get(1));
console.log(map.get("1"));