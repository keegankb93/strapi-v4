'use strict';

/**
 *  test-article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::test-article.test-article');
