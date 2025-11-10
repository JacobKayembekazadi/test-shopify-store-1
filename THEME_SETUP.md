# DualForce Fit Shopify Theme - Setup Guide

## Quick Start

1. **Upload Theme to Shopify**
   - Zip the entire theme directory
   - Go to Shopify Admin → Online Store → Themes
   - Click "Add theme" → "Upload zip file"
   - Select your zip file and upload

2. **Configure Navigation Menus**
   - Go to Online Store → Navigation
   - Create a "Main menu" with links: Shop, Programs, App, Results, Pricing
   - Create a "Footer" menu with links for Shop and Company sections

3. **Add Products**
   - Create products in Shopify Admin → Products
   - For Goal Packs: Create products with compare at prices for discount display
   - For Programs: Create products (can be digital/downloadable)

4. **Customize Homepage**
   - Go to Online Store → Themes → Customize
   - The homepage is already set up with all sections
   - Add products to Goal Packs and Programs sections
   - Configure each section's settings

## Section Configuration

### Header Section
- Set up your main navigation menu
- Upload a logo or use the default logo placeholder
- Adjust logo height if needed

### Hero Section
- Upload a hero image
- Customize title, description, and button text
- Add metrics (Active Members, Avg. Adherence, 5-Star Reviews)
- Configure the progress card overlay

### Goal Packs Section
- Add product blocks
- For each product, configure:
  - Product selection
  - Badge text (e.g., "Best Seller")
  - Goal text (e.g., "Fat Loss • Energy • Recovery")
  - Rating (e.g., "4.9")

### Programs Section
- Add product blocks
- For each product, configure:
  - Product selection
  - Goal text (e.g., "Low impact • Habit rebuild")

### Quiz Banner Section
- Customize title and description
- Set quiz button link (can link to a page or external quiz)

### Testimonials Section
- Add testimonial blocks
- For each testimonial, add:
  - Quote text
  - Full testimonial text

### Brand Strip Section
- Add brand blocks
- Upload brand logos or use text

### CTA Section
- Customize title and description
- Set button links and text

### Footer Section
- Add link list blocks for Shop and Company
- Configure footer menus in Navigation settings
- Set tagline

## Design Customization

### Colors
The theme uses CSS custom properties defined in `assets/base.css`. You can customize:

- Background colors
- Text colors
- Accent colors (lime and sand)
- Border colors

### Typography
- Body font: Inter (Google Fonts)
- Header font: Space Grotesk (Google Fonts)
- Configured in theme settings

### Fonts
The theme loads Google Fonts (Inter and Space Grotesk). These are loaded in `layout/theme.liquid`.

## Product Setup Tips

1. **Goal Packs Products**
   - Set compare at price higher than price to show discount badge
   - Use product images (800x800px recommended)
   - Add product descriptions

2. **Programs Products**
   - Can be digital products or physical
   - Set appropriate pricing
   - Add program descriptions

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Sticky header with cart count
- ✅ Mobile menu
- ✅ Product cards with add to cart
- ✅ Discount badges
- ✅ Star ratings
- ✅ Smooth scrolling
- ✅ Cart notifications
- ✅ SEO optimized
- ✅ Accessibility features

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Next Steps

1. Upload and activate the theme
2. Configure navigation menus
3. Add your products
4. Customize section content
5. Test on different devices
6. Set up payment and shipping
7. Go live!

## Support

For issues or questions:
1. Check the README.md for detailed documentation
2. Review Shopify theme documentation
3. Test in Shopify theme editor

## Notes

- The theme uses Shopify's Online Store 2.0 architecture
- All sections are customizable through the theme editor
- Product data comes from your Shopify store
- Images should be optimized for web (WebP recommended)
- Test the theme on multiple devices before going live

