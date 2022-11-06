import Entity from "./Entity";
import { createMarioLayer } from "./layers";
import Jump from "./traits/Jump";
import Velocity from "./traits/Velocity";

export const createMario = () => {
  const mario = new Entity();
  mario.addTraits(new Velocity());
  mario.addTraits(new Jump());
  mario.draw = createMarioLayer;

  return mario;
};
