# Zira Fashion - Modern Streetwear Ecommerce Website

A responsive, high-converting streetwear fashion ecommerce web application built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**.

## Features

- **Responsive Streetwear Design**: Custom purple accents (`#7B5FD0`), clean typography, soft rounded cards, and smooth micro-interactions.
- **Hero Showcase**: Overlapping model layout, "New Collection" pill tag, "Where Comfort Meets Confidence" tagline, and "Featured Look" quick add-to-cart card.
- **Shop by Category**: Horizontal scrolling category carousel (Women, Men, Girls, Boys, Dresses, Hoodies, etc.).
- **New Arrivals Grid**: Responsive 2-column mobile layout with wishlist toggle, discount badges, color swatches, and instant add-to-cart.
- **Interactive Cart Drawer**: Real-time slide-over drawer with item counter, quantity controls, subtotal calculation, free shipping threshold bar, and promo code support.
- **Direct WhatsApp Checkout**: Checkout modal that prepares and sends formatted order summaries directly to WhatsApp with one click.
- **Quick View Popup**: Detailed product modal with high-res photo gallery, size selector (XS-XXL), color selector, and quick checkout.
- **Wishlist**: Saved in browser `localStorage`.
- **Live Search & Category Filtering**: Instant real-time filtering without page reloads.
- **Limited-Time Offer Banner**: Live countdown timer with special promo code banner.
- **Customer Reviews Carousel & Newsletter**: Interactive testimonial slider and discount capture form.

## Quick Start (Running Locally)

### Prerequisites
- Node.js 18+ or 20+ installed on your computer: [https://nodejs.org/](https://nodejs.org/)

### Installation & Run

1. Extract the downloaded `.zip` file into a folder of your choice.
2. Open your terminal / command prompt in the extracted project folder.
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the local development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```
   (or whichever port Vite displays in your terminal).

### Building for Production

To generate an optimized production build:
```bash
npm run build
```
The compiled files will be output to the `dist/` folder ready for deployment to any web host (Vercel, Netlify, Cloudflare Pages, GitHub Pages, Firebase Hosting, AWS S3, etc.).
