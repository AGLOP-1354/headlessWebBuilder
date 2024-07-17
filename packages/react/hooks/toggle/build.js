import run from '@headless-web-builder/esbuild-config';
import pkg from './package.json' assert { type: 'json' };

run({
  pkg,
});
