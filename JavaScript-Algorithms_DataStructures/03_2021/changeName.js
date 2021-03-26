function change_name(name) {
  if (typeof name !== "string") return name;

  if (name === "weed") {
    name = "flower";
  } else {
    return change_name(name);
  }

  return console.log("string", "name");
}

change_name("weed");
// change_name("stop");
