

const fType = typeof fetch;

console.info('fetch is', fType);

const r = await fetch('https://whisltr.info');

console.info('response', r.status);
