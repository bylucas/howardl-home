<template>
  <lazyBackground
  :image-source="backgroundImage"
  loading-image="/loading2.gif"
  error-image="/error.jpg"
  image-class="cam-viewport"
  background-size=""
  :title="title" />
  <main>
  <blockquote>
  <p>Needs exploring view the video</p>
</blockquote>

<section class="post-content">
  <div class="links">
    <div class="links-left">
      <ScrollLink href="#variables">Variables</ScrollLink>
      <ScrollLink href="#strings">Stings</ScrollLink>
      <ScrollLink href="#common-strings">Common Stings</ScrollLink>
      <ScrollLink href="#numbers">Numbers</ScrollLink>
      <ScrollLink href="#template-strings">Template Stings</ScrollLink>
      <ScrollLink href="#arrays">Arrays</ScrollLink>
      <ScrollLink href="#null-undefined">Null and Undefined</ScrollLink>
      <ScrollLink href="#booleans-comparisons">Booleans and Comparisons</ScrollLink>
      </div>
  <div class="links-right">
      <ScrollLink href="#loose-comparisons">Loose and Strict Comparisons</ScrollLink>
      <ScrollLink href="#type-conversion">Type Conversion</ScrollLink>
      <ScrollLink href="#for-loops">For Loops</ScrollLink>
      <ScrollLink href="#while-loops">While Loops</ScrollLink>
      <ScrollLink href="#do-while-loops">Do While Loops</ScrollLink>
    </div>
  </div>
  <hr>
  <h2 id="variables">Variables</h2>
<blockquote>
<p>A little introduction on variables</p>
</blockquote>

<p>Using <em>let</em> allows us to change the varaiable</p>

<p><code>let age == 25</code></p>

<p>No need to add <em>let</em> to change the same variable</p>

<p><code>age = 30</code></p>

<p>Using <em>const</em> will <em>not</em> allow the variable to be changed.</p>

<p><code>const points = 100</code></p>

<p><em>var</em> is the old type of variable but still valid and widely used.</p>

<p><code>var score = 25</code></p>

<p>Spaces are not allowed in variables.</p>

<pre><code>mySpace = &quot;100&quot;; //This is ok
my Space = &quot;100&quot;; //This isn't ok
</code></pre>

<p>Variables can&#8217;t start with a number.</p>

<p><code>5mySpace = &quot;100&quot;; //This isn't allowed</code></p>

<p>Can&#8217;t use <em>keywords</em> that are used by <em>javascript</em></p>

<p><code>let const = 100; //Not allowed</code></p>

<p>Use <em>camel-case</em> to make variables clearer</p>

<pre><code>let mySpace = 'big room'; //camel-case, looks neater
let myspace = 'big room'; //This also works
let MYSPACE = 'big room'; //And so does this
</code></pre>

<hr>
<h2 id="strings">Strings</h2>
<blockquote>
<p>Notes?</p>
</blockquote>

<p><code>let email = 'michael@michaelcain.co.uk';</code></p>

<h3 id="stringconcatenation">String concatenation</h3>

<pre><code>let firstName = 'Michael';
let lastName = 'Cain';
let fullName = firstName = ' ' + lastName;

console.log(fullName);
document.getElementById('demo').innerHTML = 'My name is ' + fullName;
//*Answer* My name is Michael Cain

console.log(email);
document.getElementById('demo').innerHTML = 'My email is ' + email;
//*Answer* My email is michael@michaelcain.co.uk
</code></pre>

<h3 id="gettingindividualcharactersoffullname">Getting individual characters of fullName</h3>

<p>Count starts at &#8216;0&#8217; and includes &#8216;spaces&#8217;</p>

<pre><code>console.log(fullName[2]);
document.getElementById('demo').innerHTML = fullName[2];
//*Answer* c

console.log(fullName[8]);
document.getElementById('demo').innerHTML = fullName[8];
//*Answer* C
</code></pre>

<h3 id="stringlength">String length</h3>

<pre><code>console.log(fullName.length);
document.getElementById('demo').innerHTML = fullName.length;
//*Answer* 12
</code></pre>

<h3 id="stringmethods">String Methods</h3>

<pre><code>console.log(fullName.toUpperCase());
document.getElementById('demo').innerHTML = fullName.toUpperCase();
//*Answer* MICHAEL CAIN

