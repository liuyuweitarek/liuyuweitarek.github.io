# Personal Website

This repository contains source code of the Tarek's personal website, which is built based on [Docusaurus 2](https://docusaurus.io/), a modern static website generator. 

> [!IMPORTANT]
> This website originally comes from [Paweł Kosiec's awesome personal website](https://github.com/pkosiec/website). You can read more details in Paweł Kosiec's README. Appreciate his kind sharing and contribution!

## Installation

Choose one of the following:

- Install on your computer using [npm](https://docs.npmjs.com/cli/install): 

    
    ```bash
    $ npm install
    ```

- Install with Docker, and develop in container:
    
    You can find more details in the [Dev-Guide](./docs/Dev-Guide/index.mdx).

    - On local machine 
    
        ```bash
        $ docker compose --profile dev up --build -d
        ```
    - Attach on container, in container terminal

        ```bash
        $ npm install
        ```

### Local Development

Run following command in the terminal, based on the environment you choose, local machine or container:

```
$ npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.
