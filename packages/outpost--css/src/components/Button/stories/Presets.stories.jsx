import {Template} from './template'
import { pathRoot, title } from './config'
export default {
  title: `${pathRoot}/${title}/Presets`
}

export const Button = Template.bind({})
Button.storyName = 'Button'
Button.args = {
  label: 'Button',
  disabled: true
}

export const SolidButton = Template.bind({})
SolidButton.storyName = 'Solid button'
SolidButton.args = {
  label: 'Solid button',
  disabled: true
}

export const LinkButton = Template.bind({})
LinkButton.storyName = 'Link button'
LinkButton.args = {
  label: 'Link button',
  disabled: true
}

export const LinkButtonPrimary = Template.bind({})
LinkButtonPrimary.storyName = 'Link button primary'
LinkButtonPrimary.args = {
  label: 'Link button primary',
  disabled: true
}
