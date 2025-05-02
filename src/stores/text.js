import { defineStore } from 'pinia'

export const useTextStore = defineStore('textStore', {
  state: () => ({
    en: {},
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
