'use strict';

const _ = require('underscore'),
    rngFactory = require('fast-random-factory');

const CACHE_SIZE = 5,
    N_CALLS = 5;

var rng = rngFactory.create({
        debug: true,
        cacheSize: CACHE_SIZE,
        min: -10000,
        max: -1,
        generator: {
            func: (min, max) => _.random(min, max),
            args: [0, 10000],
            argsValidator: (argsArray) => (argsArray[0] < argsArray[1]) ? null : new Error('min >= max')
        }
    });

if (rng.err) {
    console.error('Error: ' + rng.err.message);
} else {
    for (let i = 0; i < N_CALLS; i++) {
        console.log(rng.gen());
    }
    console.log('cache index: ' + rng.cacheIndex());
}
