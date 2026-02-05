<script>
import { useClientRequestStore } from '@/stores/form.js'
import { useTextStore } from '@/stores/text.js'
import { storeToRefs } from 'pinia'

export default {
  data() {
    const store = useClientRequestStore()
    const storeText = useTextStore()
    const { formData, errors, status, isValidForm } = storeToRefs(store)

    return {
      store,
      storeText,
      formData,
      errors,
      status,
      isValidForm,
    }
  },
  computed: {
    lang() {
      return this.storeText.chooseLang ? this.storeText.ru : this.storeText.en
    },
  },
  methods: {
    updateField(field, value) {
      this.store.updateField(field, value)
    },

    validateField(field, value) {
      this.store.validateField(field, value)
    },

    async handleSubmit() {
      if (await this.store.submitRequest()) {
        // Дополнительные действия после успешной отправки
      }
    },

    resetForm() {
      this.store.resetForm()
    },
  },
}
</script>

<template>
  <div class="request-form-container">
    <h2 class="rubic" v-html="lang.form_H2"></h2>

    <form class="form" @submit.prevent="handleSubmit" novalidate>
      <label class="input">
        <input
          id="clientEmail"
          v-model="formData.clientEmail"
          class="input__field"
          @input="updateField('clientEmail', $event.target.value)"
          @blur="validateField('clientEmail', formData.clientEmail)"
          type="email"
          :class="{ invalid: errors.clientEmail }"
          placeholder=" "
        />
        <span class="input__label" v-html="lang.form_label1"></span>
        <span class="error raleway" v-if="errors.clientEmail">{{ errors.clientEmail }}</span>
      </label>

      <label class="input">
        <input
          class="input__field"
          id="clientName"
          v-model="formData.clientName"
          @input="updateField('clientName', $event.target.value)"
          @blur="validateField('clientName', formData.clientName)"
          type="text"
          placeholder=" "
          :class="{ invalid: errors.clientName }"
        />
        <span class="input__label" v-html="lang.form_label2"></span>
        <span class="error raleway" v-if="errors.clientName">{{ errors.clientName }}</span>
      </label>

      <label class="input input__textarea">
        <textarea
          class="input__field input__field__textarea"
          id="projectDescription"
          v-model="formData.projectDescription"
          @input="updateField('projectDescription', $event.target.value)"
          @blur="validateField('projectDescription', formData.projectDescription)"
          placeholder=" "
          rows="5"
          :class="{ invalid: errors.projectDescription }"
        ></textarea>
        <span class="input__label" v-html="lang.form_label3"></span>
        <span class="error raleway" v-if="errors.projectDescription">
          {{ errors.projectDescription }}
        </span>
      </label>
      <div class="send">
        <!-- Кнопка отправки -->
        <button type="submit" :disabled="status.isSending || !isValidForm" class="submit-btn">
          <span v-if="status.isSending" v-html="lang.form_button_status"></span>
          <span v-else v-html="lang.form_button_text"></span>
        </button>

        <div v-if="status.isSuccess" class="success-message">
          <button @click="resetForm" class="reset-btn" v-html="lang.form_reset_button"></button>
        </div>
      </div>
      <div v-if="status.isSuccess" class="success-message">
        <p v-html="lang.form_success_msg"></p>
      </div>

      <!-- Сообщения о статусе -->
      <div v-if="status.errorMessage" class="error-message">
        {{ status.errorMessage }}
      </div>
    </form>
  </div>
</template>

<style></style>
