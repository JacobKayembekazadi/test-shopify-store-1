# DualForce Fit Shopify Theme

A modern, performance-focused Shopify Online Store 2.0 theme for DualForce Fit, converted from a React component design.

## Features

- **Online Store 2.0 Compatible**: Built with sections, blocks, and schema for maximum customization
- **Modern Design**: Clean, minimalist design with focus on user experience
- **Responsive**: Fully responsive design that works on all devices
- **Performance Optimized**: Lightweight CSS and JavaScript for fast page loads
- **Customizable**: All sections are customizable through the theme editor

## Theme Structure

```
├── assets/
│   ├── base.css          # Main stylesheet with design tokens
│   └── global.js         # JavaScript for interactivity
├── config/
│   ├── settings_schema.json  # Theme settings
│   └── settings_data.json    # Default settings
├── layout/
│   └── theme.liquid      # Main layout template
├── locales/
│   └── en.default.json   # English translations
├── sections/
│   ├── header.liquid     # Header section
│   ├── hero.liquid       # Hero section
│   ├── goal-packs.liquid # Goal packs section
│   ├── programs.liquid   # Programs section
│   ├── quiz-banner.liquid # Quiz banner section
│   ├── testimonials.liquid # Testimonials section
│   ├── brand-strip.liquid # Brand strip section
│   ├── cta-section.liquid # CTA section
│   └── footer.liquid     # Footer section
├── snippets/
│   ├── product-card.liquid # Product card component
│   ├── section-title.liquid # Section title component
│   ├── metric.liquid     # Metric component
│   ├── meta-tags.liquid  # Meta tags snippet
│   └── social-meta-tags.liquid # Social meta tags
└── templates/
    └── index.json        # Homepage template
```

## Design Tokens

The theme uses CSS custom properties for easy customization:

- `--color-bg-page`: #F5F3EE
- `--color-bg-elevated`: #FFFFFF
- `--color-bg-section-soft`: #F0E6DA
- `--color-bg-section-dark`: #060814
- `--color-text-primary`: #151A28
- `--color-text-secondary`: #7A7F89
- `--color-accent-lime`: #C6FF3F
- `--color-accent-sand`: #C29A7E
- `--color-border-soft`: #E0D7CC
- `--color-border-strong`: #262B3A

## Installation

1. Zip the theme directory
2. Upload to Shopify admin: Online Store > Themes > Add theme > Upload zip file
3. Customize the theme in the theme editor
4. Add products to the Goal Packs and Programs sections

## Customization

### Adding Products to Goal Packs

1. Go to Online Store > Themes > Customize
2. Navigate to the "Goal Packs" section
3. Click "Add block" > "Product"
4. Select a product and configure:
   - Badge text (e.g., "Best Seller")
   - Goal text (e.g., "Fat Loss • Energy • Recovery")
   - Rating (e.g., "4.9")

### Adding Products to Programs

1. Go to Online Store > Themes > Customize
2. Navigate to the "Programs" section
3. Click "Add block" > "Product"
4. Select a product and configure:
   - Goal text (e.g., "Low impact • Habit rebuild")

### Configuring Navigation

1. Go to Online Store > Navigation
2. Create/maintain menus:
   - Main menu (for header)
   - Footer menu (for footer links)

## Sections

### Header
- Sticky header with logo, navigation, search, account, and cart
- Mobile-responsive menu
- Cart count display

### Hero
- Large hero section with image and text
- Customizable metrics
- Call-to-action buttons
- Animated elements

### Goal Packs
- Product grid (3 columns desktop, 1 column mobile)
- Product cards with badges, ratings, and pricing
- Customizable goal text per product

### Programs
- Product grid (2 columns desktop, 1 column mobile)
- Simplified product cards
- Background color section

### Quiz Banner
- Dark section with call-to-action
- Customizable quiz link

### Testimonials
- 3-column testimonial grid
- Star ratings
- Customizable quotes and text

### Brand Strip
- Logo/brand display
- Grayscale effect on hover

### CTA Section
- Final call-to-action
- Two-button layout

### Footer
- Multi-column layout
- Brand information
- Link lists
- Legal links

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This theme is proprietary and created for DualForce Fit.

