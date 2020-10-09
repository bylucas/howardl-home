<template>
  <lazyBackground
  :image-source="backgroundImage"
  loading-image="src/assets/img/loading.gif"
  error-image="src/assets/img/error.jpg"
  image-class="cam-viewport"
  background-size=""
  :title="title" />
  <main>
  <section class="post-content">
  <blockquote>
  <p>Needs exploring view the video</p>
</blockquote>

<div class="links">
  <div class="links-left">
    <ScrollLink href="#variables">Variables</ScrollLink>
    <ScrollLink href="#strings">Strings</ScrollLink>
  	<ScrollLink href="#string-methods">Common-String Methods</ScrollLink>
  	<ScrollLink href="#numbers">Numbers</ScrollLink>
  	<ScrollLink href="#vtemplate-strings">Template Strings</ScrollLink>
  	<ScrollLink href="#arrays">Arrays</ScrollLink>
    <ScrollLink href="#if-statements">If Statements</ScrollLink>                
  </div>
  <div class="links-right">
    <ScrollLink href="#">Overflow Wrap</ScrollLink>
  </div>
  </div>
<hr>

<h2 id="variables">Variables</h2>
<pre><code class="language-js">let age = 25;

//using let allows us to change the variable
//No need to add the let to change same variable
age = 30;

//Using const will not allow the variable to be changed. Only use const if you know you will not need to change variable
const points = 100;

//This is the old type of variable but is still valid. Many developers still use var
var score = 25

//Spaces are not allowed in variables
mySpace = "100"; //This is ok

my Space = "100"; //This isn't ok

5mySpace = "100"; //Starting with a number isn't allowed

let const = 100; //Using javascript keywords isn't allowed

let mySpace = 'big room'; //camelCase looks neater

let myspace = 'big room'; //This also works

let MYSPACE = 'big room' //And so does this</code></pre>

<hr>

<h2 id="strings">Strings</h2>
<pre><code class="lang-js">let email = 'michael@michaelcain.co.uk';

// string concatenation
let firstName = 'Michael';
let lastName = 'Cain';
let fullName = firstName + ' ' + lastName;

//Examples
document.getElementById("demo").innerHTML = 'My name is ' + fullName;//My name is Michael Cain
document.getElementById("demo2").innerHTML = 'My email is ' + email;//My email is michael@michaelcain.co.uk

//getting individual characters of fullname
document.getElementById("demo3").innerHTML = fullName[2];//c
document.getElementById("demo4").innerHTML = fullName[8];//C

// string length
document.getElementById("demo5").innerHTML = fullName.length;//12

// string methods
document.getElementById("demo6").innerHTML = fullName.toUpperCase();//MICHAEL CAIN

let result = fullName.toLocaleLowerCase();
document.getElementById("demo7").innerHTML = result;//michael cain

let index = email.indexOf('@');
document.getElementById("demo8").innerHTML = 'index of the @ sign:' + index;//index of the @ sign:7</code></pre>

<hr>

<h2 id="string-methods">Common String Methods</h2>

<pre><code class="lang-js">let email = 'michael@michaelcain.co.uk';

let result = email.lastIndexOf('n');
document.getElementById("demo").innerHTML = result;//18

let result2 = email.slice(0,5);
document.getElementById("demo1").innerHTML = result2;//micha

let result3 = email.substr(5,12);
document.getElementById("demo2").innerHTML = result3;//el@michealca

let result4 = email.replace('m', 'w');
document.getElementById("demo3").innerHTML = result4;//wichael@michaelcain.co.uk
//replaces the first letter it comes to only

let result5 = email.replace('e', 'w');
document.getElementById("demo4").innerHTML = result5;//michawl@michealcain.co.uk
//replaces the first letter it comes to only</code></pre>

<hr>
<h2 id="numbers">Numbers</h2>

<pre><code class="lang-js">let radius = 10;
let pi = 3.14;

//math operators: +, -, *, /, **, %, ++, --

// + : Addition
// - : Subtraction
// * : Multiplication
// / : Division
// ** : Exponentiation (power)
// % : Modulus (remainder)
// ++ : Increment
// -- : Decrement

document.getElementById("demo").innerHTML = 10 / 2;//5

let result = radius % 3;

document.getElementById("demo1").innerHTML = result;//1

let result2 = pi * radius**2;

document.getElementById("demo2").innerHTML = result2;//314

// order of operation - B I D M A S

// Brackets
// Indices
// Divide
// Multiply
// Addition
// Subtraction

