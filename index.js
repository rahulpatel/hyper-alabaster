'use strict';

const backgroundColor = '#F7F7F7';
const foregroundColor = '#000000';
const borderColor = '#CCCCCC';
const cursorColor = '#007ACC';
const colors = {
  white: '#BBBBBB',
  black: '#000000',
  blue: '#325CC0',
  cyan: '#0083B2',
  green: '#448C27',
  magenta: '#7A3E9D',
  red: '#AA3731',
  yellow: '#CB9000',

  lightWhite: '#FFFFFF',
  lightBlack: '#777777',
  lightBlue: '#007ACC',
  lightCyan: '#00AACB',
  lightGreen: '#60CB00',
  lightMagenta: '#E64CE6',
  lightRed: '#F05050',
  lightYellow: '#FFBC5D',
};

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor,
    cursorColor,
    colors,
    termCSS: `
      ${config.termCSS || ''}
    `,
    css: `
      ${config.css || ''}

      // Inactive tab
      .tab_tab {
        background-color: ${colors.white};
        color: ${colors.lightBlack};
      }

      // Active tab
      .tab_tab:hover,
      .tab_tab.tab_active,
      .tabs_title,
      .tab_icon:before {
        background-color: ${backgroundColor};
        color: ${foregroundColor}
      }

      // Tab process icon
      .tab_tab:hover .tab_process:before,
      .tab_tab.tab_active .tab_process:before,
      .tabs_title .tab_process:before {
        background-color: ${foregroundColor}
      }
    `,
  });
};
