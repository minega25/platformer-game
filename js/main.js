import SpriteSheet from "./spritesheet";
import { loadImage } from "./loaders";
import convertToJSON from "./convertXMLToJSON";
import SPRITE_COMPLETE_DATA from "../assets/Spritesheets/spritesheet_complete.xml";

const SPRITE_COMPLETE_URL = "./assets/Spritesheets/spritesheet_complete.png";
const BACKGROUND = "./assets/Backgrounds/colored_shroom.png";
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

const spriteData = convertToJSON(SPRITE_COMPLETE_DATA);

loadImage(SPRITE_COMPLETE_URL).then((image) => {
  const sprites = new SpriteSheet(
    image,
    TILE_WIDTH,
    TILE_HEIGHT,
    ACTUAL_WIDTH,
    ACTUAL_HEIGHT
  );

  sprites.define("hero", 0, 0);
  sprites.draw("hero", context, 0, 0);
});

