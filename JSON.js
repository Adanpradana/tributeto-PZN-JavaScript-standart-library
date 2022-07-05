const person = {
  firstName: "adan",
  lastName: "pradana",
  address: {
    country: "indonesia",
    state: " Sumenep",
  },
  hobbies: ["coding", "travelling", "singAlong"],
};

const json = JSON.stringify(person);
console.log(json);

const string = JSON.parse(json);
console.log(string);
