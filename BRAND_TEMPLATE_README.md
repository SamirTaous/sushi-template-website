# Restaurant Website Template

This website has been converted into a reusable template that can be easily customized for different restaurant brands by modifying a single configuration file.

## How to Customize for Your Brand

### 1. Edit Brand Configuration

All brand-specific content is centralized in `lib/brand-config.ts`. Simply modify the values in this file to rebrand the entire website:

```typescript
export const brandConfig = {
  // Brand Identity
  name: "YOUR_RESTAURANT_NAME",
  tagline: "Your Restaurant Tagline",
  description: "Your restaurant description",
  
  // Colors (CSS custom properties)
  colors: {
    primary: "#your-primary-color",
    secondary: "#your-secondary-color", 
    accent: "#your-accent-color",
    gold: "#your-gold-color",
    cream: "#your-cream-color",
  },
  
  // Contact & Locations
  locations: [
    {
      name: "Your Location Name",
      address: "Your Address",
      city: "Your City",
      phone: { display: "Display Number", link: "LinkNumber" },
      // ... more location details
    }
  ],
  
  // ... other configuration options
}
```

### 2. Key Configuration Sections

#### Brand Identity
- `name`: Restaurant name displayed throughout the site
- `tagline`: Subtitle shown on hero section
- `description`: Used in SEO and footer

#### Colors
- `primary`: Main background color
- `secondary`: Secondary background color  
- `accent`: Accent color for buttons and highlights
- `gold`: Gold accent color for decorative elements
- `cream`: Text color

#### Assets
- `logo`: Path to your logo image
- `favicon`: Path to your favicon
- `heroBackground`: Hero section background image URL

#### Social Media
Configure all social media platforms:
- Each platform has `url`, `handle`, `icon`, and `enabled` properties
- Set `enabled: false` to hide specific platforms
- Icons use emoji for simplicity (can be replaced with SVG icons)
- Supports Instagram, Facebook, TikTok, Twitter, YouTube, LinkedIn

#### Contact Information
- `email`: Main contact email
- `phone`: Main phone number with display and link formats
- `hours`: Business hours

#### Locations
Array of restaurant locations with:
- Name, address, city
- Phone numbers (display and link formats)
- Email, hours, specialty services
- Map image URL

#### Delivery
- Title and description
- Estimated delivery time
- Delivery platform links (UberEats, Deliveroo, etc.)

#### Navigation
- Menu items with labels and links

#### Call-to-Action Buttons
- Text for various buttons throughout the site

### 3. Assets to Replace

Replace these files with your brand assets:
- `/public/tobiko-sushi-logo.png` - Your restaurant logo
- `/public/icon.svg` - Your favicon
- Update image URLs in the configuration for hero and location backgrounds

### 4. CSS Color Variables

The colors from `brandConfig.colors` are automatically applied through CSS custom properties defined in `app/globals.css`. The current color scheme uses:

```css
--color-black: #0a0a0a;      /* primary */
--color-charcoal: #1a1a1a;   /* secondary */
--color-red-accent: #C0392B;  /* accent */
--color-gold: #D4A843;       /* gold */
--color-cream: #F5F0E8;      /* cream */
```

### 5. Components Using Brand Configuration

The following components automatically use the brand configuration:

- `app/layout.tsx` - SEO metadata and favicon
- `components/hero.tsx` - Brand name, tagline, CTA buttons
- `components/navbar.tsx` - Logo, navigation menu
- `components/addresses.tsx` - Location information
- `components/delivery.tsx` - Delivery information and platform links
- `components/footer.tsx` - Contact info, locations, brand name

### 6. Example: Rebranding for a New Restaurant

To rebrand for "Sakura Sushi":

1. Update `lib/brand-config.ts`:
```typescript
export const brandConfig = {
  name: "SAKURA",
  tagline: "Authentic Japanese Experience",
  description: "Traditional Japanese cuisine with modern flair",
  
  colors: {
    primary: "#1a1a2e",
    secondary: "#16213e", 
    accent: "#e94560",
    gold: "#f39c12",
    cream: "#eee2dc",
  },
  
  locations: [
    {
      id: 1,
      name: "Sakura Downtown",
      address: "123 Main Street",
      city: "New York, NY",
      phone: { display: "(555) 123-4567", link: "5551234567" },
      // ... rest of location config
    }
  ],
  // ... rest of configuration
}
```

2. Replace logo file: `/public/tobiko-sushi-logo.png` → `/public/sakura-logo.png`
3. Update logo path in config: `logo: "/sakura-logo.png"`

That's it! The entire website will now be branded for Sakura Sushi.

### 7. Development

After making changes to the brand configuration:

```bash
npm run dev
```

The changes will be reflected immediately across all components.

### 8. TypeScript Support

The configuration includes full TypeScript support with type definitions for better development experience and error checking.

## File Structure

```
lib/
  brand-config.ts          # Main brand configuration file

components/
  hero.tsx                 # Uses: name, tagline, assets.heroBackground
  navbar.tsx               # Uses: name, assets.logo, navigation
  addresses.tsx            # Uses: locations, sections.addresses
  delivery.tsx             # Uses: delivery configuration
  footer.tsx               # Uses: name, locations, navigation

app/
  layout.tsx               # Uses: seo, assets.favicon
```

This template system makes it easy to create multiple restaurant websites or quickly rebrand an existing one by changing a single configuration file.