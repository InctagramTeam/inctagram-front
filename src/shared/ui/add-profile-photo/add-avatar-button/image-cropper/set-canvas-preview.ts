import { PixelCrop } from "react-image-crop";

const setCanvasPreview = (
  image: HTMLImageElement,
  canvas: HTMLCanvasElement,
  crop: PixelCrop,
): void => {
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("No 2d context");
  }

  const pixelRatio = window.devicePixelRatio || 1;
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;

  const width = Math.floor(crop.width * scaleX * pixelRatio);
  const height = Math.floor(crop.height * scaleY * pixelRatio);

  canvas.width = width;
  canvas.height = height;

  ctx.setTransform(
    pixelRatio,
    0,
    0,
    pixelRatio,
    -crop.x * scaleX,
    -crop.y * scaleY,
  );
  ctx.imageSmoothingQuality = "high";

  ctx.drawImage(
    image,
    0,
    0,
    image.naturalWidth,
    image.naturalHeight,
    0,
    0,
    image.naturalWidth,
    image.naturalHeight,
  );
};

export default setCanvasPreview;
