# Syncify Demo ~ Dawn Advanced

This is a higher level example of Syncify and [Dawn](https://github.com/Shopify/dawn). Different capabilities are implemented in this demo and it showcases more advanced configurations. If you have not used Syncify before, maybe consider taking a look the [Dawn Basic](https://github.com/panoply/syncify-dawn-basic) example.

### Showcasing

Consult the [syncify.config.ts](/syncify.config.ts) for the configuration options. This strap demonstrates the following:

- Bundles TypeScript and JavaScript leveraging an ESBuild transform.
- Bundles SCSS and CSS files using SASS Dart + PostCSS transform
- Generates an SVG Sprite from [Feather Icons](https://feathericons.com/) using the SVG transform.
- Implements different directory structures and naming conventions for theme required files
- Showcases sub-directory grouping and prefixing in sections and snippets
- Executes a Spawn process in parallel with Syncify to show how you can leverage spawns
- Applies terse minification in build mode
- Showcases multi-store and multi-theme sync demonstrations

**Please note that Syncify is still in beta and not all capabilities are available**

# Instructions

Fork or download this repository. You should use install [pnpm](https://pnpm.js.org/en/cli/install) and use it instead of npm or yarn (though they are also supported). The first thing you need to do is install the dependencies.

1. `pnpm i`
2. `pnpm build`

Go to the [Syncify](https://github.com/panoply/syncify) repository and review readme for more information.

### Requirements

You will need to update the `env.example` file first. Say (for example) your myshopify store name is `sissel` - you will need to define this information.

Rename the `.env.example` file to `.env` and enter the following:

```bash
# EXAMPLE ADMIN API TOKEN - CHANGE TO YOUR STORE NAME
#
sissel_api_token = 'TOKEN-GOES-HERE'
```

After updating the `.env` with you admin API token, open the `syncify.config.ts` file. Now we need to define your store and theme targets. You will need to have a reference of theme ids for this step.

Replace the theme id of `12345679` with your theme id.

```ts
export default defineConfig({
  stores: {
    domain: 'sissel', // Equivalent to "sissel.myshopify.com", change to your store name
    themes: {
      dev: 123456789 // The name "dev" is used as a target, the id is the theme id.
    }
  }
});
```

Lastly, open up the `package.json` file. We will provide our store information to the pre-defined commands lists. Replace all the occurrences of `sissel` with your defined store name.

```json
{
  "scripts": {
    "dev": "syncify sissel --theme dev --watch --hot",
    "build": "syncify --build --prod --clean",
    "upload": "syncify sissel --theme dev --upload",
    "download": "syncify sissel --theme dev --download"
  }
}
```

We are now ready for development. Before going ahead, clear your mind, because the Syncify way, is not the same as the Shopify way when it comes to theme development. The Shopify approach is just one way a developer can build a theme, it's not the only way. Syncify might take some getting used to, but you will be more productive choosing this approach and above all else, you won't be locked into a restrictive workflow.

### Structure

Consult the `syncify.config.ts` file located in the root of this directory to review how the configuration model is composed.

```bash
├── src
│   ├── assets
│   │   ├── icons
│   │   │   ├── dawn          # Contains Dawn SVG Icon snippets converted to SVG that output as snippets
│   │   │   └── feather       # Contains the entire Feather icons set used to generated a sprite
│   │   └── images            # Contains a couple of images for processing example
│   ├── data
│   │   ├── settings          # Contains the Dawn "config" JSON files
│   │   └── translations      # Contains the Dawn "locales" JSON files
│   ├── pages
│   ├── scripts
│   │   ├── dawn              # Contains all of Dawns JavaScript files
│   │   ├── components        # Contains example TypeScript modules
│   │   ├── extensions        # Contains a couple of JavaScript files with different extensions
│   │   ├── globs             # Contains shared files between different modules
│   │   ├── modules           # Contains a list of vendor modules
│   │   ├── bundle.ts         # Bundles a TS file with alias paths into assets directory
│   │   ├── snippet.ts        # Bundles a TS file exporting inline as a snippet
│   │   └── spawn.js          # This file will be handled by Webpack in spawned process
│   ├── styles
│   │   ├── dawn              # Contains all of Dawns CSS files
│   │   ├── example           # Contains an example SASS stylesheet
│   │   ├── example.scss      # Contains the entire Bootstrap CSS framework
│   │   └── snippet.scss      # An example of Syncify generating an inline CSS snippet
│   └── views
│       ├── customers         # Dawn templates/customer files
│       ├── sections
│       │   ├── _             # Directories using _ are non Dawn examples
│       │   ├── blocks        # Dawn sections or various types
│       │   ├── cart          # Dawn sections starting with cart-
│       │   ├── featured      # Dawn sections starting with features-
│       │   ├── groups        # Dawn section group files
│       │   ├── layout        # Dawn sections starting with layout-
│       │   └── main          # Dawn sections starting with main-
│       ├── snippets
│       │   ├── _             # Directories using _ are non Dawn examples
│       │   ├── header        # Dawn snippets starting with header-
│       │   ├── misc          # Dawn snippets miscellaneous
│       │   └── product       # Dawn snippets starting with product-
│       ├── templates
│       │   ├── json          # All .json templates
│       │   └── liquid        # All .liquid templates
│       │ 
│       ├── password.liquid   # The password layout file of Dawn
│       └── theme.liquid      # The main theme layout files
│ 
├── .env.example              # The example environment file you will change this to .env
├── readme.md                 # This readme file
├── redirects.yaml            # An empty file for future features in later releases
├── package.json              # The package file where commands and dependencies are kept
├── syncify.config.ts         # The syncify config file which controls the build
├── webpack.config.js         # We are using webpack as an example of a spawned process
└── tsconfig.json             # TypeScript configuration
```

### Related

- [Dawn Basic](https://github.com/panoply/syncify-dawn-basic)

# License

MIT
