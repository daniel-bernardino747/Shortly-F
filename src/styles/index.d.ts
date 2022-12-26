import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;

      highlight: string;
      background: string;

      text: {
        primary: string;
        secundary: string;

        highlight: string;
        reverseBackground: string;
      };

      shadow: {
        primary: string;
        highlight: string;
      };
    };
  }
}
