import SpriteSheet from './SpriteSheet.js';
import {loadImage} from './loaders.js';

export function loadDeadpoolSprite() {
    return loadImage('img/deadpool.png')
    .then(image => {
        const sprites = new SpriteSheet(image, 16, 16);
        sprites.define('idle', 276, 44, 16, 16);
        return sprites;
    });
}

export function loadBackgroundSprites() {
    return loadImage('img/tiles.png')
    .then(image => {
        const sprites = new SpriteSheet(image, 16, 16);
        sprites.defineTile('ground', 0, 0);
        sprites.defineTile('sky', 3, 23);
        return sprites;
    });
}