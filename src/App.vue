<script>
export default {
  data() {},
  methods: {
    mouseMove(event) {
      let el = document.querySelector('.background-effect')
      if (window.screen.width < 600) {
        el.style.display = 'none'
      } else {
        el.style.display = 'block'
        el.style.left = event.clientX + 'px'
        el.style.top = event.clientY + 'px'
      }
      // console.log('move')
      // console.log(event.clientX, event.clientY)
      //console.log(el)
      //console.log(this.$refs.backgroundEffect)
    },
    copyEmail(event) {
      console.log(event.clientX, event.clientY)
      navigator.clipboard.writeText('ivantimofeev1912@gmail.com')
      let el = document.querySelector('.copy-block')
      el.style.display = 'block'
      el.style.left = event.clientX + 'px'
      el.style.top = event.clientY + 'px'
    },
  },
}
</script>

<template>
  <div class="page" @mouseenter="mouseMove" @mousemove="mouseMove" @mouseleave="mouseMove">
    <header class="header"></header>
    <main class="main">
      <div class="main-left">
        <div class="main-left__text-block">
          <h1 class="h1-y2k text-gradient">
            <img class="h1-img" src="./assets/imgs/stars.png" alt="" />Иван Тимофеев
          </h1>
          <h3 class="h3-header text-gradient">Фронтэнд разработчик</h3>
          <p class="p-read text-gradient">
            Я создаю веб сайты и веб приложения с максималной точностью.
          </p>
        </div>
        <div class="nav-block">
          <nav class="nav-block__bar"></nav>
          <img class="nav-block__img" src=".\assets\imgs\bg_obj1.png" alt="" />
        </div>
        <footer>
          <p class="p-footer text-gradient pointer" @click="copyEmail">
            напишите мне - ivantimofeev1912@gmail.com
          </p>
        </footer>
        <!-- <div class="img-block-main">
          <img class="img-block-main__img" src="./assets/imgs/Pointing Up Left Hand.png" alt="" />
        </div> -->
      </div>
      <div class="main-right">
        <div class="main-right__text-block">
          <h3 class="h3-header text-default-color">Обо мне</h3>
          <p class="p-read text-default-color">
            Учитывая ключевые сценарии поведения, убеждённость некоторых оппонентов обеспечивает
            широкому кругу (специалистов) участие в формировании переосмысления внешнеэкономических
            политик. Сложно сказать, почему независимые государства лишь добавляют фракционных
            разногласий и призваны к ответу.
          </p>
          <p class="p-read text-default-color">
            Для современного мира глубокий уровень погружения является качественно новой ступенью
            направлений прогрессивного развития. Каждый из нас понимает очевидную вещь: сплочённость
            команды профессионалов требует от нас анализа инновационных методов управления
            процессами.
          </p>
          <p class="p-read text-default-color">
            Картельные сговоры не допускают ситуации, при которой диаграммы связей будут
            ассоциативно распределены по отраслям. А также базовые сценарии поведения пользователей
            заблокированы в рамках своих собственных рациональных ограничений. А также некоторые
            особенности внутренней политики и по сей день остаются уделом либералов, которые жаждут
            быть смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего
            возрастает их статус бесполезности.
          </p>
          <p class="p-read text-default-color">
            Учитывая ключевые сценарии поведения, убеждённость некоторых оппонентов обеспечивает
            широкому кругу (специалистов) участие в формировании переосмысления внешнеэкономических
            политик. Сложно сказать, почему независимые государства лишь добавляют фракционных
            разногласий и призваны к ответу.
          </p>
          <p class="p-read text-default-color">
            Для современного мира глубокий уровень погружения является качественно новой ступенью
            направлений прогрессивного развития. Каждый из нас понимает очевидную вещь: сплочённость
            команды профессионалов требует от нас анализа инновационных методов управления
            процессами.
          </p>
          <p class="p-read text-default-color">
            Картельные сговоры не допускают ситуации, при которой диаграммы связей будут
            ассоциативно распределены по отраслям. А также базовые сценарии поведения пользователей
            заблокированы в рамках своих собственных рациональных ограничений. А также некоторые
            особенности внутренней политики и по сей день остаются уделом либералов, которые жаждут
            быть смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего
            возрастает их статус бесполезности.
          </p>
          <p class="p-read text-default-color">
            Учитывая ключевые сценарии поведения, убеждённость некоторых оппонентов обеспечивает
            широкому кругу (специалистов) участие в формировании переосмысления внешнеэкономических
            политик. Сложно сказать, почему независимые государства лишь добавляют фракционных
            разногласий и призваны к ответу.
          </p>
          <p class="p-read text-default-color">
            Для современного мира глубокий уровень погружения является качественно новой ступенью
            направлений прогрессивного развития. Каждый из нас понимает очевидную вещь: сплочённость
            команды профессионалов требует от нас анализа инновационных методов управления
            процессами.
          </p>
          <p class="p-read text-default-color">
            Картельные сговоры не допускают ситуации, при которой диаграммы связей будут
            ассоциативно распределены по отраслям. А также базовые сценарии поведения пользователей
            заблокированы в рамках своих собственных рациональных ограничений. А также некоторые
            особенности внутренней политики и по сей день остаются уделом либералов, которые жаждут
            быть смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего
            возрастает их статус бесполезности.
          </p>
        </div>
      </div>
    </main>
    <div class="background-effect" ref="backgroundEffect"></div>
    <div class="copy-block"></div>
  </div>
</template>

<style src="./App.css"></style>
