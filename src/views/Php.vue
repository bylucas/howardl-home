<template>
  <lazyBackground
  :image-source="backgroundImage"
  loading-image="src/assets/img/loading.gif"
  error-image="src/assets/img/error.jpg"
  image-class="cam-viewport"
  background-size=""
  :title="title"  />
  <main>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, cumque. Totam molestiae incidunt velit repellat natus adipisci libero sapiente recusandae, dolorum necessitatibus maiores quo doloribus fugiat nihil sunt deserunt et!</p>

<pre><code class="language-php">?php 
//SEO
$post_title = 'More Php';
$url = "more-php.php";
/////////////////////////////
if(isset($_POST['submit'])){

  //cookie for gender
	setcookie('gender', $_POST['gender'], time() + 86400);

	session_start();

	$_SESSION['name'] = $_POST['name'];

	header('Location: more-php.php');
	}

include("../includes/header.php");
include('templates/sessions.php');
//echo $_SERVER['PHP_SELF'] - not working
?</code></pre>

<pre><code class="language-php">public function getName(){
	return $this->name;
	}

	public function setName($name){
		if(is_string($name) && strlen($name) > 1){
			$this->name = $name;
			return "name has been updated to $name";
			} else {
			return 'not a valid name';
			}
		}

	}

	$userTwo = new User('yoshi', 'yoshi@thenetninja.co.uk');

	//echo $userTwo->getName();
	//echo $userTwo->setName('shaun');
	//echo $userTwo->getName();

include("../includes/header.php");
include('templates/sessions.php');</code></pre>
 

  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla fugit libero optio ullam sequi neque illum accusamus, distinctio aliquid inventore eius repudiandae omnis iusto corrupti molestias nihil, ut ducimus veniam.</p>
</main>
</template>
<script>
import lazyBackground from '../components/lazyBackground.vue'
export default {
  data() {
    return {
      backgroundImage: 'https://howardl.co.uk/ploads/india/delhi-header.jpg',
      title: 'This is the Php page'
    }
  },
  components: {
    lazyBackground
  }
 
}
</script>