let result = fullName.toLocaleLowerCase();
console.log(result);
document.getElementById('demo').innerHTML = result;
//*Answer* michael cain

let index = email.indexOf('@');
console.log('index of the @ sign: ', index);
document.getElementById('demo').innerHTML = 'index of the @ sign: ', + index;
//*Answer* index of the @ sign: 7 //count starts at '0'
</code></pre>

<hr>
<h2 id="common-strings">Common Strings</h2>
<blockquote>
<p>Notes</p>
</blockquote>

<pre><code>let email = 'michael@michaelcain.co.uk';
</code></pre>

<h3 id="lastindexof">lastIndexOf</h3>

<pre><code>let result = email.lastIndexOf('n');
console.log(result);
document.getElementById(&quot;demo&quot;).innerHTML = result;

//Answer: 18
//Count starts at 0
</code></pre>

<h3 id="slice">slice</h3>

<pre><code>let result = email.slice(0,5);
console.log(result);
document.getElementById(&quot;demo&quot;).innerHTML = result;

//Answer: micha
</code></pre>

<h3 id="substr">substr</h3>

<pre><code>let result = email.substr(5,12);
console.log(result);
document.getElementById(&quot;demo&quot;).innerHTML = result;

//Answer: el@michaelca
</code></pre>

<h3 id="replace">replace</h3>

<pre><code>let result = email.replace('e', 'w');
console.log(result);
document.getElementById(&quot;demo&quot;).innerHTML = result;

//Answer: michawl@michaelcain.co.uk
//only replaces the first letter it comes to</code></pre>

<hr>
<h2 id="numbers">Numbers</h2>
<blockquote>
<p>Numbers and Maths</p>
</blockquote>

<pre><code>math operators: +, -, *, /, **, %, ++, --

+  : Addition
-  : Subtraction
*  : Multiplication
/  : Division
** : Exponentiation (power)
%  : Modulus (remainder)
++ : Increment
-- : Decrement

//Answer: 5
</code></pre>

<h3 id="examples">Examples</h3>

<pre><code>let radius = 10;
let pi = 3.14

let result = radius % 3;
console.log(result);
document.getElementById(&quot;demo&quot;).innerHTML = result;

//Answer: 1

let result = pi * radius**2;
console.log(result);
document.getElementById(&quot;demo&quot;).innerHTML = result;

//Answer: 314
</code></pre>

<h3 id="bidmas">BIDMAS</h3>

<pre><code>order of operation - B I D M A S

Brackets
Indices
Divide
Multiply
Addition
Subtraction

let result = 5 * (10 - 3)**2;
console.log(result);
document.getElementById(&quot;demo&quot;).innerHTML = result;

//Answer: 245

How its worked out:
Brackets : 10 - 3 = 7
Indices : 7 x 7 = 49
Multiply : 5 x 49 = 245
</code></pre>

<h3 id="shorthands">Shorthands</h3>

<pre><code>let likes = 10; //used for each example below

likes = likes + 1; //answer 11
likes++; //answer 11

likes = likes + 10; //answer 20
likes += 10; //answer 20

likes = likes * 2; //answer 20
likes *= 2; //answer 20

likes = likes / 2; //answer 5
likes /= 2; //answer 5
</code></pre>

<h3 id="nan-notanumber">NaN - not a number</h3>

<pre><code>console.log(5 * 'hello');
document.getElementById(&quot;demo&quot;).innerHTML = 5 * 'hello';

//Answer: NaN
</code></pre>

<h3 id="backtolikes">Back to likes</h3>

<pre><code>let likes = 10;
let result = 'the blog has ' + likes + ' likes.';
console.log(result);
document.getElementById(&quot;demo&quot;).innerHTML = result;

//Answer: the blog has 10 likes.</code></pre>

<hr>
<h2 id="template-strings">Template Strings</h2>
<blockquote>
<p>Concatenation (join together) or Template string? Below shows examples of both. Both are correct it&#8217;s your choice which you prefer.</p>
</blockquote>

<pre><code>const title = 'Best reads of 2020';
const author = 'Michael';
const likes = 30;
</code></pre>

<h3 id="concatenationway">concatenation way</h3>

<pre><code>let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
console.log(result);
document.getElementById(&quot;demo&quot;).innerHTML = result; 
</code></pre>

<h3 id="templatestringway">template string way</h3>

