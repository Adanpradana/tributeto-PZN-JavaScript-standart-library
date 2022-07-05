const map = new Map();

map.set("name", "rizka haris");
map.set("address", "jakarta");
console.log(map);

const get = map.get("name");
console.log(get);

const getAdress = map.get("address");
console.log(getAdress);

const getHobby = map.get("hobbies");
console.log(getHobby);

map.forEach((value, key) => console.log(`hello ${key} and ${value}`));
