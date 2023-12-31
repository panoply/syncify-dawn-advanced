import { defineConfig } from '@syncify/cli';

// SOME COMMENTED OUT OPTIONS ARE NOT YET AVAILABLE
// BUT WILL BE MADE POSSIBLE IN FUTURE VERSIONS
// ALL CONFIG OPTIONS ARE TYPED AND WELL ANNOTATED

export default defineConfig({

  clean: true,
  input: 'src',
  output: 'theme',
  paths: {

    // metafields: 'metafields/**/*',
    // pages: 'pages/*',
    // redirects: 'redirects.yaml'

    assets: 'assets/images/**/*',
    config: 'data/settings/*',
    locales: 'data/translations/*',
    snippets: [
      'views/snippets/**/*'
    ],
    sections: [
      'views/sections/**/*'
    ],
    customers: [
      'views/customers/*'
    ],
    templates: [
      'views/templates/json/*',
      'views/templates/liquid/*',
    ],
    layout: [
      'views/theme.liquid',
      'views/password.liquid'
    ],
  },

  // SPAWN PROCESS EXAMPLE

  spawn: {
    build: {
      webpack: 'webpack --color --config webpack.config.js',
    },
    watch: {
      webpack: 'webpack --watch --color --config webpack.config.js',
    }
  },

  // ADD YOUR STORE/S + THEME/S

  stores: [
    {
      domain: 'syncify',     // Replace this with your store domain
      themes: {
        dev: 136656060657, // Replace this with your theme id
        // prod: 123456789 // Uncomment to target an additional theme in this store
      }
    },

    // UNCOMMENT BELOW TO SYNC TO AN ADDITION STORE AND THEMES

    // {
    //   domain: '',
    //   themes: {
    //     dev: 123456789,
    //     prod: 123456789
    //   }
    // }
  ],

  views: {

    // pages: {}

    // EXAMPLE: SUB-DIRECTORY SECTION SUPPORT

    sections: {
      prefixDir: true,
      separator: '-',
      global: [
        '_',
        'layout',
        'blocks'
      ]
    },

    // EXAMPLE: SUB-DIRECTORY SNIPPET SUPPORT

    snippets: {
      prefixDir: true,
      separator: '-',
      global: [
        '_',
        'example',
        'misc'
      ]
    },
  },

  transforms: {

    script: {

      // DAWN JS

      'assets/[file]': 'scripts/dawn/*.js',

      // EXAMPLE: BELOW IS AN EXAMPLE OF TS/JS

      'assets/bundle.min.js': 'scripts/bundle.ts',

      // EXAMPLE: MULTIPLE FILES WITH RENAME

      'assets/output-[file]': [
        'scripts/components/test.ts',
        'scripts/modules/lazysizes.ts'
      ],

      // EXAMPLE: GENERATING A SNIPPET

      'snippets/foo-snippet': {
        input: 'scripts/snippet.ts',
        format: 'esm',
        snippet: false,
        target: 'es2016',
        external: [],
        watch: [],
        esbuild: {}
      }
    },

    style: {

      // DAWN CSS

      'assets/[file]': {
        input: 'styles/dawn/*.css',
        postcss: true,
        sass: false,
      },

      // EXAMPLE: BUNDLING BOOTSTRAP

      'assets/example.min.css': {
        input: 'styles/example.scss',
        watch: ['styles/example/*'],
        postcss: true,
        sass: true
      },

      // EXAMPLE: GENERATING A SNIPPET

      'snippets/example.css.liquid': {
        input: 'styles/snippet.scss',
        postcss: true,
        sass: true
      }
    },

    svg: {

      // DAWN ICONS

      'snippets/icon.[file]': {
        input: 'assets/icons/dawn/*',
        snippet: true,
        format: 'file'
      },

      // EXAMPLE: BUILDING A SPRITE FROM FEATHER ICONS

      'snippets/sprite.liquid': {
        input: 'assets/icons/feather/*',
        format: 'sprite',
        sprite: {
          svg: {
            dimensionAttributes: true,
            namespaceClassnames: true,
            namespaceIDs: false
          }
        }
      }
    },
  },

  // PROCESSES EXAMPLE THIS IS USED BY TRANSFORMS

  processors: {
    esbuild: {
      bundle: true,
      sourcemap: false,
    },
    sass: {
      sourcemap: true,
      style: 'compressed',
      include: ['node_modules/'],
    },
    postcss: [
      require('autoprefixer')()
    ]
  },
  terser: {
    json: {
      assets: true,
      config: true,
      locales: true,
      metafields: true,
      templates: true,
      sectionGroups: true,
      exclude: []
    },
    script: {
      keepNames: false,
      legalComments: "inline",
      minifyIdentifiers: true,
      minifySyntax: true,
      minifyWhitespace: true,
      mangleQuoted: true,
      exclude: []
    },
    views: {
      collapseWhitespace: true,
      minifySchema: true,
      minifyScript: true,
      minifyStyle: true,
      removeComments: true,
      stripDashes: true,
      exclude: []
    }
  }
});
