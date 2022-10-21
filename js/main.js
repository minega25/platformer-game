import SpriteSheet from "./spritesheet";
import { loadImage, loadLevel } from "./loaders";

const SPRITE_COMPLETE_URL = "./assets/Spritesheets/spritesheet_complete.png";
const BACKGROUND = "./assets/Backgrounds/colored_desert.png";
const TILE_WIDTH = 128;
const TILE_HEIGHT = 256;
const ACTUAL_WIDTH = 42;
const ACTUAL_HEIGHT = 84;

const canvas = document.getElementById("screen");

const context = canvas.getContext("2d");

context.fillRect(0, 0, 640, 480);

loadImage(BACKGROUND).then((image) => {
  canvas.getContext("2d").drawImage(image, 0, 0, 640, 480);
});

const defineSprites = (sprites) => {
  sprites.define("hero", 260, 258);
  sprites.defineTile("dirt", 1820, 910);
};

const drawMap = (level, sprites) => {
  loadLevel(level).then(({ map }) => {
    const mapItems = new Map();
    mapItems.set("=", "dirt");

    for (let i = 0; i < map.length; i++) {
      map[i].split("").forEach((item, index) => {
        if (mapItems.has(item)) {
          console.log("index :>> ", index);
          console.log("i :>> ", i);
          const sprite = mapItems.get(item);
          sprites.draw(sprite, context, index * 32, i * 60);
        }
      });
    }
  });
};

loadImage(SPRITE_COMPLETE_URL).then((image) => {
  const sprites = new SpriteSheet(
    image,
    TILE_WIDTH,
    TILE_HEIGHT,
    ACTUAL_WIDTH,
    ACTUAL_HEIGHT
  );

  defineSprites(sprites);
  sprites.draw("hero", context, 0, 0);

  drawMap("1-1", sprites);
});

