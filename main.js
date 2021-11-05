var app = document.getElementById("app");
var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
typewriter
  .typeString("Santa María , Catamarca , Argentina")
  .pauseFor(200)
  .start();
