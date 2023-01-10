console.log(fxhash)
console.log(fxrand())


const sp = new URLSearchParams(window.location.search);

console.log(sp);

const params = [];
params.push({
  name: "It's a number",
  type: "number",
  default: "0.8",
  options: {
    min: "1",
    max: "10",
    step: "0.05",
  },
});
params.push({
  name: "A color",
  type: "color",
  default: "ff000000",
});
$fx.params(params);

// this is how to define parameters
$fx.params([
  {
    id: "number_id",
    name: "A number",
    type: "number",
    default: "1.2",
    options: {
      min: "-2",
      max: "2",
      step: "0.1",
    },
  },
  {
    id: "select_id",
    name: "A selection",
    type: "select",
    default: "orange",
    options: {
      options: ["apple", "orange", "pear"],
    }
  },
  {
    id: "color_id",
    name: "A color",
    type: "color",
    default: "ff000000",
  },
  {
    id: "boolean_id",
    name: "A boolean",
    type: "boolean",
    default: "true",
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

console.log($fx.param("number_id"));

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
