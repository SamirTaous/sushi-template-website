# Multi-Brand Restaurant Website Template

This website template supports multiple restaurant brands through URL-based routing. Each brand can have its own configuration, styling, and content while sharing the same codebase.

## URL Structure

- `/{brand-name}` - Main website for the specified brand
- `/brands` - Development page showing all available brands
- `/` - Redirects to the default brand

## How to Use

### 1. Access Different Brands

Visit different brands using their URL paths:
- `http://localhost:3000/tobiko` - Tobiko sushi restaurant
- `http://localhost:3000/sakura` - Sakura Japanese restaurant
- `http://localhost:3000/brands` - View all available brands

### 2. Add a New Brand

1. **Create brand configuration file:**
   ```typescript
   // lib/brands/your-brand.ts
   export const yourBrandConfig = {
     name: "YOUR BRAND",
     tagline: "Your tagline",
     // ... rest of configuration
   }
   ```

2. **Register the brand:**
   ```typescript
   // lib/brand-registry.ts
   import { yourBrandConfig } from './brands/your-brand'
   
   export const brandRegistry = {
     tobiko: tobikoConfig,
     sakura: sakuraConfig,
     yourbrand: yourBrandConfig, // Add here
   }
   ```

3. **Access your brand:**
   Visit `http://localhost:3000/yourbrand`

### 3. Brand Configuration Structure

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

Each brand configuration includes:

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

### 4. Dynamic Styling

Colors are automatically applied through CSS custom properties. Each brand's colors override the default theme:

```css
:root {
  --color-primary: #brand-primary-color;
  --color-secondary: #brand-secondary-color;
  --color-accent: #brand-accent-color;
  --color-gold: #brand-gold-color;
  --color-cream: #brand-cream-color;
}
```

### 5. Component Usage

Components automatically use the current brand's configuration through React Context:

```typescript
import { useBrandConfig } from '@/lib/brand-context'

export function MyComponent() {
  const brandConfig = useBrandConfig()
  
  return (
    <h1>{brandConfig.name}</h1>
  )
}
```

### 6. Key Configuration Sections

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

### 7. Example: Adding a New Brand

To add "Ramen House" brand:

1. **Create configuration:**
```typescript
// lib/brands/ramen-house.ts
export const ramenHouseConfig = {
  name: "RAMEN HOUSE",
  tagline: "Authentic Japanese Ramen",
  description: "Traditional ramen bowls made with love",
  
  colors: {
    primary: "#2c1810",
    secondary: "#3d2317", 
    accent: "#d2691e",
    gold: "#ffa500",
    cream: "#faf0e6",
  },
  
  locations: [
    {
      id: 1,
      name: "Ramen House Downtown",
      address: "789 Noodle Street",
      city: "Tokyo, Japan",
      phone: { display: "+81-3-1234-5678", link: "81312345678" },
      // ... rest of location config
    }
  ],
  // ... rest of configuration
}
```

2. **Register the brand:**
```typescript
// lib/brand-registry.ts
import { ramenHouseConfig } from './brands/ramen-house'

export const brandRegistry = {
  tobiko: tobikoConfig,
  sakura: sakuraConfig,
  'ramen-house': ramenHouseConfig, // Add here
}
```

3. **Access the brand:**
Visit `http://localhost:3000/ramen-house`

### 8. Development

After adding new brands or making changes:

```bash
npm run dev
```

Visit `http://localhost:3000/brands` to see all available brands.

### 9. Production Deployment

Each brand is accessible via its URL path:
- `https://yourdomain.com/tobiko`
- `https://yourdomain.com/sakura`
- `https://yourdomain.com/your-new-brand`

### 10. File Structure

```
lib/
  brands/
    tobiko.ts              # Tobiko brand configuration
    sakura.ts              # Sakura brand configuration
    your-brand.ts          # Your brand configuration
  brand-registry.ts        # Central brand registry
  brand-context.tsx        # React context for brand data

app/
  [brand]/
    layout.tsx             # Dynamic brand layout
    page.tsx               # Brand homepage
  brands/
    page.tsx               # Brand selection page
  page.tsx                 # Root redirect

components/
  hero.tsx                 # Uses: useBrandConfig()
  navbar.tsx               # Uses: useBrandConfig()
  addresses.tsx            # Uses: useBrandConfig()
  delivery.tsx             # Uses: useBrandConfig()
  footer.tsx               # Uses: useBrandConfig()
```

### 11. Benefits

- **Multi-tenant**: Host multiple restaurant brands on one codebase
- **URL-based routing**: Each brand has its own URL path
- **Dynamic styling**: Colors and assets change per brand
- **Shared components**: All brands use the same UI components
- **Type safety**: Full TypeScript support with brand validation
- **Fallback handling**: Invalid brand names redirect to default brand
- **Development tools**: Brand selection page for easy testing

### 12. TypeScript Support

The system includes full TypeScript support with:
- Brand key validation
- Configuration type checking  
- React context type safety
- Auto-completion for brand properties

This multi-brand template system allows you to efficiently manage multiple restaurant websites from a single codebase, with each brand having its own unique identity while sharing the same robust foundation.