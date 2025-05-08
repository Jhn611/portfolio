import { defineStore } from 'pinia'
import { useTextStore } from './text'

export const useClientRequestStore = defineStore('clientRequest', {
  state: () => ({
    formData: {
      clientEmail: '',
      clientName: '',
      projectDescription: '',
    },

    errors: {
      clientEmail: '',
      clientName: '',
      projectDescription: '',
    },

    status: {
      isSending: false,
      isSuccess: false,
      errorMessage: '',
    },
  }),
  persist: true,
  getters: {
    isValidForm(state) {
      return (
        state.formData.clientEmail &&
        state.formData.clientName &&
        state.formData.projectDescription &&
        !this.hasErrors
      )
    },

    hasErrors(state) {
      return state.errors.clientEmail || state.errors.clientName || state.errors.projectDescription
    },
  },

  actions: {
    // Обновление поля с валидацией
    updateField(field, value) {
      this.formData[field] = value
      this.validateField(field, value)
    },

    // Валидация конкретного поля
    validateField(field, value) {
      const textStore = useTextStore()
      const errorTexts = textStore.chooseLang ? textStore.ru.form_errors : textStore.en.form_errors

      switch (field) {
        case 'clientEmail':
          this.errors.clientEmail = !value
            ? errorTexts.emailRequired
            : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
              ? errorTexts.emailInvalid
              : ''
          break

        case 'clientName':
          this.errors.clientName = !value
            ? errorTexts.nameRequired
            : value.length < 2
              ? errorTexts.nameTooShort
              : ''
          break

        case 'projectDescription':
          this.errors.projectDescription = !value
            ? errorTexts.descriptionRequired
            : value.length < 15
              ? errorTexts.descriptionTooShort
              : ''
          break
      }
    },

    // Отправка формы
    async submitRequest() {
      if (this.hasErrors) return false

      this.status.isSending = true
      this.status.errorMessage = ''

      try {
        await new Promise((resolve) => setTimeout(resolve, 1500))
        this.status.isSuccess = true
        return true
      } catch (error) {
        const textStore = useTextStore()
        const errorTexts = textStore.chooseLang
          ? textStore.ru.form_errors
          : textStore.en.form_errors
        this.status.errorMessage = error.message || errorTexts.submitError
        return false
      } finally {
        this.status.isSending = false
      }
    },

    // Сброс формы
    resetForm() {
      this.formData = {
        clientEmail: '',
        clientName: '',
        projectDescription: '',
      }
      this.errors = {
        clientEmail: '',
        clientName: '',
        projectDescription: '',
      }
      this.status = {
        isSending: false,
        isSuccess: false,
        errorMessage: '',
      }
    },
    revalidateAllFields() {
      this.validateField('clientEmail', this.formData.clientEmail)
      this.validateField('clientName', this.formData.clientName)
      this.validateField('projectDescription', this.formData.projectDescription)
    },
  },
})
