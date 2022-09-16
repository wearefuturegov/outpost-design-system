import {ExampleButtonTemplate} from './ExampleButton.template'


export default {
  title: 'Examples/Example Button',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/tVVtW6tHgghun8aY261M5z/Outpost-platform-(and-Scout-etc)?node-id=119%3A2138'
    },
    layout: 'padded'
  },

  excludeStories: ['ButtonTemplate'],
  argTypes: {
    variant: {
      options: [0, 1, 2, 3, 4, 5], // iterator
      mapping: [
        null,
        'example-button--primary',
        'example-button--outline',
        'example-button--danger',
        'example-button--link',
        'example-button--invisible',
      ], // values
      control: {
        type: 'select',
        labels: ['default', 'primary', 'outline', 'danger', 'link']
      },
      table: {
        category: 'CSS'
      }
    },
    size: {
      options: [0, 1, 2], // iterator
      mapping: [null, 'example-button--sm', 'example-button--lg'], // values
      control: {
        type: 'select',
        labels: ['default', 'small', 'large']
      },
      table: {
        category: 'CSS'
      }
    },
    label: {
      defaultValue: 'Button',
      type: 'string',
      name: 'label',
      description: 'string',
      table: {
        category: 'HTML'
      }
    },
    disabled: {
      defaultValue: false,
      control: {type: 'boolean'},
      table: {
        category: 'Interactive'
      }
    },
    fullWidth: {
      defaultValue: false,
      control: {type: 'boolean'},
      table: {
        category: 'CSS'
      }
    },
    selected: {
      defaultValue: false,
      control: {type: 'boolean'},
      table: {
        category: 'CSS'
      }
    },
  }
}




export const Playground = ExampleButtonTemplate.bind({})
Playground.args = {
  closeBtn: false,
  focusElement: false,
  focusAllElements: false
}
