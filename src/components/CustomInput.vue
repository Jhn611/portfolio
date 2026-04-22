<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    inputId: {
      type: String,
      required: true,
    },
    errors: {
      type: Object,
      required: true,
    },
    lang: {
      type: Object,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
  },

  emits: ['update:modelValue', 'blur-field'],
  data() {
    return {
    }
  },
  methods: {
    onInput(event) {
      this.$emit('update:modelValue', event.target.value)
    },

    onBlur() {
      this.$emit('blur-field', this.modelValue)
    },
  },
}
</script>

<template>
  <label class="input">
    <input
      class="input__field"
      :id="inputId"
      :value="modelValue"
      @input="onInput"
      @blur="onBlur"
      :type="type"
      placeholder=" "
      :class="{ invalid: errors[inputId] }"
    />

    <span class="input__label" v-html="label"></span>
    <span class="error raleway" v-if="errors[inputId]">
      {{ errors[inputId] }}
    </span>
  </label>
</template>

<style></style>