let result3 = 5 * (10 - 3)**2;
document.getElementById("demo3").innerHTML = result3;//245

//How its worked out:
Brackets : 10 - 3 = 7
Indices : 7 x 7 = 49
Multiply : 5 x 49 = 245

// shorthands
let likes = 10;

likes = likes + 1; answer 11
likes++; answer 11

likes = likes + 10; answer 20
likes += 10; answer 20

likes = likes * 2; answer 20
likes *= 2; answer 20

likes = likes / 2;
likes /= 2;

document.getElementById("demo4").innerHTML = likes;//5

// NaN - not a number
document.getElementById("demo5").innerHTML = 5 / 'hello';//NaN

document.getElementById("demo6").innerHTML = 5 * 'hello';//NaN

let result4 = 'the blog has ' + likes + ' likes.';
//Likes = 5 from the shorthands section above
document.getElementById("demo7").innerHTML = result4;//the blog has 5 likes</code></pre>

<hr>

<h2 id="template-strings">Template Strings</h2>

<pre><code class="lang-js">const title = 'Best reads of 2020';
const author = 'Michael';
const likes = 30;

// concatenation way

let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
document.getElementById("demo").innerHTML = result;//The blog called Best reads of 2020 by Michael has 30 likes

// template string way

let result2 = `The blog called ${title} by ${author} has ${likes} likes`;
document.getElementById("demo1").innerHTML = result2;//The blog called Best reads of 2020 by Michael has 30 likes

// creating html templates
let html = `
  &lt;h2&gt;${title}&lt;/h2&gt;
  &lt;p&gt;By ${author}&lt;/p&gt;
  &lt;p&gt;This blog has ${likes} likes&lt;/p&gt;
`;

document.getElementById("demo2").innerHTML = html;//see below</code></pre>

<h2>Best reads of 2020</h2>
<p style="margin-bottom: 0;">By Michael</p>
<p>This blog has 30 likes</p>

<hr>

<h2 id="arrays">Arrays</h2>

<pre><code class="lang-js">let people = ['peter', 'john', 'mike'];

document.getElementById("demo").innerHTML = people;//peter,john,mike

//Replace john with ken
people[1] = 'ken';

document.getElementById("demo15").innerHTML = people;//peter,ken,mike

document.getElementById("demo2").innerHTML = people[1];//ken

let ages = [20, 25, 30, 35];

document.getElementById("demo3").innerHTML = ages[2];//30

//arrays can be mixed but it's not good practice
let random = ['frank', 'crystal', 30, 20];

// array length
document.getElementById("demo4").innerHTML = people.length;//3

// array methods

//join arrays with ','
let result = people.join(',');

document.getElementById("demo5").innerHTML = result;//peter,ken,mike

//join arrays with '-'
let result1 = people.join('-');

document.getElementById("demo55").innerHTML = result1;//peter-ken-mike

let result2 = people.indexOf('mike');

document.getElementById("demo6").innerHTML = result2;//2

//Join together - adds these two to the existing array
let result3 = people.concat(['mel', 'crystal']);

document.getElementById("demo7").innerHTML = result3;//peter,ken,mike,mel,crystal

//add new value
let result4 = people.push('robert');

document.getElementById("demo8").innerHTML = result4;//4

let result5 = people;

document.getElementById("demo9").innerHTML = result5;//peter,ken,mike,robert

//remove end value
let result6 = people.pop();

document.getElementById("demo10").innerHTML = result6;//robert</code></pre>
<hr>
<h2 id="if-statements">If Statements</h2>
<pre class="lang-js"><code>// if statements
const age = 25;

if(age > 20){
//document.getElementById("demo").innerHTML = 'you are over 20 years old';
}

const people = ['michael', 'fred', 'john', 'walter'];

if(people.length > 3){
document.getElementById("demo2").innerHTML = "that's a lot of people!";
}

const password = 'p@ssword';

if(password.length >= 8){
document.getElementById("demo3").innerHTML = 'that password is long enough';
}</code></pre>

<hr>
  </section>
</main>
</template>
<script>
import ScrollLink from '../components/ScrollLink.vue'
import lazyBackground from '../components/lazyBackground.vue'
export default {
  data() {
    return {
      backgroundImage: 'https://howardl.co.uk/uploads/india/delhi-header.jpg',
      title: 'This is the javascript page'
    }
  },
  components: {
    ScrollLink,
    lazyBackground
  }
 
}
</script>