import Entity from "./Entity";
import { createMarioLayer } from "./layers";

export const createMario = () => {
  const mario = new Entity();
  mario.draw = createMarioLayer;

  mario.update = function updateMario(deltaTime) {
    this.pos.x += this.vel.x * deltaTime;
    this.pos.y += this.vel.y * deltaTime;
  };

  return mario;
};
