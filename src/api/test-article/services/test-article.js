'use strict';

/**
 * test-article service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-article.test-article');
