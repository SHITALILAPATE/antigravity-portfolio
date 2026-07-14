export const drawImageCover = (
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  canvasWidth: number,
  canvasHeight: number
) => {
  const imgRatio = img.width / img.height;
  const canvasRatio = canvasWidth / canvasHeight;

  let renderWidth = canvasWidth;
  let renderHeight = canvasHeight;
  let x = 0;
  let y = 0;

  if (imgRatio > canvasRatio) {
    // Image is wider than canvas ratio, crop horizontally
    renderWidth = canvasHeight * imgRatio;
    x = (canvasWidth - renderWidth) / 2;
  } else {
    // Image is taller than canvas ratio, crop vertically
    renderHeight = canvasWidth / imgRatio;
    y = (canvasHeight - renderHeight) / 2;
  }

  // Use subpixel rendering for smoother motion
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  ctx.drawImage(img, Math.floor(x), Math.floor(y), Math.ceil(renderWidth), Math.ceil(renderHeight));
};
