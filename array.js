{
  const array = ["adan", "pradana", "rizka"];
  array.forEach((value, index) => console.log(`${index} : ${value}`));
}
//arrau queue or FIFO First In First Out
{
  const queue = [];

  queue.push("adan");
  queue.push("pradana");
  queue.push("rizka");

  console.log(queue.shift());
  console.log(queue.shift());
  console.log(queue.shift());
}

//array stack or LIFO Last In First Out
{
  const stack = [];

  stack.push("adan");
  stack.push("pradana");
  stack.push("rizka");

  console.log(stack.pop());
  console.log(stack.pop());
  console.log(stack.pop());
}

//array search
{
  const arr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6];

  console.log(arr.find((value) => value > 3));
  console.log(arr.findIndex((value) => value > 3));
  console.log(arr.includes(8));
  console.log(arr.indexOf(5));
  console.log(arr.lastIndexOf(5));
}

{
  //array filter

  const filter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const odd = filter.filter((filter) => filter % 2 === 1);
  const even = filter.filter((filter) => filter % 2 === 0);

  console.log(odd);
  console.log(even);
}

{
  //array transform

  const toNames = ["adan", "pradana", "rizka", "haris"];
  const namesUpper = toNames.map((value) => value.toUpperCase());
  console.log(namesUpper);

  const namesReduce = toNames.reduce((before, value) => before + " " + value);
  console.log(namesReduce);

  const rightReduce = toNames.reduceRight((before, value) => before + " " + value);
  console.log(rightReduce);

  const numberArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const summary = numberArr.reduce((before, value) => before + value);
  console.log(summary);
}
