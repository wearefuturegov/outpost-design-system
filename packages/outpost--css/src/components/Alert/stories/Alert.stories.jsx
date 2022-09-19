import { AlertTemplate } from './AlertTemplate'
import { AlertConfig } from './AlertConfig'

export default {
  ...AlertConfig
}

// the default playground area to view stories
export const Playground = AlertTemplate.bind({})
Playground.args = {
  linkText: "Alert",
  link: "#"
}
