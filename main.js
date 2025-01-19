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
}

// ( dog ) -> ( cat ) -> ( parrot ) -> ( hamster ) -> ( snake ) -> ( turtle ) -> null
main()