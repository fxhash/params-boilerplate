console.log(fxhash)
console.log(fxrand())

document.domain = "localhost"

const sp = new URLSearchParams(window.location.search);

console.log(sp);

// this is how to define parameters
$fx.params([
  {
    name: "It's a number",
    type: "number",
    default: "0.8",
    options: {
      min: "0",
      max: "2",
      step: "0.05",
    },
  },
  {
    name: "A color",
    type: "color",
    default: "ff000000",
  },
  {
    name: "A boolean",
    type: "boolean",
    default: "true",
  },
  {
    name: "A string",
    type: "string",
    default: "hello",
  },
  {
    name: "A selection",
    type: "select",
    default: "orange",
    options: ["apple", "orange", "pear"],
  },
]);

// this is how features can be defined
$fx.features({
  "A random feature": Math.floor(fxrand() * 10),
  "A random boolean": fxrand() > 0.5,
  "A random string": ["A", "B", "C", "D"].at(Math.floor(fxrand()*4)),
  "Feature from params, its a number": $fx.param("It's a number"),
})


// log the parameters, for debugging purposes, artists won't have to do that
console.log("Current param values:")
console.log($fx.getParams())
console.log(fxparams)


document.body.innerHTML = `
<p>
url: ${window.location.href}
</p>
<p>
hash: ${$fx.hash}
</p>
<p>
params: 
</p>
<pre>
${JSON.stringify($fx.getParams(), null, 2)}
</pre>
`