# 🚀 SolanaCraft Deployment Guide

## 🌐 Subdomain Setup: solana.bubblepy.com

### 1. **DNS Configuration**

Add this CNAME record to your domain provider (where bubblepy.com is hosted):

```
Type: CNAME
Name: solana
Value: cname.vercel.app
TTL: 3600 (or default)
```

### 2. **Vercel Deployment**

#### Step 1: Connect Repository

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your SolanaCraft repository
4. Configure build settings:
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

#### Step 2: Environment Variables

Add these environment variables in Vercel:

```
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://solana.bubblepy.com
```

#### Step 3: Custom Domain

1. Go to Project Settings → Domains
2. Add `solana.bubblepy.com`
3. Vercel will automatically configure SSL

### 3. **SEO & Google Search Console**

#### Option A: Separate Property (Recommended)

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property"
3. Enter `https://solana.bubblepy.com`
4. Verify ownership (DNS record or HTML file)
5. Submit sitemap: `https://solana.bubblepy.com/sitemap.xml`

#### Option B: Same Property

1. In your existing bubblepy.com Search Console
2. Add `https://solana.bubblepy.com` as a property
3. Submit the sitemap

### 4. **Post-Deployment Checklist**

- [ ] DNS CNAME record added
- [ ] Vercel project deployed
- [ ] Custom domain configured
- [ ] SSL certificate active
- [ ] Google Search Console verified
- [ ] Sitemap submitted
- [ ] Test all pages work
- [ ] Test cookie consent
- [ ] Test wallet connections

### 5. **SEO Features Implemented**

✅ **Meta Tags**: Complete Open Graph and Twitter Cards  
✅ **Structured Data**: JSON-LD for Google understanding  
✅ **Sitemap**: XML sitemap with proper priorities  
✅ **Robots.txt**: SEO-friendly crawling directives  
✅ **Canonical URLs**: Proper URL structure  
✅ **Performance**: Optimized for Core Web Vitals

### 6. **Monitoring & Analytics**

#### Google Analytics

- Add GA4 tracking code to track Solana project separately
- Monitor user behavior and conversions

#### Performance Monitoring

- Use Vercel Analytics
- Monitor Core Web Vitals
- Track page load times

### 7. **Cross-Domain Linking**

Add these links to your main bubblepy.com site:

```html
<!-- In your main site navigation -->
<a href="https://solana.bubblepy.com">Solana Platform</a>

<!-- In footer -->
<div class="platforms">
  <a href="https://bubblepy.com">BSC Platform</a>
  <a href="https://solana.bubblepy.com">Solana Platform</a>
</div>
```

### 8. **Troubleshooting**

#### Domain Not Working

- Check DNS propagation (can take up to 48 hours)
- Verify CNAME record is correct
- Check Vercel domain configuration

#### SSL Issues

- Vercel handles SSL automatically
- Wait for certificate generation (usually 5-10 minutes)

#### SEO Issues

- Verify sitemap is accessible
- Check robots.txt is working
- Test structured data with Google's Rich Results Test

---

## 🎯 **Benefits of This Setup**

1. **Free Subdomain**: No additional domain costs
2. **SEO Optimized**: Proper meta tags, structured data, sitemaps
3. **Brand Consistency**: Links back to main bubblepy.com
4. **Separate Analytics**: Clean tracking for Solana project
5. **Professional Appearance**: Looks like a dedicated platform
6. **Easy Management**: Both projects under one Vercel account

---

**Need Help?** Check Vercel documentation or contact support for domain-specific issues.
