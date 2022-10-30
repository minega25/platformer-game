import { drawBackground, drawLevel, drawMario } from "./drawSprites";

export const createBackgroundLayer = (image) => {
  const buffer = document.createElement("canvas");
  buffer.width = 640;
  buffer.height = 480;
  const bufferContext = buffer.getContext("2d");
  drawBackground(image, bufferContext);

  return function drawBackgroundLayer(context) {
    context.drawImage(buffer, 0, 0);
  };
};

export const createSpritesLayer = (map, level11MapItems, sprites) => {
  const buffer = document.createElement("canvas");
  buffer.width = 640;
  buffer.height = 480;
  const bufferContext = buffer.getContext("2d");
  drawLevel(map, level11MapItems, sprites, bufferContext);

  return function drawSpritesLayer(context) {
    context.drawImage(buffer, 0, 0);
  };
};

export const createMarioLayer = (sprites, pos) => {
  return function drawMarioLayer() {
    drawMario(sprites, pos);
  };
};
