import {Template} from './template'
import { pathRoot, title } from './config'
export default {
  title: `${pathRoot}/${title}/Presets`
}

export const Button = Template.bind({})
Button.storyName = 'Button'
Button.args = {
  label: 'Button',
  disabled: false,
  solid: false,
  children: <>Button</>
}

export const SolidButton = Template.bind({})
SolidButton.storyName = 'Solid'
SolidButton.args = {
  label: 'Solid button',
  disabled: true,
  solid: true,
  children: <>Solid Button</>
}

export const LinkButton = Template.bind({})
LinkButton.storyName = 'Link'
LinkButton.args = {
  label: 'Link button',
  disabled: true,
  link: true,
  element: 'link',
  children: <>Solid Button</>
}

export const LinkButtonPrimary = Template.bind({})
LinkButtonPrimary.storyName = 'Primary'
LinkButtonPrimary.args = {
  label: 'Link button primary',
  disabled: true,
  primary: true,
  link: true,
  children: <>Solid Button</>
}
