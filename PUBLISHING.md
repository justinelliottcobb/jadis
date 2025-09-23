# Publishing Guide for Jadis

This guide covers how to publish the Jadis component library to NPM.

## Prerequisites

Before publishing, ensure you have:

1. **NPM Account**: Create an account at [npmjs.com](https://www.npmjs.com/)
2. **NPM CLI**: Install with `npm install -g npm`
3. **Authentication**: Log in with `npm login`
4. **Access Tokens**: For automated publishing via GitHub Actions

## Setup NPM Access Token (for GitHub Actions)

1. Go to [NPM Access Tokens](https://www.npmjs.com/settings/tokens)
2. Click "Generate New Token" → "Automation"
3. Copy the token
4. Go to your GitHub repository settings
5. Navigate to "Secrets and variables" → "Actions"
6. Add a new secret named `NPM_TOKEN` with your token value

## Manual Publishing

### 1. Pre-publishing Checks

```bash
# Ensure you're on the main branch
git checkout main
git pull origin main

# Check that everything builds correctly
npm run lint
npm run build
npm run build-storybook

# Verify package contents
npm pack --dry-run
```

### 2. Version and Publish

```bash
# For patch releases (0.1.0 → 0.1.1)
npm run release:patch

# For minor releases (0.1.0 → 0.2.0)
npm run release:minor

# For major releases (0.1.0 → 1.0.0)
npm run release:major

# For prereleases (0.1.0 → 0.1.1-0)
npm run release:prerelease
```

These scripts will:
- Run linting and build
- Update the version in package.json
- Create a git tag
- Publish to NPM
- Push changes to GitHub

## Automated Publishing (GitHub Actions)

### Via Manual Trigger

1. Go to your GitHub repository
2. Navigate to "Actions"
3. Select "Release" workflow
4. Click "Run workflow"
5. Choose version type (patch/minor/major/prerelease)
6. Click "Run workflow"

### Via Git Tags

Push a version tag to trigger automatic publishing:

```bash
# Create and push a tag
git tag v0.1.1
git push origin v0.1.1
```

The GitHub Action will:
- Run tests and build
- Publish to NPM
- Create a GitHub release

## Publishing Checklist

Before each release:

- [ ] All tests pass (`npm test`)
- [ ] Linting passes (`npm run lint`)
- [ ] Build succeeds (`npm run build`)
- [ ] Storybook builds (`npm run build-storybook`)
- [ ] CHANGELOG.md is updated
- [ ] Version number is appropriate
- [ ] All changes are committed and pushed

## Troubleshooting

### Build Errors

If you encounter TypeScript errors during build:
```bash
# Fix TypeScript errors first
npm run lint

# Then rebuild
npm run build
```

### Authentication Issues

```bash
# Re-authenticate with NPM
npm logout
npm login

# Verify authentication
npm whoami
```

### Package Size Issues

Check what's included in your package:
```bash
npm pack --dry-run
```

Update `.npmignore` if unnecessary files are included.

## Package Information

- **Package Name**: `jadis`
- **Registry**: https://www.npmjs.com/package/jadis
- **Repository**: https://github.com/justinelliottcobb/jadis
- **Documentation**: Storybook (built in CI/CD)

## Release Process Summary

1. **Development**: Work on features/fixes in feature branches
2. **Testing**: Ensure all tests pass and build succeeds
3. **Documentation**: Update README and CHANGELOG
4. **Release**: Use npm scripts or GitHub Actions
5. **Verification**: Check the published package works correctly

## Package Structure

The published package includes:
- `dist/index.js` - Compiled JavaScript (ES modules)
- `dist/index.d.ts` - TypeScript declarations
- `dist/index.css` - Bundled styles
- Component-specific `.d.ts` files for all components
- README.md with usage instructions

## Support

For publishing issues:
- Check the [NPM Documentation](https://docs.npmjs.com/)
- Review GitHub Actions logs for automated publishing
- Ensure all required secrets are set in GitHub repository settings