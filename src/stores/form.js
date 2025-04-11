import { defineStore } from 'pinia'

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
      switch (field) {
        case 'clientEmail':
          this.errors.clientEmail = !value
            ? 'Email обязателен'
            : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
              ? 'Некорректный email'
              : ''
          break

        case 'clientName':
          this.errors.clientName = !value
            ? 'Укажите, как к вам обращаться'
            : value.length < 2
              ? 'Слишком короткое имя'
              : ''
          break

        case 'projectDescription':
          this.errors.projectDescription = !value
            ? 'Опишите ваш проект'
            : value.length < 15
              ? 'Опишите подробнее (минимум 15 символов)'
              : ''
          break
      }
    },

    // Отправка формы
    async submitRequest() {
      // Проверка валидности
      if (this.hasErrors) return false

      this.status.isSending = true
      this.status.errorMessage = ''

      try {
        // Имитация запроса к API (замените на реальный)
        await new Promise((resolve) => setTimeout(resolve, 1500))

        // Здесь будет реальный запрос:
        // const response = await api.post('/requests', this.formData)

        this.status.isSuccess = true
        return true
      } catch (error) {
        this.status.errorMessage = error.message || 'Ошибка при отправке запроса'
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
  },
})
