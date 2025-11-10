# Product Page Setup Guide

## Overview

This is a complete Online Store 2.0 product page with all essential features:

- ✅ Product media gallery with thumbnails
- ✅ Variant selection with dynamic pricing
- ✅ Quantity selector
- ✅ Add to cart / Buy now buttons
- ✅ Product description (collapsed/expanded)
- ✅ Benefits/bullet points
- ✅ Trust badges
- ✅ Stock messaging
- ✅ Tax/shipping text
- ✅ Product story section
- ✅ FAQs section
- ✅ Specifications section
- ✅ Product recommendations
- ✅ Social sharing
- ✅ Lightbox image viewer

## Files Created

### Templates
- `templates/product.json` - Product page template configuration

### Sections
- `sections/main-product.liquid` - Main product section with all features
- `sections/product-extra-content.liquid` - Story, FAQs, and specifications
- `sections/product-recommendations.liquid` - Product recommendations (updated)

### Snippets
- `snippets/product-form.liquid` - Product form with variants and quantity
- `snippets/product-scripts.liquid` - JavaScript for product functionality

## Setting Up the Product Page

### 1. Set as Default Product Template

1. Go to **Shopify Admin** → **Online Store** → **Themes**
2. Click **Customize** on your theme
3. Go to **Theme settings** → **Templates**
4. Under **Product templates**, you should see `product.json`
5. To make it the default:
   - Go to any product in your store
   - Click **Edit**
   - In the **Theme templates** section, select `product` (this uses `product.json`)
   - Click **Save**

### 2. Preview with a Real Product

1. In the theme editor, navigate to a product page
2. Or go to **Online Store** → **Themes** → **Customize**
3. Click on any product page in the navigation
4. The product page will use the `product.json` template automatically

### 3. Configure Section Settings

#### Main Product Section

**Layout:**
- Enable sticky product info (recommended)
- Media position (left/right)
- Media size (small/medium/large)
- Image zoom (lightbox/none)
- Mobile thumbnails (show/hide)

**Product Information:**
- Show vendor (optional)
- Show tax/shipping text
- Customize tax/shipping message
- Show benefits (bullet points)
- Configure up to 4 benefits
- Show stock message
- Set low stock threshold
- Show description (expanded/collapsed)

**Trust Badges:**
- Show trust badges
- Add up to 3 trust badges with icons and text
- Examples: Free Shipping, 30-Day Returns, Secure Payment

**Buttons:**
- Enable dynamic checkout button (Shop Pay, Apple Pay, etc.)
- Show share buttons (Facebook, Twitter, Email)

#### Product Extra Content Section

**Product Story:**
- Show story section
- Add story title and content
- Add story image (optional)

**FAQs:**
- Show FAQs section
- Add FAQ blocks with questions and answers
- FAQs are collapsible/expandable

**Specifications:**
- Show specifications
- Add specifications content (rich text)

#### Product Recommendations

- Heading text
- Number of products to show (2-10)
- Columns on desktop (2-5)
- Show "View All" button

## Features Explained

### Media Gallery

- Supports images, videos, external videos (YouTube/Vimeo), and 3D models
- Thumbnail navigation
- Lightbox view for images (if enabled)
- Variant-specific media (if enabled)
- Responsive design

### Variant Selection

- Dynamic variant selection
- Real-time price updates
- Compare-at price display
- Discount percentage calculation
- Stock availability checking
- Low stock warnings
- Disabled variants (grayed out)

### Quantity Selector

- Increment/decrement buttons
- Respects inventory limits
- Validation (min/max)

### Add to Cart

- AJAX add to cart (no page reload)
- Loading states
- Error handling
- Cart count updates
- Success notifications
- Dynamic checkout button support

### Stock Messaging

- In stock message (green)
- Low stock message (orange) - configurable threshold
- Out of stock message (red)
- Real-time updates based on variant selection

### Trust Badges

- Up to 3 customizable badges
- Icon + text format
- Displayed below add to cart button
- Examples: Free Shipping, Returns, Security

### Benefits/Bullet Points

- Up to 4 benefit points
- Checkmark icons
- Styled background section
- Customizable text

### Description

- Full product description support
- Expanded view (always visible)
- Collapsed view (read more/less)
- Rich text formatting
- HTML support

### Product Story

- Custom story section
- Title and content
- Optional image
- Rich text formatting

### FAQs

- Collapsible FAQ items
- Multiple FAQ blocks
- Smooth animations
- One FAQ open at a time
- Question and answer format

### Product Recommendations

- Uses Shopify's recommendation engine
- Shows related products
- Product cards with images
- Links to product pages
- Configurable number of products

## Customization

### Colors

All colors use CSS custom properties defined in `assets/base.css`:
- `--color-bg-page`
- `--color-bg-elevated`
- `--color-text-primary`
- `--color-text-secondary`
- `--color-accent-lime`
- `--color-border-soft`

### Typography

- Headings: Space Grotesk
- Body: Inter
- Font sizes are responsive

### Spacing

- Consistent spacing using `section-spacing` class
- Container max-width: 1200px
- Responsive padding

## Testing Checklist

- [ ] Product images display correctly
- [ ] Thumbnail navigation works
- [ ] Variant selection updates price
- [ ] Variant selection updates stock message
- [ ] Quantity selector works
- [ ] Add to cart works
- [ ] Cart count updates
- [ ] Dynamic checkout button appears
- [ ] Stock messages display correctly
- [ ] Trust badges display
- [ ] Benefits display
- [ ] Description expands/collapses
- [ ] FAQs expand/collapse
- [ ] Product story displays
- [ ] Product recommendations display
- [ ] Share buttons work
- [ ] Lightbox works (if enabled)
- [ ] Mobile responsive
- [ ] Sticky info works (if enabled)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Notes

- All settings are managed through the theme editor schema
- No hard-coded product handles
- Uses Shopify's standard `product` object
- Fully responsive design
- Accessibility features included
- SEO optimized
- Performance optimized (lazy loading, etc.)

## Troubleshooting

### Product page not showing

- Make sure `product.json` template exists
- Check that the product has the template assigned
- Verify theme is published

### Variants not updating

- Check that product has variants
- Verify JavaScript is loading
- Check browser console for errors

### Add to cart not working

- Verify cart routes are correct
- Check that variant ID is being sent
- Verify product is in stock
- Check browser console for errors

### Images not displaying

- Verify product has images uploaded
- Check image URLs
- Verify image permissions

## Support

For issues or questions:
1. Check browser console for errors
2. Verify all settings in theme editor
3. Test with different products
4. Check Shopify documentation



