export const title = 'Button';
export const pathRoot = 'Components'; 

export const config = {
  title: `${pathRoot}/${title}`,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/tVVtW6tHgghun8aY261M5z/Outpost-platform-(and-Scout-etc)?node-id=137%3A2166'
    },
    layout: 'padded'
  },


  argTypes: {
    presets: {
      options: [0, 1, 2, 3], // iterator
      mapping: [
        null,
        'btn--primary',
        'btn--link',
        'btn--solid',
      ], // values
      control: {
        type: 'select',
        labels: ['default', 'primary', 'link', 'solid']
      },
      table: {
        category: 'Presets'
      }
    },
    solid: {
      control: {type: 'boolean'},
      table: {
        category: 'CSS',
        defaultValue: { solid: false }
      }
    },
    primary: {
      control: {type: 'boolean'},
      table: {
        category: 'CSS',
        defaultValue: { primary: false }
      }
    },
    link: {
      control: {type: 'boolean'},
      table: {
        category: 'HTML',
        defaultValue: { link: false }
      }
    },
  }
}

