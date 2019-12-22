import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import Input from './Input.vue'
storiesOf('Input', module)
.add('Input Sample', () => (
    '<Input />'
))
.add('Input Sample with label', () => (
    '<Input label="Name"/>'
))
.add('Input Sample with disabled', () => (
    '<Input disabled="true" />'
))
.add('Input Sample with placeholder', () => (
    '<Input placeholder="test" />'
))