import { defineStore } from 'pinia'
import { useTextStore } from './text'
import axios from 'axios'

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
      const email = this.formData.clientEmail,
        name = this.formData.clientName,
        text = this.formData.projectDescription
      switch (field) {
        case 'clientEmail':
          this.errors.clientEmail =
            !value && (name || text)
              ? errorTexts.emailRequired
              : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
                ? errorTexts.emailInvalid
                : value.trim().length > 50
                  ? errorTexts.emailTooLong
                  : ''
          break

        case 'clientName':
          this.errors.clientName =
            !value && (email || name)
              ? errorTexts.nameRequired
              : value.trim().length < 2
                ? errorTexts.nameTooShort
                : value.trim().length > 50
                  ? errorTexts.nameTooLong
                  : ''
          break

        case 'projectDescription':
          this.errors.projectDescription =
            !value && (email || name)
              ? errorTexts.descriptionRequired
              : value.trim().length < 15
                ? errorTexts.descriptionTooShort
                : value.trim().length > 400
                  ? errorTexts.descriptionTooLong
                  : ''
          break
      }
    },

    // Отправка формы на сервер
    async submitRequest() {
      if (this.hasErrors) return false

      this.status.isSending = true
      this.status.errorMessage = ''
      this.status.isSuccess = false

      try {
        await axios.post(
          'https://mail-sender-eta-steel.vercel.app/api/form',
          {
            name: this.formData.clientName.trim(),
            email: this.formData.clientEmail.trim(),
            text: this.formData.projectDescription.trim(),
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        )

        this.status.isSuccess = true
        return true
      } catch (error) {
        const textStore = useTextStore()
        const errorTexts = textStore.chooseLang
          ? textStore.ru.form_errors
          : textStore.en.form_errors

        let errorMsg = errorTexts.submitError || 'Не удалось отправить форму'

        if (error.response) {
          // Сервер ответил с кодом ошибки (4xx, 5xx)
          errorMsg =
            error.response.data?.error ||
            error.response.data?.message ||
            `Ошибка ${error.response.status}: ${error.response.statusText}`
        } else if (error.request) {
          // Запрос отправлен, но ответа нет (проблемы с сетью, CORS и т.д.)
          errorMsg = 'Нет ответа от сервера. Проверьте соединение.'
        } else {
          // Ошибка при настройке запроса
          errorMsg = error.message || 'Ошибка при отправке запроса'
        }

        this.status.errorMessage = errorMsg
        console.error('Ошибка отправки формы:', error)
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
