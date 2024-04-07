import type { Preview } from "@storybook/react";

import "@/styles/reset.css";
import "@/styles/core.css";
import "@/styles/typography.css";
import "@/styles/color.css";
import "@/styles/animations.css";
import "@/styles/scroll.css";
import "@/styles/sizing.css";
import "@/styles/utils.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
