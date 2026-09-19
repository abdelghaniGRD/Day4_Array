let colors = ["red", "green", "blue"];

console.log("arr before changing green", colors);

for (let i in colors)
  if (colors[i] === "green") {
    colors[i] = "yellow";
  }

console.log("array after changing green to yellow", colors);
