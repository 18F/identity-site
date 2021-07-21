# identity-site

The static marketing site for Login.gov

## Branches

`main` branch is published at https://www.login.gov.

Feature branches should be merged to `main` when they are ready through the normal code review process (have at least **one** person who is not the author Approve the PR).

## Publishing Workflow

Branch off of `main` and make pull requests back to the `main` branch. Federalist will build a live preview for each branch so we suggest using those builds as staging environments to run your proposed changes by the rest of the team.

To view the preview URL for your branch click the federalist link in your pull request or modify the following URL to include your branch name:

```
https://federalist-proxy.app.cloud.gov/preview/18f/identity-site/{BRANCH}/
```

## Development

This is a Jekyll-built static site. To install dependencies:

```
make setup
```

Then, to start serving the site locally in development:

```
make run
```

Optionally, you can add a `_config.dev.yml` file to the root directory to list configuration which should only apply for local development. Any settings in this file will override an equivalent setting in the base Jekyll `_config.yml` configuration. For example, you may want to configure Sass `style` to `expanded` to debug the non-minified styles, or temporarily disable non-English locales to improve rebuild times.

To develop locally in conjunction with [`identity-style-guide`](https://github.com/18F/identity-style-guide/), run the following commands:

1. In the `identity-style-guide` directory, run `npm link`. This will create a symlink that will make changes to this repo accessible in `identity-site`.
2. In the `identity-site` directory, run `npm link identity-style-guide`. This will use the copy from your local machine in place of the one downloaded from NPM.

While developing, you may want to automatically rebuild changes made to the style guide by running `npm start` in the `identity-style-guide` directory. Changes made in your local `identity-style-guide` repository will automatically trigger the static site to build.

To run specs:

```
make test
```

To run end-to-end browser tests:

```
npm test
```

End-to-end tests include:

- Automated accessibility scan for each page

To check for code formatting or potential syntax errors:

```
make lint
```

To run HTMLProofer

```
make htmlproofer
```

This project uses [Prettier](https://prettier.io/) to format code. When running the lint command above, you may notice errors relating to unexpected code formatting. It's recommended that you install [an editor integration](https://prettier.io/docs/en/editors.html) to automatically format code on save, but you can also resolve these errors automatically from the command-line by running:

```
npm run lint -- --fix
```

The lint task will check to see that SVG images are optimized. To optimize images during local development, run:

```
npm run optimize-assets
```

To build **Help Center** pages, follow the guidelines in the [Help README](_help/README.md).

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md) for additional information.

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.
