export const title = 'Button';
export const pathRoot = 'Example'; 

export const config = {
  title: `${pathRoot}/${title}`,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/tVVtW6tHgghun8aY261M5z/Outpost-platform-(and-Scout-etc)?node-id=133%3A2162'
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
        labels: ['default', 'primary', 'outline', 'danger', 'link', 'invisible']
      },
      table: {
        category: 'CSS',
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
      type: 'string',
      name: 'label',
      description: 'string',
      table: {
        category: 'HTML'
      }
    },
    disabled: {
      control: {type: 'boolean'},
      table: {
        category: 'Interactive',
        defaultValue: { disabled: false }
      }
    },
    fullWidth: {
      control: {type: 'boolean'},
      table: {
        category: 'CSS',
        defaultValue: { fullWidth: false }
      }
    },
    selected: {
      control: {type: 'boolean'},
      table: {
        category: 'CSS',
        defaultValue: { fullWidth: false }
      }
    },
  }
}

