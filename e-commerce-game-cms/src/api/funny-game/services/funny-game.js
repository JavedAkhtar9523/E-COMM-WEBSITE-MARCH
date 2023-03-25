'use strict';

/**
 * funny-game service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::funny-game.funny-game');
