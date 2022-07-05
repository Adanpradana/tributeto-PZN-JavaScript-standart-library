{
  //epoch = 1 januari 1970
  const date = new Date();
  console.log(date);

  const date1 = new Date(2022, 9, 10);
  console.log(date1);
  const date2 = new Date(2020, 10, 10, 16, 15, 9, 123);
  console.log(date2);

  const mimlis = new Date(1656852488720);
  console.log(mimlis);
}
{
  //epoch = 1 januari 1970
  //convert to dateUNIX
  const date = new Date();
  console.log(date.getTime());

  const date1 = new Date(2022, 9, 10);
  console.log(date1.getTime());
  const date2 = new Date(2020, 10, 10, 16, 15, 9, 123);
  console.log(date2.getTime());

  const mimlis = new Date(1656852488720);
  console.log(mimlis.getTime());
}

{
  //parsing date
  const parsing = Date.parse("2022-07-10T08:45:45.123+07:00");
  const dateParsing = new Date(parsing);

  console.log(dateParsing);
}

{
  const getDate = new Date();

  console.log(getDate.getFullYear());
  console.log(getDate.getMonth());
  console.log(getDate.getDate());
  console.log(getDate.getHours());
  console.log(getDate.getMinutes());
  console.log(getDate.getSeconds());
  console.log(getDate.getMilliseconds());
  console.log(getDate.getTimezoneOffset());
}