<pre><code>let result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);
document.getElementById(&quot;demo&quot;).innerHTML = result;

// Answer: The blog called Best reads of 2020 by Michael has 30 likes 
</code></pre>

<h3 id="creatinghtmltemplates">creating html templates</h3>

<pre><code>let html = `
&lt;h3&gt;${title}&lt;/h3&gt;
&lt;p&gt;By ${author}&lt;/p&gt;
&lt;span&gt;This blog has ${likes} likes&lt;/span&gt;
`;

console.log(html);
document.getElementById(&quot;demo&quot;).innerHTML = html; 
</code></pre>

<h3 id="bestreadsof2020">Best reads of 2020</h3>

<p>By Michael<br />
This blog has 30 likes</p>

<hr>
<h2 id="arrays">Arrays</h2>
<blockquote>
<p>Arrays and array properties</p>
</blockquote>

<pre><code>let people = ['peter', 'john', 'mike'];
</code></pre>

<h3 id="replacejohnwithken">Replace john with ken</h3>

<pre><code>people[1] = 'ken';
    
console.log(people);
document.getElementById(&quot;demo&quot;).innerHTML = people;
//Answer: peter,ken,mike

console.log(people[1]);
document.getElementById(&quot;demo&quot;).innerHTML = people[1];
//Answer: ken
</code></pre>

<h3 id="arraylength">Array length</h3>

<pre><code>console.log(people.length);
document.getElementById(&quot;demo&quot;).innerHTML = people.length;
//Answer: 3
</code></pre>

<h3 id="arraymethods">Array Methods</h3>

<pre><code>//join arrays with ','
    
let result = people.join(',');
console.log(result);
document.getElementById(&quot;demo&quot;).innerHTML = result;
//Answer: peter,ken,mike

//join arrays with '-'
    
let result1 = people.join('-');
console.log(result);
document.getElementById(&quot;demo&quot;).innerHTML = result;
//Answer: peter-ken-mike
</code></pre>

<h3 id="indexof">indexOf</h3>

<pre><code>let result = people.indexOf('mike');
console.log(result);
document.getElementById(&quot;demo&quot;).innerHTML = result;
//Answer: 2
</code></pre>

<h3 id="jointogether">Join together</h3>

<pre><code>//add these two to the existing array
    
let result = people.concat(['mel', 'crystal']);
console.log(result);
document.getElementById(&quot;demo&quot;).innerHTML = result;
//Answer: peter,ken,mike,mel,crystal
</code></pre>

<h3 id="addnewvalue">Add new value</h3>

<pre><code>let result = people.push('robert');
console.log(result);
document.getElementById(&quot;demo&quot;).innerHTML = result;
//Answer: peter,ken,mike,robert
</code></pre>

<h3 id="removeendvalue">Remove end value</h3>

<pre><code>let result = people.pop();
console.log(result);
document.getElementById(&quot;demo&quot;).innerHTML = result;
//Answer: robert</code></pre>

<hr>
<h2 id="null-undefined">Null and Undefined</h2>
<blockquote>
<p>Setting a value of null is intentionally leaving the value undefined whereas a variable that has no value is set to undefined by the browser.</p>
</blockquote>

<pre><code>let age = null; //intentionally undefined

let age; //no value set so browser sets undefined

//In this example age is set to null so age will have no value,
//but it still does the math in this case 0 + 3 = 3

console.log(age, age + 3, `the age is ${age}`);
//console returns: null 3 &quot;the age is null&quot;
</code></pre>

<hr>
<h2 id="booleans-comparisons">Booleans and Comparisons</h2>
<blockquote>
<p>How booleans and comparisons work - true or false</p>
</blockquote>

<h3 id="methodscanreturnbooleans">methods can return booleans</h3>

<pre><code>let email = 'michael@michaelcain.co.uk';
    
let result = email.includes('@');
console.log(result);
document.getElementById(&quot;demo&quot;).innerHTML = result;
//Answer: true

let names = ['michael', 'fred', 'john'];

let result = names.includes('fred');
console.log(result);
document.getElementById(&quot;demo&quot;).innerHTML = result;
//Answer: true
</code></pre>

<h3 id="comparisonoperators">comparison operators</h3>

<pre><code>let age = 25;

console.log(age == 25);
document.getElementById(&quot;demo&quot;).innerHTML = age == 25;
//Answer: true

