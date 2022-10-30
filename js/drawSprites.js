import { context } from "./sprites";

export function drawLevel(map, defineMapItems, sprites, ctx) {
  const mapItems = defineMapItems();
  for (let i = 0; i < map.length; i++) {
    map[i].split("").forEach((item, index) => {
      if (mapItems.has(item)) {
        const sprite = mapItems.get(item);
        sprites.draw(sprite, ctx, index * 32, i * 60);
      }
    });
  }
}

export function drawBackground(image, ctx) {
  ctx.drawImage(image, 0, 0, 640, 480);
}

export function drawMario(sprites, pos) {
  sprites.draw("hero", context, pos.x, pos.y);
}
