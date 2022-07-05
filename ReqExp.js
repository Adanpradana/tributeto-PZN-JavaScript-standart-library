{
  const reg = /adan/;
  //literal regex

  //object class regEx
  const regex = new RegExp("eko");

  //obejct class RegExp
  const regex2 = new RegExp(/adan/);
}
{
  const name = " pradana rizka haris pradana";
  const regex3 = new RegExp(/Adan/i);

  const result = regex3.exec(name);
  console.log(result);
  const test = regex3.test(name);
  console.log(test);
}
{
  //regExp Modifier
  const nama = " moh Rizka haris Pradana";
  const search = /Adan/g;
  const search2 = /Rizka/i;

  let result;
  while ((result = search.exec(nama) !== null)) {
    console.log(result);
  }
}

{
  // advance RegEx
  const searchName = " Adan eko edo adu ada ida adi uda ado oda ";
  const regExSearch = /ad[aiueo]/gi;
  let result;
  while ((result = regExSearch.exec(searchName) !== null)) {
    console.log(result);
  }
}
{
  //regex in string
  const name3 = " uda uni adi Adan eko edo adu ada ida adi uda ado oda ";
  const regexp = /ad[aiueo]/gi;

  //matching
  const matching = name3.match(regexp);
  console.log(matching);
  //search regexp
  const searchMe = name3.search(regexp);
  console.log(searchMe);

  //replace
  const replace = name3.replace(regexp);
  console.log(replace, "hehe");

  //replace all
  const replaceAll = name3.replaceAll(regexp);
  console.log(replaceAll, "siapa saya");

  //split
  const splitting = /ad/gi;
  const split = name3.split(splitting);
  console.log(split);
}
