# next-month

This is a simple budgeting app that allows you to track your expenses and income for the next month. It is built using [SvelteKit](https://kit.svelte.dev/) using [shadcn-svelte](https://www.shadcn-svelte.com/) and [TailwindCSS](https://tailwindcss.com/) and [Tauri](https://tauri.app/) to enable compilation into a installable app.

## Developing

### Pre-requisites

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)
- [Rust](https://www.rust-lang.org/)

#### Rust

The recommended way to install Rust is via [rustup](https://rustup.rs/).

### Running the SvelteKit development server

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
pnpm dev

# or start the server and open the app in a new browser tab
pnpm dev -- --open
```

### Running the Tauri app in development mode

To start up the Tauri application, run the following command:

```bash
pnpm tauri dev
```

This will start the Tauri application and open a window with the application running.

## Building

To create a production version of your app:

```bash
pnpm build
```

You can preview the production build with `npm run preview`.

### Building the Tauri app

To build the Tauri application, run the following command:

```bash
pnpm tauri build
```

This will create a distributable version of the application in the `src-tauri/target/release/bundle` directory.

During the build process, the application will be built for the current platform. If you want to build for a different platform, you can use the `--target` flag to specify the platform you want to build for.

```bash
pnpm tauri build --target <platform>
```

Where `<platform>` is one of the following:

- `windows`
- `macos`
- `linux`
- `android`
- `ios`

> NOTE: at the time of writing, only desktop platforms are supported.

## Deployment

To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
