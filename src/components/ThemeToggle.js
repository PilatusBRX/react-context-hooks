// Exemplo 1:

import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';

class ThemeToggle extends Component {
  static contextType = ThemeContext;
  render() {
    const { toggleTheme } = this.context;
    return <button onClick={toggleTheme}>Toggle the theme</button>;
  }
}

export default ThemeToggle;

// Exemplo 2:

// import React from 'react';
// import { ThemeContext } from '../context/ThemeContext';

// const ThemeToggle = () => {
//   return (
//     <ThemeContext.Consumer>
//       {context => {
//         const { toggleTheme } = context;
//         return <button onClick={toggleTheme}>Toggle the theme</button>;
//       }}
//     </ThemeContext.Consumer>
//   );
// };

// export default ThemeToggle;
