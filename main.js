import LinkedList from "./linked_list.js";

function main() {
  // example uses class syntax - adjust as necessary
  const list = new LinkedList();

  list.append("dog");
  list.append("cat");
  list.append("parrot");
  list.append("hamster");
  list.append("snake");
  list.append("turtle");

  console.log(list.toString());

  console.log(`Size: ${list.size()}`);
  console.log('Tail:');
  console.log(list.tail());
  console.log(`At 0: ${list.at(0).value}`);
  console.log(`At 3: ${list.at(3).value}`);

  console.log('Pop');
  list.pop();
  console.log(list.toString());

  console.log('Insert tiger at 3. Previously: hamster');
  list.insertAt('tiger', 3)
  console.log(list.toString());

  console.log('Remove tiger at 3');
  list.removeAt(3);
  console.log(list.toString());

  list.pop();
  console.log(list.toString());
  list.pop();
  console.log(list.toString());
  list.pop();
  console.log(list.toString());

  console.log('Contains: dog');
  console.log(list.contains('dog'));
  console.log(list.find('dog'));

  list.pop();
  console.log(list.toString());

  console.log('Contains: dog');
  console.log(list.contains('dog'));
  console.log(list.find('dog'));

}

// ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null
main()