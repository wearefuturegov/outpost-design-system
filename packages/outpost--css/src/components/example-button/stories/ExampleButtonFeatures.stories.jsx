import {ExampleButtonTemplate} from './ExampleButtonTemplate'
import { ExampleButtonPathRoot, ExampleButtonTitle } from './ExampleButtonConfig'
export default {
  title: `${ExampleButtonPathRoot}/${ExampleButtonTitle}/Features`
}

export const Disabled = ExampleButtonTemplate.bind({})
Disabled.storyName = 'Disabled'
Disabled.args = {
  label: 'Disabled',
  disabled: true
}
