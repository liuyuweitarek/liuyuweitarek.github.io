import { themes } from "prism-react-renderer";

import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

require('dotenv').config()

const config: Config = {
  title: "Tarek Liu, Psychoinformatics Engineer",
  tagline:
    "Researcher interested in personal growth and tech trends. Tracking authentic behavior, mapping minds, bridging Lab findings to real-world impact.",
  url: "https://liuyuweitarek.github.io",
  baseUrl: "/",
  staticDirectories: ['static', 'public'],
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config
  organizationName: "liuyuweitarek",
  projectName: "liuyuweitarek.github.io",
  trailingSlash: false,

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  customFields: {
    // "ALGOLIA_APPLICATION_ID": process.env.APPLICATION_ID,
    // "ALGOLIA_API_KEY": process.env.API_KEY
    // newsletter: {
    //   action:
    //     "https://dev.us14.list-manage.com/subscribe/post?u=4ed0fd1909674fddee53ac3e7&amp;id=dfdcae99f5&amp;f_id=004887e0f0",
    //   method: "post",
    //   emailFieldName: "EMAIL",
    //   firstNameFieldName: "FNAME",
    //   submitButtonName: "subscribe",
    //   tosURL: "https://mailchimp.com/legal/terms/",
    //   privacyPolicyURL: "https://www.intuit.com/privacy/statement/",
    //   serviceName: "Mailchimp",
    // },
  },
  plugins: [
    "docusaurus-plugin-sass",
    [
      "@docusaurus/plugin-ideal-image",
      {
        quality: 85,
        max: 2000,
        min: 500,
        steps: 4,
        disableInDev: false,
      },
    ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: 'docs',
          breadcrumbs: true,
          routeBasePath: 'docs',
          include: ['**/*.md', '**/*.mdx'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          sidebarPath: require.resolve('./sidebars.js'),
          docsRootComponent: '@theme/DocsRoot',
          docVersionRootComponent: '@theme/DocVersionRoot',
          docRootComponent: '@theme/DocRoot',
          docItemComponent: '@theme/DocItem',
          remarkPlugins: [require('remark-math')],
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          lastVersion: 'current',
          onlyIncludeVersions: ['current'],
        },
        blog: {
          postsPerPage: 5,
          showReadingTime: true,
          editUrl: "https://github.com/liuyuweitarek/liuyuweitarek.github.io/tree/main/",
          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} Tarek Liu. All rights reserved.`,
          },
        },
        theme: {
          customCss: [
            require.resolve("./src/css/custom.scss"), 
            require.resolve("./src/css/doc-overview-page.scss")
          ],
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    // announcementBar: {
    //   id: 'support_us',
    //   content:
    //     '🐧 <a target="_blank" rel="noopener noreferrer" href="#">Send Me to Antarctica!</a> 🐧',
    //   backgroundColor: '#040D12',
    //   textColor: '#78D6C6',
    //   isCloseable: true,
    // },
    image: "img/logo-small.png",
    metadata: [
      {
        name: "description",
        content:
          "I am researcher interested in personal growth and tech trends. Tracking authentic behavior, mapping minds, bridging Lab findings to real-world impact.",
      },
      {
        name: "keywords",
        content:
          "backend,developer,engineer,grpc,rest,docker,kubernetes,devops,open-source",
      },
    ],
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      hideOnScroll: false,
      title: "Tarek Liu",
      logo: {
        alt: "Tarek Liu Logo",
        src: "img/logo.png",
        srcDark: "img/logo.png",
      },
      items: [
        { to: "/blog", label: "Blog", position: "left" },
        {
          to: '/docs/note',
          label: 'Note',
          position: 'left',
        },
        { to: "/projects", label: "Projects", position: "left" },
        { to: "/talks", label: "Talks", position: "left" },
        {
          href: 'https://github.com/liuyuweitarek',
          position: 'right',
          label: 'Github',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
        {
          href: 'https://docs.google.com/document/d/1mNkcT_MbvsATqlk8M02iyPb2zpSEM1q1GZ2r8tK28Mo/edit?usp=sharing',
          position: 'right',
          label: 'Resume',
          className: 'header-resume-link',
          'aria-label': 'Resume',
        },
      ],
    },
    footer: {
      links: [
        {
          title: "Connect",
          items: [
            {
              label: "Email me",
              href: "mailto:liuyuwei.tarek@gmail.com",
            },
            {
              label: "Github",
              href: "https://github.com/liuyuweitarek",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/liuyuweitarek",
            },
            {
              label: "HuggingFace",
              href: "https://huggingface.co/liuyuweitarek",
            },
          ],
        },
        {
          title: "Discover",
          items: [
            {
              label: "About me",
              to: "/",
            },
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "Note",
              to: "/note",
            },
            {
              label: "Projects",
              to: "/projects",
            },
            {
              label: "Talks",
              to: "/talks",
            },
          ],
        },
        {
          title: "Downloads",
          items: [
            {
              label: "Resume",
              href: "https://docs.google.com/document/d/1mNkcT_MbvsATqlk8M02iyPb2zpSEM1q1GZ2r8tK28Mo/edit?usp=sharing",
            },
          ],
        },
        {
          title: "Blog feed",
          items: [
            {
              label: "RSS",
              to: "pathname:///blog/rss.xml",
            },
            {
              label: "Atom",
              to: "pathname:///blog/atom.xml",
            },
            {
              label: "JSON",
              to: "pathname:///blog/feed.json",
            },
          ],
        },
        {
          title: "Sponsor",
          items: [
            {
              html: `
                <a href="https://www.buymeacoffee.com/liuyuweitarek" target="_blank">
                  <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" >
                </a>
              `,
            },
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tarek Liu. All rights reserved.`,
    },
    algolia: {
      appId: process.env.APPLICATION_ID,
      apiKey: process.env.API_KEY,
      indexName: process.env.INDEX_NAME,
      contextualSearch: true,
    },
    themes: [
      require.resolve('@docusaurus/theme-live-codeblock'),
      require.resolve('@docusaurus/theme-search-algolia'),
      require.resolve('@docusaurus/theme-classic'), 
    ],
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

module.exports = config;
