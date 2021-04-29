<template>
  
 <section class="contact-form">
            <h2>Stay up to date!</h2>
            <p class="hide">Get all the latest &amp; greatest posts delivered straight to your inbox</p>
            <div class="form-wrap">
                <input class="subscribe" type="text" id="name" v-model="newUser.name" placeholder="your name" />

                <input class="subscribe" type="email" id="email" v-model="newUser.email" placeholder="youremail@example.com" />

								<textarea class="subscribe" id="message" v-model="newUser.message" placeholder="How can we help?"></textarea>

            </div>
            <button v-on:click="submitForm" type="button">Send</button>
            <p class="third">Or if you prefer you can contact me via the <em>regular email route</em> at <a href="mailto:h@bylucas.co.uk?Subject=Enquiry%20from%20the%20bylucas-website">h@bylucas.co.uk</a></p>

        </section>
</template>

<script>
var emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// Your web app's Firebase configuration
  var firebaseConfig = {
   apiKey: "AIzaSyBDNzzkO8Sh4fWm-_6F52rqu0lGjGMCduk",
    authDomain: "bylucas.firebaseapp.com",
    databaseURL: "https://bylucas.firebaseio.com",
    projectId: "bylucas",
    storageBucket: "bylucas.appspot.com",
    messagingSenderId: "797178261263",
    appId: "1:797178261263:web:adea5cc24adc3e87b5587a",
    measurementId: "G-4FPWFXHN7G"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
	firebase.analytics();

// Reference messages collection
const db = firebase.firestore();

var usersRef = db.collection('contacts');
	
	export default {
	data: function () {
		return {
			newUser: {
				name: '',
				email: '',
				message: ''
			}
		};
	},

	firebase: {
		users: usersRef
	},

	methods: {
		submitForm: function (event) {
			(this.validate()) ? this.success(): this.fail();
		},
		validate: function () {
			return (this.newUser.name != '' && this.newUser.message != '' && (this.isAnEmail(this.newUser.email))) ? true : false;
		},

		success: function () {
			this.addUser();
			this.saveEntry();
			},

		addUser: function () {
			usersRef.add(this.newUser)
			if (this.success) {
				this.newUser.name = ''
				this.newUser.email = ''
				this.newUser.message = ''
			}
			alert("you did it");
		},

		fail: function () {
			alert("something went wrong");
		},
		isAnEmail: function (string) {
			return (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(string)) ? true : false;
		},

		saveEntry: function () {
			this.resetData();
		},
		resetData: function () {
			this.newUser.name = '';
			this.newUser.email = '';
			this.newUser.message = ''
		}
	}
}
</script>