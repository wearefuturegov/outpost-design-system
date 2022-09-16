import {ExampleButtonTemplate} from './ExampleButton.template'

export default {
  title: 'Examples/Example Button/Features'
}

export const Disabled = ExampleButtonTemplate.bind({})
Disabled.storyName = 'Disabled'
Disabled.args = {
  label: 'Disabled',
  disabled: true
}
