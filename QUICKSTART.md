# Quick Start Guide

## What Was Implemented

Your Next.js landing page now integrates with the WordPress API to automatically create StocksFundamentals accounts, exactly like the WordPress implementation in `functions.php`.

## Key Changes

1. **API Route** (`app/api/lead/route.ts`) - Calls WordPress API with proper authentication
2. **Landing Page** (`app/page.tsx`) - Handles form submission and redirects to auto-login
3. **Product Type** - Set to `1` for StocksFundamentals

## How to Test

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

### Step 3: Open the Landing Page
Navigate to: `http://localhost:3000`

### Step 4: Fill Out the Form
- **Full Name:** Enter first and last name (e.g., "Jane Trader")
- **Email:** Enter a valid email address
- **Phone:** Enter phone number (e.g., "5551234567")

### Step 5: Submit the Form
Click "Get Free Trial Access"

### Expected Behavior

**On Success:**
1. Button text changes to "Creating Account..."
2. Form fields are disabled
3. User is redirected to WordPress auto-login URL
4. User lands in their WordPress dashboard
5. WooCommerce order is created
6. Welcome email is sent

**On Error:**
1. Error message displays above the form
2. Form fields remain editable
3. User can try again with different information

## Common Test Scenarios

### New User
- Form submits successfully
- Account is created in WordPress
- Order is created in WooCommerce
- Welcome email is sent
- User is redirected and logged in

### Existing User
- Error message: "This email is already registered please log in now"
- User can click link to login page
- No new account or order is created

### Validation Error
- Error message: "All fields are required"
- Form does not submit
- User must fill all fields

## WordPress Account Details

After successful submission:
- **Username:** User's email address
- **Password:** Digits from phone number (e.g., "5551234567")
- **Product:** StocksFundamentals (Product ID: 92581)
- **Role:** Customer
- **Subscription:** Active with trial period

## Verify in WordPress

1. Log into WordPress admin
2. Go to Users → All Users
3. Find the newly created user
4. Go to WooCommerce → Orders
5. Find the completed order
6. Go to WooCommerce → Subscriptions
7. Verify active subscription

## Important Notes

- **Product Type:** Set to `1` for StocksFundamentals
- **No SMS Alerts:** StocksFundamentals does not include SMS alerts
- **Email Branding:** Welcome email uses "StocksFundamentals" branding
- **Password:** Auto-generated from phone number digits
- **Auto-Login:** One-time use token in URL

## Troubleshooting

### Form doesn't submit
- Check browser console for errors
- Verify all fields are filled
- Check network tab for API call

### API returns error
- Verify WordPress site is accessible
- Check authentication hash matches
- Ensure email is not already registered

### Redirect doesn't work
- Check that response includes `redirect` URL
- Verify `window.location.href` assignment
- Check for console errors

### Account not created
- Check WordPress error logs
- Verify WooCommerce is active
- Ensure product ID 92581 exists

## Production Deployment

When deploying to production:

1. **Verify API URL** is correct in `route.ts`
2. **Test form submission** on production domain
3. **Monitor error logs** for any issues
4. **Check email delivery** for welcome messages
5. **Verify auto-login** redirects work correctly

## Support

For issues with:
- **Next.js app:** Check browser console and terminal logs
- **WordPress API:** Check WordPress error logs
- **Account creation:** Check WordPress Users
- **Order creation:** Check WooCommerce Orders
- **Email delivery:** Check WordPress email logs

## Files to Review

- `app/api/lead/route.ts` - API implementation
- `app/page.tsx` - Form and submission handler
- `IMPLEMENTATION.md` - Detailed documentation
- `API_REFERENCE.md` - API specifications
- `CHANGES_SUMMARY.md` - List of changes made
