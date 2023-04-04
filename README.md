## Creating an NPM Package and Command-Line Tool

Here's a sample project to illustrate a few things.

- Build distribution files with esbuild in CommonJS (CJS) and ECMAScript (ESM) format.
- Release packages to NPM, the Node Package Manager.
- Add custom React components.
- Add a command-line tool that you can use as a command after install.

## Build and release

```sh
# Build the library.
yarn build

# Bump the version in package.json
# (Manual step.)

# Publish the package to NPM.
npm publish
```

## build.mjs

Script that bundles the BrokenString.tsx React component in the CJS and ESM formats and the cli.ts command-line tool in the CJS format.

```sh
yarn build # or node build.mjs
# Outputs
# dist/cli.js (CJS)
# dist/index.js (CJS)
# dist/index.mjs (ESM)
```

## BrokenString.tsx

React component that turns a string into <li> components inside of a <ul>.
No real use other than illustrate a React component.

## cli.ts

commander-based command-line tool that greets you.

```sh
greet
# Hello, Human!

greet -n Nono
# Hello, Nono!
```

You can install the package with `npm -g install broken-string` to make the `greet` command globally available.

## Usage

See the example folder.

## License

This project is MIT licensed.

## Author

Nono Martínez Alonso › [GitHub](https://github.com/nonoesp) · [Twitter](https://twitter.com/nonoesp) · [YouTube](https://youtube.com/NonoMartinezAlonso)