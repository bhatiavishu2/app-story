<template>
  <div>
  <label :for="id" v-if="label">{{ label }}</label>
  <input
    :id="id"
    :disabled="disabled"
    :type="type"
    :value="value"
    :class="['input', state]"
    :placeholder="placeholder"
    @input="onInput($event.target.value)"
    @focus="onFocus($event.target.value)"
  />
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String,
      default: null,
    },
    placeholder: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    wrapper: {
      type: String,
      default: 'div',
    },
    id: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    state: {
      type: String,
      default: null,
    },
  },
  methods: {
    onInput(value) {
      this.$emit('change', value);
    },
    onFocus(value) {
      this.$emit('focus', value);
    },
  },
};
</script>

<style scoped>
$color-placeholder: tint($color-silver, 50%);

.input {
  @include stack-space($space-s);
  font-weight: $weight-normal;
  font-family: $font-text;
  font-size: $size-m;
  line-height: $line-height-xs;
  width: auto;
  &-expand {
    width: 100%;
  }
  label {
    cursor: pointer;
    display: block;
    font-size: $size-s;
    color: tint($color-rich-black, 20%);
    @include stack-space($space-xs);
  }
  input {
    @include reset;
    @include inset-squish-space($space-s);
    transition: all 0.2s ease;
    -webkit-appearance: none;
    appearance: none;
    font-size: $size-m;
    font-family: $font-text;
    background: $color-white;
    border-radius: $radius-default;
    color: set-text-color($color-rich-black, $color-white);
    width: 100%;
    margin: 0;
    border: 0;
    box-shadow: inset 0 1px 0 0 rgba($color-rich-black, 0.07),
      0 0 0 1px tint($color-rich-black, 80%);
    &::-webkit-input-placeholder {
      -webkit-font-smoothing: antialiased;
      color: $color-placeholder;
    }
    &:-ms-input-placeholder {
      color: $color-placeholder;
    }
    &::-moz-placeholder {
      color: $color-placeholder;
      -moz-osx-font-smoothing: grayscale;
      opacity: 1;
    }
    &:hover,
    &.hover {
      box-shadow: 0 1px 5px 0 rgba($color-rich-black, 0.07),
        0 0 0 1px tint($color-rich-black, 60%);
    }
    &:focus,
    &.focus {
      transition: box-shadow 0.2s ease;
      box-shadow: inset 0 0 0 1px $color-bleu-de-france,
        0 0 0 1px $color-bleu-de-france;
      outline: 0;
    }
    &[disabled] {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      box-shadow: 0 0 0 1px tint($color-rich-black, 80%);
      background: lighten($color-placeholder, 42%);
      color: tint($color-placeholder, 20%);
      cursor: not-allowed;
      opacity: 0.7;
    }
  }
}
</style>