console.log(age == 30);
document.getElementById(&quot;demo&quot;).innerHTML = age == 30;
//Answer: false

console.log(age != 30);
document.getElementById(&quot;demo&quot;).innerHTML = age != 30;
//Answer: true

console.log(age &gt; 20);
document.getElementById(&quot;demo&quot;).innerHTML = age &gt; 20;
//Answer: true

console.log(age &lt; 20);
document.getElementById(&quot;demo&quot;).innerHTML = age &lt; 20;
//Answer: false

console.log(age &lt;= 25);
document.getElementById(&quot;demo&quot;).innerHTML = age &lt;= 25;
//Answer: true

console.log(age &gt;= 25);
document.getElementById(&quot;demo&quot;).innerHTML = age &gt;= 25;
//Answer: true
</code></pre>

<h3 id="anotherexample">Another Example</h3>

<pre><code>let name = 'peter';

console.log(name == 'peter');
document.getElementById(&quot;demo&quot;).innerHTML = name == 'peter';
//Answer: true

console.log(name == 'Peter');
document.getElementById(&quot;demo&quot;).innerHTML = name == 'Peter';
//Answer: false
</code></pre>

<h3 id="pcomesafterc">p comes after c</h3>

<pre><code>console.log(name &gt; 'crystal');
document.getElementById(&quot;demo&quot;).innerHTML = name &gt; 'crystal';
//Answer: true
</code></pre>

<h3 id="lowercaseisgreaterthanuppercase">lowercase is greater than uppercase</h3>

<pre><code>console.log(name &gt; 'Peter');
document.getElementById(&quot;demo&quot;).innerHTML = name &gt; 'Peter';
//Answer: true

console.log(name &gt; 'Crystal');
document.getElementById(&quot;demo&quot;).innerHTML = name &gt; 'Crystal';
//Answer: true</code></pre>

<hr>
<h2 id="loose-comparisons">Loose and Strict Comparisons</h2>
<blockquote>
<p>Loose comparison allow different types to be equal. Whereas with strict comparison, different types cannot be equal</p>
</blockquote>

<pre><code>let age = 25;
</code></pre>

<h3 id="loosecomparisondifferenttypescanstillbeequal">Loose Comparison (different types can still be equal)</h3>

<pre><code>console.log(age == 25);
document.getElementById(&quot;demo&quot;).innerHTML = age == 25;
//Answer: true

console.log(age == '25');
document.getElementById(&quot;demo&quot;).innerHTML = age == '25';
//Answer: true

console.log(age != 25);
document.getElementById(&quot;demo&quot;).innerHTML = age != 25;
//Answer: false

console.log(age != '25');
document.getElementById(&quot;demo&quot;).innerHTML = age != '25';
//Answer: false
</code></pre>

<h3 id="strictcomparisondifferenttypescannotbeequal">Strict Comparison (different types cannot be equal)</h3>

<pre><code>console.log(age === 25);
document.getElementById(&quot;demo&quot;).innerHTML = age === 25;
//Answer: true

console.log(age === '25');
document.getElementById(&quot;demo&quot;).innerHTML = age === '25';
//Answer: false

console.log(age !== 25);
document.getElementById(&quot;demo&quot;).innerHTML = age !== 25;
//Answer: false

console.log(age !== '25');
document.getElementById(&quot;demo&quot;).innerHTML = age !== '25';
//Answer: true</code></pre>

<hr>
<h2 id="type-conversion">Type Conversion</h2>
<blockquote>
<p>Converting types</p>
</blockquote>

<pre><code>let score = '100';

console.log(score + 1);
document.getElementById(&quot;demo&quot;).innerHTML = score + 1;
//Answer: 1001

//This is not what we want

console.log(typeof score);
document.getElementById(&quot;demo&quot;).innerHTML = typeof score;
//Answer: string

//convert to number

score = Number(score);

console.log(score + 1);
document.getElementById(&quot;demo&quot;).innerHTML = score + 1;
//Answer: 101
   
//Thats better

console.log(typeof score);
document.getElementById(&quot;demo&quot;).innerHTML = typeof score;
//Answer: number
</code></pre>

<h3 id="moreexamples">More Examples</h3>

<pre><code>let result = Number('hello');

console.log(result, typeof result);
document.getElementById(&quot;demo&quot;).innerHTML = result + typeof result;
//Answer: NaNnumber

