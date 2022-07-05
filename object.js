{
  const obj = {
    firstName: "adan",
    lastName: "pradana",
  };
  //freeze static ,method object
  Object.freeze(obj);

  obj.firstName = "aadna";
  delete obj.lastName;

  console.log(obj);
  //seal value tidak bisa diubah
}

{
  //object assign
  const target = { firstName: "adan" };
  const source = { lastName: "pradana" };

  Object.assign(source, target);
  console.log(source);
  console.log(target);
}

{
  //object property values & object names

  const object = {
    firstName: "rizka",
    lastName: "pradana",
  };

  const values = Object.values(object);
  const get = Object.getOwnPropertyNames(object);
  console.log(values);
  console.log(get);
}
