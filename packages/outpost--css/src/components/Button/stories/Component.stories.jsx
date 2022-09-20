import { Template } from './template'
import { config } from './config'

const component = {
  ...config
}

export default component

// the default playground area to view stories
export const Playground = Template.bind({})
Playground.args = {
  children: <>Button text</>
}

