console.log(fxhash)
console.log(fxrand())


const sp = new URLSearchParams(window.location.search);
console.log(sp);


// this is how to define parameters
$fx.params([
  {
    id: "number_id",
    name: "A number",
    type: "number",
    default: 1.2,
    options: {
      min: -2,
      max: 10,
      step: 0.1,
    },
  },
  {
    id: "select_id",
    name: "A selection",
    type: "select",
    default: "pear",
    options: {
      options: ["apple", "orange", "pear"],
    }
  },
  {
    id: "color_id",
    name: "A color",
    type: "color",
    default: "#ff0000",
  },
  {
    id: "boolean_id",
    name: "A boolean",
    type: "boolean",
    default: true,
  },
  {
    id: "string_id",
    name: "A string",
    type: "string",
    default: "hello",
    options: {
      minLength: 1,
      maxLength: 5
    }
  },
]);

// this is how features can be defined
$fx.features({
  "A random feature": Math.floor(fxrand() * 10),
  "A random boolean": fxrand() > 0.5,
  "A random string": ["A", "B", "C", "D"].at(Math.floor(fxrand()*4)),
  "Feature from params, its a number": $fx.param("number_id"),
})

// how to read a single parameter
console.log($fx.param("number_id"));

// log the parameters, for debugging purposes, artists won't have to do that
console.log("Current param values:")
console.log($fx.getParams())
console.log(fxparams)

// update the document based on the parameters
document.body.style.background = $fx.param("color_id")
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
