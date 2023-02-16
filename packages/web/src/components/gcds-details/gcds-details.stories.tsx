export default {
  title: 'Components/Details',

  argTypes: {
    // Props
    detailsTitle: {
      name: 'details-title',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '-' }
      },
      type: {
        required: true
      }
    },
    open: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false }
      }
    },

    // Slots
    default: {
      control: {
        type: 'text',
      },
      table: {
        category: 'Slots | Fentes',
      }
    },
  },
};

const Template = (args) => `
// Web Component (Angular, Vue)
<gcds-details
  details-title="${args.detailsTitle}"
  open="${args.open}"
>
  ${args.default}
</gcds-details>

// React code
<GcdsDetails
  detailsTitle="${args.detailsTitle}"
  open="${args.open}"
>
  ${args.default}
</GcdsDetails>
`;

export const Default = Template.bind({});
Default.args = {
  detailsTitle: 'Find out more',
  open: false,
  default: 'Extra content',
};
