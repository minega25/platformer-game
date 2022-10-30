import { loadLevel } from "./loaders";
import {
  loadBackgroundSprite,
  loadSpriteSheet,
  level11MapItems,
  context,
} from "./sprites";
import { createBackgroundLayer, createSpritesLayer } from "./layers";
import Compositor from "./compositor";
import { createMario } from "./entities";
import Timer from "./Timer";

Promise.all([loadSpriteSheet(), loadLevel("1-1"), loadBackgroundSprite()]).then(
  ([sprites, { map }, backgroundImage]) => {
    const backgroundLayer = createBackgroundLayer(backgroundImage);
    const spritesLayer = createSpritesLayer(map, level11MapItems, sprites);
    const mario = createMario();
    const gravity = 30;
    mario.pos.set(10, 200);
    mario.vel.set(200, -640);
    const comp = new Compositor();
    comp.layers.push(backgroundLayer);
    comp.layers.push(spritesLayer);
    comp.layers.push(mario.draw(sprites, mario.pos));
    const timer = new Timer();

    timer.update = (deltaTime) => {
      mario.update(deltaTime);
      mario.vel.y += gravity;
      comp.draw(context);
    };

    timer.start();
  }
);

