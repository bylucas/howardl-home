<template>
	<hr>
  <h2>Functions</h2>
  <blockquote>
  <p>A function is a block of code that is defined once but can be used (called), multiple times.</p>
</blockquote>

<pre><code class="lang-js">//function declaration
function greet(){
 console.log('hello there');
}

greet();
//answer: hello there</code></pre>

<pre><code class="lang-js">// function expression
const speak = function(){
 console.log('good day!');
};

speak();
//answer: good day!</code></pre>

<pre><code class="lang-js">// arguments & parameters
const speaking = function(name = 'peter', time = 'night'){
 console.log(`good ${time}, ${name}!`);
};

speaking();
//answer: good night, peter

speaking('john', 'morning');
//answer: good morning, john!

speaking('fred');
//answer: good night, fred!</code></pre>

<pre><code class="lang-js">// return statements
const calcArea = function(radius){
 let area = 3.14 * radius**2;
  return area;
}

const area = calcArea(5);
 console.log('area is:', area);
//answer: area is: 78.5</code></pre>
</template>

<script>
export default {
    mounted() {
    Prism.highlightAll()
  }
  };
</script>