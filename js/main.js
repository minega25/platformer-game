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
import KeyboardState from "./KeyboardState";

Promise.all([loadSpriteSheet(), loadLevel("1-1"), loadBackgroundSprite()]).then(
  ([sprites, { map }, backgroundImage]) => {
    const backgroundLayer = createBackgroundLayer(backgroundImage);
    const spritesLayer = createSpritesLayer(map, level11MapItems, sprites);

    const gravity = 2000;
    const mario = createMario();
    mario.pos.set(10, 200);

    const comp = new Compositor();
    comp.layers.push(backgroundLayer);
    comp.layers.push(spritesLayer);
    comp.layers.push(mario.draw(sprites, mario.pos));

    const timer = new Timer();
    const input = new KeyboardState();
    const SPACE = 32;

    input.addMapping(SPACE, (keyCode) => {
      if (keyCode) {
        mario.jump.start();
      } else {
        mario.jump.cancel();
      }
    });

    input.listenTo(window);

    timer.update = (deltaTime) => {
      mario.update(deltaTime);
      mario.vel.y += gravity * deltaTime;
      comp.draw(context);
    };

    timer.start();
  }
);

