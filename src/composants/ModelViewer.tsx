import "@google/model-viewer";
import { useEffect, useRef } from "react";

interface modelViewerProps {
  src: string;
  alt: string;
  loading: string;
  scale?: string;
  autoRotate?: boolean;
  autoRotateDelay?: string;
  rotationPerSecond?: string;
  cameraControls?: boolean;
  cameraOrbit?: string;
  fieldOfView?: string;
  skyboxImage?: string;
  environmentImage?: string;
  shadowIntensity?: number;
  ar?: boolean;
  maxCameraOrbit?: string;
}

export default function ModelViewer({
  src,
  alt,
  loading,
  scale,
  autoRotate,
  autoRotateDelay,
  rotationPerSecond,
  cameraControls,
  cameraOrbit,
  fieldOfView,
  skyboxImage,
  environmentImage,
  shadowIntensity,
  ar,
  maxCameraOrbit,
}: modelViewerProps) {
  const modelRef = useRef<any>(null);

  useEffect(() => {
    const model = modelRef.current;
    if (model) {
      const applyScale = () => {
        model.setAttribute("scale", scale);
      };

      model.addEventListener("load", applyScale);
      return () => model.removeEventListener("load", applyScale);
    }
  }, [scale]);

  return (
    <model-viewer
      ref={modelRef}
      src={src}
      alt={alt}
      loading={loading}
      auto-rotate={autoRotate ? "true" : undefined}
      auto-rotate-delay={autoRotateDelay}
      rotation-per-second={rotationPerSecond}
      camera-controls={cameraControls ? "true" : undefined}
      camera-orbit={cameraOrbit}
      field-of-view={fieldOfView}
      skybox-image={skyboxImage}
      environment-image={environmentImage}
      shadow-intensity={shadowIntensity}
      min-camera-orbit="auto auto auto"
      max-camera-orbit={maxCameraOrbit}
      ar={ar ? "true" : undefined}
      interaction-prompt="none"
      touch-pan="none"
    />
  );
}
