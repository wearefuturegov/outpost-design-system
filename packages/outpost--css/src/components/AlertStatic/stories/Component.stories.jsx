import { Template } from './template'
import { config } from './config'

export default {
  ...config
}

console.log(...config)

// the default playground area to view stories
export const Playground = Template.bind({})
Playground.args = {
  storyTitle: 'Components/Label/Label',
}

