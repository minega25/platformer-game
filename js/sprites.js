import SpriteSheet from "./spritesheet";
import { loadImage } from "./loaders";
import {
  ACTUAL_HEIGHT,
  ACTUAL_WIDTH,
  TILE_HEIGHT,
  TILE_WIDTH,
  BACKGROUND,
  SPRITE_COMPLETE_URL,
} from "./constants";

const defineSprites = (sprites) => {
  sprites.define("hero", 260, 258);
  sprites.defineTile("dirt", 1820, 910);
};

export function level11MapItems() {
  const mapItems = new Map();
  mapItems.set("=", "dirt");
  return mapItems;
}

const canvas = document.getElementById("screen");
export const context = canvas.getContext("2d");
context.fillRect(0, 0, 640, 480);

export function loadBackgroundSprite() {
  return loadImage(BACKGROUND);
}

export function loadSpriteSheet() {
  return loadImage(SPRITE_COMPLETE_URL).then((image) => {
    const sprites = new SpriteSheet(
      image,
      TILE_WIDTH,
      TILE_HEIGHT,
      ACTUAL_WIDTH,
      ACTUAL_HEIGHT
    );
    defineSprites(sprites);
    return sprites;
  });
}