let result = String(50);

console.log(result, typeof result);
document.getElementById(&quot;demo&quot;).innerHTML = result + typeof result;
//Answer: 50string

let result = Boolean(100);

console.log(result, typeof result);
document.getElementById(&quot;demo&quot;).innerHTML = result + typeof result;
//Answer: trueboolean

let result = Boolean(0);

//A boolean set to 0 is false
    
console.log(result, typeof result);
document.getElementById(&quot;demo&quot;).innerHTML = result + typeof result;
//Answer: falseboolean

let result = Boolean('0');

//boolean set to a string is true

console.log(result, typeof result);
document.getElementById(&quot;demo&quot;).innerHTML = result + typeof result;
//Answer: trueboolean

let result = Boolean('');

//boolean set to a string with no value is false

console.log(result, typeof result);
document.getElementById(&quot;demo&quot;).innerHTML = result + typeof result;
//Answer: falseboolean</code></pre>

<hr>
<h2 id="for-loops">For Loops</h2>
<blockquote>
<p>for loops don&#8217;t need a semi-colon to end code blocks.</p>
</blockquote>

<pre><code>value - condition - final expression
let i = 0; i &lt; 5; i++
i = 0 : while i is less than 5 : i + 1
when i = 5 finish loop, return 4 because 5 is not less than 5

for(let i = 0; i &lt; 5; i++){
console.log('loop: ', i);
document.getElementById(&quot;demo&quot;).innerHTML = 'loop: ' + i;
}
//Answer: loop: 4

const names = ['peter', 'fred', 'john'];

for(let i = 0; i &lt; names.length; i++){
console.log(names[i]);
document.getElementById(&quot;demo&quot;).innerHTML = names[i];
//Answer: john
</code></pre>

<h3 id="bytemplate">by template</h3>

<pre><code>//create a html template to show the above result on a web page

let html = `&lt;div&gt;${names[i]}&lt;/div&gt;`;
console.log(html);
document.getElementById(&quot;demo&quot;).innerHTML = html;
}
//Answer: john</code></pre>

<hr>
<h2 id="while-loops">While Loops</h2>
<blockquote>
<p>While loops as the name implies loop while the condition is true. Like the for loop, no semi-colon to end the code block.</p>
</blockquote>

<pre><code>let i = 0;
//set the value outside the while loop code block

while(i &lt; 5){//set the condition
//do something
console.log('loop: ', i);
document.getElementById(&quot;demo&quot;).innerHTML = 'loop: ' + i;
i++;//final expression - without this the loop would be infinite
}
console returns: loop: 1
    loop: 2
    loop: 3
    loop: 4
//Answer: loop: 4

//most of the time you won't know the number of items in your source
//ie. when accessing a database,so we find the total with .length
    
const names = ['peter', 'fred', 'john', 'mel', 'frank', 'martin'];

while(i &lt; names.length){
document.getElementById(&quot;demo&quot;).innerHTML = i &lt; names.length;
console.log(names[i]);
i++;
}
//Answer: martin

//In this example i-- : i - 1
i = 8;
while(i &gt; 5){
document.getElementById(&quot;demo&quot;).innerHTML = 'loop: ' + i;
console.log('loop: ', i);
i--;
}
//console returns: loop: 8
    loop: 7
    loop: 6
//Answer: loop: 6</code></pre>

<hr>
<h2 id="do-while-loops">Do While Loops</h2>
<blockquote>
<p>do while loops run the code once even if the condition is false. Then if true will carry on with the loop. A semi-colon is needed at the end because the while is out of the &#8220;do&#8221; code block</p>
</blockquote>

<pre><code>let i = 5;

do{
console.log('val of i is: ', i);
document.getElementById(&quot;demo&quot;).innerHTML = 'val of i is: ' + i;
i++;
} while(i &lt; 5);//note semi-colon
//Answer: val of i is: 5

do{
console.log('val of i is: ', i):
i++;
} while(i &lt; 8):
//Answer: console returns:
    val of i is: 5
    val of i is: 6
    val of i is: 7</code></pre>

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
      backgroundImage: 'https://howardl.co.uk/uploads/code-reference/js-notes.jpg',
      title: 'This is the javascript page'
    }
  },

  components: {
    ScrollLink,
    lazyBackground
  }
 
}
</script>