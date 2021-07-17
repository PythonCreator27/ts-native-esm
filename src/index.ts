import pTimeout from 'p-timeout';

const delayedPromise = Promise.resolve();

await pTimeout(delayedPromise, 50);