# MC TOOLS E-Commerce Application Color Theme

This document outlines the color theme for the MC TOOLS e-commerce application, which sells mobile repairing tools and parts.

## Color Palette

| Color Name      | Hex Code  | Usage                                   |
|-----------------|-----------|-----------------------------------------|
| Deep Cobalt     | `#0047AB` | Primary brand color, buttons, links     |
| Electric Orange | `#FF6600` | Accent color, call-to-action buttons    |
| Soft Light Gray | `#F8F8F8` | Backgrounds, subtle UI elements         |
| Near Black      | `#212121` | Text, headings, navigation              |
| Emerald Green   | `#28A745` | Success messages, positive indicators   |
| Crimson Red     | `#DC3545` | Error messages, warnings, sale tags     |

## Implementation

The color theme has been implemented in the following files:

1. **tailwind.config.js** - Extended Tailwind CSS with custom color names
2. **src/app/theme.scss** - Custom CSS classes for the color palette
3. **src/styles.scss** - Main stylesheet importing the theme

## Usage Guidelines

### Primary Branding
- **Deep Cobalt** (`#0047AB`) is used for the primary brand elements, main navigation, and primary buttons.

### Accent Elements
- **Electric Orange** (`#FF6600`) is used for call-to-action buttons, special offers, and highlighting important information.

### Backgrounds and Subtle Elements
- **Soft Light Gray** (`#F8F8F8`) is used for section backgrounds and subtle UI elements to create visual separation.

### Text and Navigation
- **Near Black** (`#212121`) is used for text, headings, and navigation elements for optimal readability.

### Status Indicators
- **Emerald Green** (`#28A745`) indicates success messages, in-stock items, and positive feedback.
- **Crimson Red** (`#DC3545`) indicates error messages, out-of-stock items, and warnings.

## CSS Classes

The following CSS classes are available for use throughout the application:

- `bg-deep-cobalt`, `text-deep-cobalt`, `border-deep-cobalt`
- `bg-electric-orange`, `text-electric-orange`, `border-electric-orange`
- `bg-soft-light-gray`, `text-soft-light-gray`, `border-soft-light-gray`
- `bg-near-black`, `text-near-black`, `border-near-black`
- `bg-emerald-green`, `text-emerald-green`, `border-emerald-green`
- `bg-crimson-red`, `text-crimson-red`, `border-crimson-red`

## PrimeNG Customization

The theme also includes customizations for PrimeNG components:
- Menubar with Near Black background
- Cards with hover effects
- Buttons with custom color schemes
- Category cards with Electric Orange accents