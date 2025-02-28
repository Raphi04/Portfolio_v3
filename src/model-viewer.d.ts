declare module "@google/model-viewer" {
  const ModelViewer: React.ComponentType<React.HTMLProps<HTMLElement>>;
  export default ModelViewer;
}

namespace JSX {
  interface IntrinsicElements {
    "model-viewer": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      src?: string;
      alt?: string;
      loading?: string;
      scale?: string;
      "auto-rotate"?: boolean | string;
      "auto-rotate-delay"?: string;
      "rotation-per-second"?: string;
      "camera-controls"?: boolean | string;
      "skybox-image"?: string;
      "environment-image"?: string;
      "shadow-intensity"?: string | number;
      ar?: boolean | string;
      "max-camera-orbit"?: string;
    };
  }
}
