import {Template} from './template'
import { pathRoot, title } from './config'
export default {
  title: `${pathRoot}/${title}/Features`
}

export const Disabled = Template.bind({})
Disabled.storyName = 'Disabled'
Disabled.args = {
  label: 'Disabled',
  disabled: true,
  children: <>:disabled Button</>
}

export const LinkButton = Template.bind({})
LinkButton.storyName = 'Button as A'
LinkButton.args = {
  label: 'Button as A',
  element: 'link',
  children: <>Link Button</>
}
