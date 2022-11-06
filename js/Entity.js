import { Vector } from "./math";

export class Trait {
  constructor(name) {
    this.NAME = name;
  }

  update() {
    console.warn("Unhandled update call in Trait");
  }
}

export default class Entity {
  constructor() {
    this.pos = new Vector(0, 0);
    this.vel = new Vector(0, 0);
    this.traits = [];
  }

  addTraits(trait) {
    this.traits.push(trait);
    this[trait.NAME] = trait;
  }

  update(deltaTime) {
    this.traits.forEach((trait) => {
      trait.update(this, deltaTime);
    });
  }
}
