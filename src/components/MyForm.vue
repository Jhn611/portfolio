<script>
import { useClientRequestStore } from '@/stores/form.js'
import { useTextStore } from '@/stores/text.js'
import { storeToRefs } from 'pinia'
import CustomInput from './CustomInput.vue'

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
      toched: {
        clientEmail: false,
        clientName: false,
        projectDescription: false,
      },
    }
  },
  components: {
    CustomInput,
  },
  computed: {
    lang() {
      return this.storeText.chooseLang ? this.storeText.ru : this.storeText.en
    },
  },
  methods: {
    updateField(field, value) {
      if (this.toched) {
        this.store.updateField(field, value)
      }
    },

    validateField(field, value) {
      this.toched[field] = true
      this.store.validateField(field, value)
    },

    async handleSubmit() {
      if (await this.store.submitRequest()) {
        // Дополнительные действия после успешной отправки (так и не понадобилось)
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
      <CustomInput
        input-id="clientEmail"
        :model-value="formData.clientEmail"
        :errors="errors"
        :lang="lang"
        :label="lang.form_label1"
        @update:modelValue="updateField('clientEmail', $event)"
        @blur-field="validateField('clientEmail', $event)"
      />

      <CustomInput
        input-id="clientName"
        :model-value="formData.clientName"
        :errors="errors"
        :lang="lang"
        :label="lang.form_label2"
        @update:modelValue="updateField('clientName', $event)"
        @blur-field="validateField('clientName', $event)"
      />

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

        <button
          v-if="status.isSuccess"
          @click="resetForm"
          class="reset-btn"
          v-html="lang.form_reset_button"
        ></button>
      </div>
      <div class="message-block">
        <p class="success-message" v-if="status.isSuccess" v-html="lang.form_success_msg"></p>
        <div v-if="status.errorMessage" class="error-message">
          {{ status.errorMessage }}
        </div>
      </div>

      <!-- Сообщения о статусе -->
    </form>
  </div>
</template>

<style></style>
