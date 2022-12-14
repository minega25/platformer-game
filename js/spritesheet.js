class SpriteSheet {
  constructor(image, width, height, actualWidth, actualHeight) {
    this.image = image;
    this.width = width;
    this.height = height;
    this.actualWidth = actualWidth;
    this.actualHeight = actualHeight;
    this.tiles = new Map();
  }

  define(name, x, y) {
    const buffer = document.createElement("canvas");
    buffer.width = this.width;
    buffer.height = this.height;
    buffer
      .getContext("2d")
      .drawImage(
        this.image,
        x,
        y,
        this.width,
        this.height,
        0,
        0,
        this.actualWidth,
        this.actualHeight
      );
    this.tiles.set(name, buffer);
  }

  defineTile(name, x, y) {
    const buffer = document.createElement("canvas");
    buffer.width = this.width;
    buffer.height = this.height;
    buffer
      .getContext("2d")
      .drawImage(
        this.image,
        x,
        y,
        this.width,
        this.height / 2,
        0,
        0,
        this.actualWidth,
        this.actualHeight / 2
      );
    this.tiles.set(name, buffer);
  }

  draw(name, context, x, y) {
    const buffer = this.tiles.get(name);
    context.drawImage(buffer, x + x / 3.12, y);
  }
}

export default SpriteSheet;
