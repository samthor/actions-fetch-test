

const fType = typeof fetch;

console.info('fetch is', fType);

const r = await fetch('https://whistlr.info');

console.info('response', r.status);
