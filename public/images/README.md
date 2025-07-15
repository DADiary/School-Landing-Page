# Image Assets

## Folder Structure

- `public/images/` - Main images folder
  - `founders-foundation-logo.png` - Main Founders Foundation logo for light mode
  - `founders-foundation-logo-dark.png` - Main Founders Foundation logo for dark mode (optional, falls back to light version)
  - `alumni/` - Alumni company logos folder
    - Company logos with light/dark mode support:
      - `logo_unchained-robotics_lightgrey.svg` - Light mode logo
      - `logo_unchained-robotics_dark.svg` - Dark mode logo (optional)
      - `Juna AI.png` - Light mode logo
      - `Juna AI-dark.png` - Dark mode logo (optional)
      - `lemon markets logo.png` - Light mode logo
      - `lemon markets logo-dark.png` - Dark mode logo (optional)
      - `saasmetrix.svg` - Light mode logo
      - `saasmetrix-dark.svg` - Dark mode logo (optional)
      - `VisionAI-Logo.svg` - Light mode logo
      - `VisionAI-Logo-dark.svg` - Dark mode logo (optional)
      - `acto logo.svg` - Light mode logo
      - `acto logo-dark.svg` - Dark mode logo (optional)

## Recommended Image Specifications

### Founders Foundation Logo
- **Format**: PNG with transparent background preferred
- **Dimensions**: Wide format (aspect ratio 114:30) - approximately 228x60px recommended
- **File size**: Under 50KB for optimal loading
- **Dark Mode**: Provide separate dark mode version if needed, otherwise light version will be used

### Alumni Company Logos
- **Format**: PNG with transparent background preferred
- **Dimensions**: Flexible, but optimized for rectangular display (approximately 120x80px works well)
- **File size**: Under 20KB each for optimal loading
- **Dark Mode Support**: 
  - Provide separate dark mode versions by adding `-dark` suffix to filename
  - If no dark version is provided, the light version will be used in both modes
  - Ensure logos have good contrast on both light and dark backgrounds

## Usage

The application now supports automatic light/dark mode logo switching:

### Founders Foundation Logo
- Place `founders-foundation-logo.png` for light mode
- Optionally place `founders-foundation-logo-dark.png` for dark mode
- If no dark version exists, the light version will be used in both modes

### Alumni Company Logos  
- Place the main logo file (e.g., `company-logo.svg`)
- Optionally place a dark mode version with `-dark` suffix (e.g., `company-logo-dark.svg`)
- The system will automatically choose the appropriate version based on the current theme
- If no dark version exists, the light version will be used in both modes

The components are configured to fall back to placeholder content if images are not found.