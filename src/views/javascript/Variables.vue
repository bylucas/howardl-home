<template>
	<hr>
<h2>Variables</h2>
  <blockquote>
  <p>Not all browsers will support <em>Modern JS</em> such as <em>Explorer 11</em>.</p>
</blockquote>

<pre><code class="lang-js">//using let allows us to change the variable
let age = 25;

//No need to add the let to change same variable
age = 30;

//Using const will not allow the variable to be changed.
//Only use const if you know you will not need to change varaible
const points = 100;

//This is the old type of variable but is still valid.
var score = 25
//Many developers still use var

//Spaces are not allowed in variables

mySpace = "100"; //This is ok

my Space = "100"; //This isn't ok


//Variables can't start with a number

5mySpace = "100"; //This isn't allowed


//Can't use keywords that are used by javascript

let const = 100; //This isn't allowed


//Use camal-case to make variables clearer

let mySpace = 'big room'; //This works and looks neater

let myspace = 'big room'; //This also works

let MYSPACE = 'big room' //And so does this</code></pre>
</template>

<script>
export default {
    mounted() {
    Prism.highlightAll()
  }
  };
</script>
