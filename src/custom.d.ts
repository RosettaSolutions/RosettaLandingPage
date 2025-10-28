interface ImportMetaEnv {
  VITE_EMAIL_CONTACT: string;
  VITE_GITHUB_URL: string;
  VITE_LINKEDIN_URL: string;
  VITE_EMAILJS_TEMPLATE_ID: string;
  VITE_EMAILJS_SERVICE_ID: string;
  VITE_EMAILJS_PUBLIC_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.svg" {
  import * as React from "react";
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  const src: string;
  export default src;
}

declare module "*.png" {
  const value: string;
  export default value;
}
