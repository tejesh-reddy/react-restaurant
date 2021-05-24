import '../src/components/atoms/Tile/style.css';
import '../src/components/organisms/Tables/style.css';
import '../src/components/organisms/Menu/style.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}