import { defineStore } from 'pinia'

export const useTextStore = defineStore('textStore', {
  state: () => ({
    en: {
      block1_H1: `Hello,<br /> this is my <br /> portfolio`,
      block2_H2: `About me`,
      block2_H3_part1: `Education`,
      block2_P_part1: `I am currently a 2nd year student at RTU MIREA<br />
        majoring in "Fullstack Development" (2025).`,
      block2_H3_part2: `Goals`,
      block2_P_part2: `Gain work experience, more knowledge and skills in my field.<br />
        Currently looking for an internship<br />
        where I can work while studying at the university.`,
      block3_H2: `Skills`,
      block3_H3_part1: `General knowledge`,
      block3_P_part1: `I have experience with Python, C++, C#,<br />
    PostgreSQL, Vue.js, React.js, JavaScript,<br />
    SASS, SCSS, CSS, html`,
      block3_H3_part2: `Tech stacks`,
      block3_P_part2: `My main stack is Vue.js<br />
    I write using JavaScript for the functional part of the project,<br />
    "complex" animations, backend integration, etc.,<br />
    SASS preprocessor for comfortable and concise<br />
    style writing,<br />
    classic html for markup.`,
      block4_H2: `Me`,
      block4_H3: `My interests`,
      block4_P: `In my free time I enjoy<br />
    drawing, gaming<br />
    and studying interesting animations and frontend tricks.`,
      form_H2: `Write to me`,
      form_label1: `Your email address`,
      form_label2: `How to address you`,
      form_label3: `Describe what you need`,
      form_button_text: `Submit request`,
      form_button_status: `Sending...`,
      form_reset_button: `Submit new request`,
      form_success_msg: `Thank you for your request! I'll contact you shortly.`,
      form_errors: {
        emailRequired: 'Email is required',
        emailInvalid: 'Invalid email format',
        nameRequired: 'Please provide your name',
        nameTooShort: 'Name is too short',
        descriptionRequired: 'Please describe your project',
        descriptionTooShort: 'Please provide more details (min 15 characters)',
        submitError: 'Request submission failed',
      },
      card_name: `Timofeev Ivan`,
      card_country: `Moscow`,
      modal_window:`Drag`,
    },
    ru: {
      block1_H1: `Здравствуйте,<br /> это моё <br /> портфолио`,
      block2_H2: `Обо мне`,
      block2_H3_part1: `Обучение`,
      block2_P_part1: `Сейчас я учусь на 2м курсе в РТУ МИРЭА<br />
            на направлении “Фуллстек разработка” 2025 г.`,
      block2_H3_part2: `Цели`,
      block2_P_part2: ` Получить опыт работы, больше знаний и навыков в своей области.<br />
            На данный момент ищу стажировку,<br />
            на которой смогу работать параллельно учёбе в вузе.`,
      block3_H2: `Навыки`,
      block3_H3_part1: `Общие знания`,
      block3_P_part1: `У меня есть опыт работы с Python, C++, C#,<br />
    PostgreSQL, Vue.js, React.js, JavaScript,<br />
    SASS, SCSS, CSS, html`,
      block3_H3_part2: `Стеки`,
      block3_P_part2: `Моим основным стеком является Vue.js<br />
    Я пишу используя JavaScript для функциональной части проекта,<br />
    "сложных" анимаций, связки с бекэндом и т.д.,<br />
    препроцессор SASS для комфортного и лаконичного<br />
    написания стилей,<br />
    классический html для разметки.`,
      block4_H2: `Я`,
      block4_H3: `Мои интересы`,
      block4_P: `Свободное время я люблю проводить за<br />
    рисованием, играми<br />
    и изучением интересных анимаций и фишек во фронтенде.`,
      form_H2: `Напишите мне`,
      form_label1: `Напишите ваш email`,
      form_label2: `Как к вам обращаться`,
      form_label3: `Опишите что вам нужно`,
      form_button_text: `Отправить запрос`,
      form_button_status: `Отправка...`,
      form_reset_button: `Отправить новый запрос`,
      form_success_msg: `Спасибо за вашу заявку! Я свяжусь с вами в ближайшее время.`,
      form_errors: {
        emailRequired: 'Email обязателен',
        emailInvalid: 'Некорректный email',
        nameRequired: 'Укажите, как к вам обращаться',
        nameTooShort: 'Слишком короткое имя',
        descriptionRequired: 'Опишите ваш проект',
        descriptionTooShort: 'Опишите подробнее (минимум 15 символов)',
        submitError: 'Ошибка при отправке запроса',
      },
      card_name: `Тимофеев Иван`,
      card_country: `Москва`,
      modal_window:`Перетаскивание`,
    },
    chooseLang: true,
  }),
  persist: true,
  getters: {},

  actions: {
    switchLanguage() {
      this.chooseLang = !this.chooseLang
    },
  },
})
