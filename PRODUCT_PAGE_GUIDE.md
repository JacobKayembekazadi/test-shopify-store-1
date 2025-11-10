# Complete Product Page Setup Guide

## Files Created

### Templates
- ✅ `templates/product.json` - Product page template with all sections

### Sections
- ✅ `sections/main-product.liquid` - Main product section with all features
- ✅ `sections/product-extra-content.liquid` - Story, FAQs, and specifications
- ✅ `sections/product-recommendations.liquid` - Product recommendations (updated)

### Snippets
- ✅ `snippets/product-form.liquid` - Product form with variants and quantity
- ✅ `snippets/product-scripts.liquid` - JavaScript for all product functionality

## Features Included

### ✅ Product Information
- Product title
- Vendor (optional)
- Price with compare-at price
- Discount badge (automatic calculation)
- Tax/shipping text (customizable)
- Stock messaging (in stock, low stock, out of stock)
- Product description (expanded or collapsed)

### ✅ Media Gallery
- Multiple product images
- Thumbnail navigation
- Video support (regular and external)
- 3D model support
- Lightbox image viewer
- Variant-specific media (optional)
- Responsive design
- Mobile-optimized thumbnails

### ✅ Variant Selection
- Dynamic variant options
- Real-time price updates
- Compare-at price updates
- Discount percentage calculation
- Stock availability checking
- Low stock warnings
- Disabled variants (grayed out)
- Selected variant display

### ✅ Quantity Selector
- Increment/decrement buttons
- Manual input
- Inventory limit validation
- Min/max quantity enforcement

### ✅ Add to Cart / Buy Buttons
- Add to Cart button
- Dynamic checkout button (Shop Pay, Apple Pay, etc.)
- Loading states
- Error handling
- Cart count updates
- Success notifications
- Sold out states

### ✅ Benefits/Bullet Points
- Up to 4 customizable benefits
- Checkmark icons
- Styled background section
- Customizable text per benefit

### ✅ Trust Badges
- Up to 3 trust badges
- Icon + text format
- Customizable icons and text
- Examples: Free Shipping, Returns, Security

### ✅ Product Story
- Custom story section
- Title and rich text content
- Optional image
- Full HTML support

### ✅ FAQs
- Collapsible FAQ items
- Multiple FAQ blocks
- Smooth animations
- One FAQ open at a time
- Question and answer format
- Rich text support

### ✅ Specifications
- Custom specifications section
- Rich text content
- Full HTML support

### ✅ Product Recommendations
- Uses Shopify's recommendation engine
- Shows related products
- Product cards with images
- Configurable number of products
- Links to product pages

### ✅ Social Sharing
- Facebook share
- Twitter share
- Email share
- Custom share buttons

## Setting Up the Product Page

### Step 1: Set as Default Product Template

1. **Upload Theme to Shopify**
   - Zip the theme directory
   - Go to **Shopify Admin** → **Online Store** → **Themes**
   - Click **Add theme** → **Upload zip file**
   - Select your zip file and upload

2. **Set as Default Template**
   - The `product.json` template is automatically available
   - Go to any product in your store
   - Click **Edit**
   - Scroll to **Theme templates** section
   - Select **product** (this uses `product.json`)
   - Click **Save**

   OR

   - Go to **Online Store** → **Themes** → **Customize**
   - Navigate to any product page
   - The template will automatically use `product.json`

### Step 2: Preview with a Real Product

1. **In Theme Editor**
   - Go to **Online Store** → **Themes** → **Customize**
   - Click on any product in the navigation
   - The product page will load with the new template

2. **On Live Store**
   - Visit any product page on your store
   - The page will use the `product.json` template
   - All features will be functional

### Step 3: Configure Section Settings

#### Main Product Section Settings

**Layout:**
- **Enable sticky product info** - Sticks product info to top when scrolling (recommended: ON)
- **Media position** - Left or right (default: Left)
- **Media size** - Small, medium, or large (default: Large)
- **Media fit** - Contain or cover (default: Contain)
- **Gallery layout** - Stacked or thumbnail (default: Stacked)
- **Image zoom** - Lightbox or none (default: Lightbox)
- **Mobile thumbnails** - Show or hide (default: Show)

**Product Information:**
- **Show vendor** - Display product vendor (default: OFF)
- **Show tax/shipping text** - Display tax and shipping message (default: ON)
- **Tax/shipping text** - Custom message (default: "Taxes and shipping calculated at checkout")
- **Show benefits** - Display benefit bullet points (default: ON)
- **Benefit 1-4** - Custom benefit text (up to 4 benefits)
- **Show stock message** - Display stock availability (default: ON)
- **Low stock threshold** - Number of items for low stock warning (default: 5)
- **Show description** - Display product description (default: ON)
- **Description style** - Expanded or collapsed (default: Expanded)

**Trust Badges:**
- **Show trust badges** - Display trust badges (default: ON)
- **Trust badge 1-3** - Icon and text (up to 3 badges)
  - Examples:
    - Free Shipping
    - 30-Day Returns
    - Secure Payment

**Buttons:**
- **Enable payment button** - Show dynamic checkout button (default: ON)
  - Shows Shop Pay, Apple Pay, Google Pay, etc.
  - Requires Shopify Payments or compatible payment provider

