export const preloadImages = (
  urls: string[],
  onProgress?: (progress: number) => void
): Promise<void[]> => {
  let loaded = 0;
  return Promise.all(
    urls.map((url) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
          loaded++;
          if (onProgress) onProgress(loaded / urls.length);
          resolve();
        };
        img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
      });
    })
  );
};
