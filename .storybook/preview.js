import '../src/components/Tile/style.css';
import '../src/components/Tables/style.css';
import '../src/components/Menu/style.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}