**Social Sharing:**
- **Show share buttons** - Display social share buttons (default: OFF)
  - Facebook
  - Twitter
  - Email

#### Product Extra Content Section Settings

**Product Story:**
- **Show story** - Display story section (default: ON)
- **Story title** - Custom title (default: "Our Story")
- **Story content** - Rich text content
- **Story image** - Optional image

**FAQs:**
- **Show FAQs** - Display FAQs section (default: ON)
- **FAQs title** - Custom title (default: "Frequently Asked Questions")
- **FAQ blocks** - Add multiple FAQ items
  - Question text
  - Answer text (rich text)

**Specifications:**
- **Show specifications** - Display specifications (default: OFF)
- **Specifications title** - Custom title (default: "Specifications")
- **Specifications content** - Rich text content

#### Product Recommendations Section Settings

- **Heading** - Section heading (default: "You may also like")
- **Products to show** - Number of products (2-10, default: 4)
- **Columns on desktop** - Number of columns (2-5, default: 4)
- **Show view all button** - Display "View All" button (default: ON)

## How to Use

### 1. Add Products

1. Go to **Products** → **Add product**
2. Add product title, description, images
3. Add variants (size, color, etc.) if needed
4. Set prices and compare-at prices
5. Add inventory quantities
6. Save product

### 2. Configure Product Page

1. Go to **Online Store** → **Themes** → **Customize**
2. Navigate to a product page
3. Click on **Main product** section
4. Configure all settings:
   - Layout options
   - Product information
   - Trust badges
   - Benefits
   - Buttons
   - Social sharing

### 3. Add Product Story

1. In theme editor, click **Product extra content** section
2. Enable **Show story**
3. Add story title and content
4. Upload story image (optional)
5. Save

### 4. Add FAQs

1. In **Product extra content** section
2. Enable **Show FAQs**
3. Click **Add block** → **FAQ**
4. Add question and answer
5. Repeat for more FAQs
6. Save

### 5. Add Specifications

1. In **Product extra content** section
2. Enable **Show specifications**
3. Add specifications title and content
4. Save

## Testing Checklist

- [ ] Product images display correctly
- [ ] Thumbnail navigation works
- [ ] Lightbox opens on image click (if enabled)
- [ ] Variant selection updates price
- [ ] Variant selection updates stock message
- [ ] Compare-at price displays correctly
- [ ] Discount badge calculates correctly
- [ ] Quantity selector works
- [ ] Add to cart works
- [ ] Cart count updates
- [ ] Dynamic checkout button appears (if enabled)
- [ ] Stock messages display correctly
- [ ] Trust badges display
- [ ] Benefits display
- [ ] Description expands/collapses (if collapsed)
- [ ] FAQs expand/collapse
- [ ] Product story displays
- [ ] Specifications display
- [ ] Product recommendations display
- [ ] Share buttons work (if enabled)
- [ ] Mobile responsive
- [ ] Sticky info works (if enabled)
- [ ] Video plays (if product has video)
- [ ] 3D model displays (if product has 3D model)

## Customization

### Colors

All colors use CSS custom properties:
- `--color-bg-page` - Page background
- `--color-bg-elevated` - Card/button background
- `--color-text-primary` - Primary text
- `--color-text-secondary` - Secondary text
- `--color-accent-lime` - Accent color
- `--color-border-soft` - Border color

### Typography

- Headings: Space Grotesk
- Body: Inter
- Responsive font sizes

### Spacing

- Consistent spacing using `section-spacing` class
- Container max-width: 1200px
- Responsive padding

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Notes

- ✅ All settings managed through theme editor schema
- ✅ No hard-coded product handles
- ✅ Uses Shopify's standard `product` object
- ✅ Fully responsive design
- ✅ Accessibility features included
- ✅ SEO optimized
- ✅ Performance optimized (lazy loading, etc.)
- ✅ Works with all product types
- ✅ Supports products with/without variants
- ✅ Supports digital and physical products

## Troubleshooting

### Product page not showing
- Verify `product.json` template exists
- Check product has template assigned
- Verify theme is published

### Variants not updating
- Check product has variants
- Verify JavaScript is loading
- Check browser console for errors

### Add to cart not working
- Verify cart routes are correct
- Check variant ID is being sent
- Verify product is in stock
- Check browser console for errors

### Payment button not showing
- Verify Shopify Payments is enabled
- Check payment provider compatibility
- Verify product is in stock
- Check "Enable payment button" setting

### Images not displaying
- Verify product has images uploaded
- Check image URLs
- Verify image permissions

### Stock messages not showing
- Check "Show stock message" setting
- Verify inventory tracking is enabled
- Check low stock threshold setting

## Support

For issues or questions:
1. Check browser console for errors
2. Verify all settings in theme editor
3. Test with different products
4. Check Shopify documentation
5. Verify theme is up to date

## Next Steps

1. ✅ Upload theme to Shopify
2. ✅ Set product.json as default template
3. ✅ Configure section settings
4. ✅ Add products
5. ✅ Test all functionality
6. ✅ Customize trust badges and benefits
7. ✅ Add product stories and FAQs
8. ✅ Test on mobile devices
9. ✅ Go live!



