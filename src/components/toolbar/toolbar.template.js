function toButton(button) {
  const meta = `
  data-type="button"
  data-value=${JSON.stringify(button.value)}
  `;

  return `
  <div 
    class="button ${button.active ? 'active' : ''}"
    ${meta}
  >
  <i 
    class="material-icons"
    ${meta}
  >${button.icon}
  </i>
  </div>
  `;
}

export function createToolbar(state) {
  const buttons = [
    {
      value: { textAlign: 'left' },
      icon: 'format_align_left',
      active: state['textAligh'] === 'left',
    },
    {
      value: { textAlign: 'center' },
      icon: 'format_align_center',
      active: state['textAligh'] === 'center',

    },
    {
      value: { textAlign: 'right' },
      icon: 'format_align_right',
      active: state['textAligh'] === 'right',
    },
    {
      value: { fontWeight: state['fontWeight'] === 'bold' ? 'normal' : 'bold' },
      icon: 'format_bold',
      active: state['fontWeight'] === 'bold',
    },
    {
      value: { fontStyle: state['fontStyle'] === 'italic' ?
       'normal' : 'italic' },
      icon: 'format_italic',
      active: false,
    },
    {
      value: { textDecoration: state['textDecoration'] === 'underline' ?
       'none' : 'underline' },
      icon: 'format_underlined',
      active: false,
    },
  ];

  return buttons.map(toButton).join('');
}
