import { ExampleButtonTemplate } from './ExampleButtonTemplate'
import { ExampleButtonConfig } from './ExampleButtonConfig'

export default {
  ...ExampleButtonConfig
}

// the default playground area to view stories
export const Playground = ExampleButtonTemplate.bind({})
Playground.args = {
  closeBtn: false,
  focusElement: false,
  focusAllElements: false
}
