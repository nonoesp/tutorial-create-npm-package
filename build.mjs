import * as esbuild from 'esbuild'

// esm › .mjs
// cjs › .js

// index.mjs
await esbuild.build({
    entryPoints: ['src/BrokenString.tsx'],
    bundle: true,
    outfile: 'dist/index.mjs',
    minify: true,
    target: ['es6'],
    format: 'esm',
    platform: 'node',
})

// index.js
await esbuild.build({
    entryPoints: ['src/BrokenString.tsx'],
    bundle: true,
    outfile: 'dist/index.js',
    minify: true,
    target: ['es6'],
    format: 'cjs',
    platform: 'node',
})

// cli.js
await esbuild.build({
    entryPoints: ['src/cli.ts'],
    bundle: true,
    outfile: 'dist/cli.js',
    minify: true,
    target: ['es6'],
    format: 'cjs',
    platform: 'node',
})