<template>
<footer class="footer">
 <p>&copy; 2020 howardl.. | <a id="contact" @click="showModalContact = true">Contact</a> | <a id="privacy" @click="showModalPrivacy = true">Privacy</a></p>

 <modal v-if="showModalContact" @close="showModalContact = false">

					<ContactForm />
				
			</modal>

  <modal v-if="showModalPrivacy" @close="showModalPrivacy = false">
				
					<PrivacyContent />
				
			</modal>
  </footer>
</template>
<script>
import Modal from './Modal.vue'
import ContactForm from './ContactForm.vue'
import PrivacyContent from './PrivacyContent.vue'
export default {
  name: 'Footer',
  data() {
    return {
    showModalContact: false,
    showModalPrivacy: false
    }
  },
  components: {
    Modal,
    ContactForm,
    PrivacyContent
  }
}
</script>