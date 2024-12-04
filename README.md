# Personal Website

This repository contains source code of the Tarek's personal website, which is built based on [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

> [!IMPORTANT]
> This website originally comes from [Paweł Kosiec's awesome personal website](https://github.com/pkosiec/website). You can read more details in Paweł Kosiec's README. Appreciate his kind sharing and contribution!

### Prerequisites

1. Clone the repository

2. Install Docker and Docker Compose

   Please ensure that your device has successfully installed [Docker Desktop](https://www.docker.com/products/docker-desktop) or runnable [Docker Engine](https://docs.docker.com/engine/install/), and that your environment supports the `docker compose` command.

   ```bash
   $ docker --version
   Docker version 26.1.1, build 4cf5afa

   $ docker compose version
   Docker Compose version v2.27.0-desktop.2
   ```

### Development

1. Launch the dev container

   ```bash
   $ docker compose --profile dev up -d
   ```

2. Access container shell

   ```bash
   $ docker exec -it dev-web /bin/bash

   # Output
   root@ae3a7ef54878:/opt/website
   ```

3. Run the website in the container shell:

   ```bash
   $ npm start
   ```

   You can see the website in the browser with the address. `http://localhost:3006`.

4. View production build locally with:

   **Build the website:**

   ```
   $ npm run build
   ```

   **Check website just built in `./build`**

   ```bash
   $ npm run serve -- --host 0.0.0.0 --port 3006 --no-open
   ```

5. Renew Algolia DocSearch Index. See more in [dev-guide documents](./docs/Dev-Guide/renew-algolia-docsearch-index.mdx).
