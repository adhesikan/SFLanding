# StocksFundamentals Landing Page Implementation

This Next.js application implements a landing page for StocksFundamentals that integrates with the WordPress account creation API.

## Overview

When a user submits the trial form on the landing page:

1. The form data (name, email, phone) is sent to `/api/lead`
2. The API route calls the WordPress REST API at `optionfundamentals.com/wp-json/data-receiver/v1/data`
3. The WordPress API creates a new user account and WooCommerce order for StocksFundamentals (product ID: 92581)
4. Upon success, the user is redirected to an auto-login URL where they can access their account

## Key Components

### Form Handler (`app/page.tsx`)

- Collects user's full name, email, and phone number
- Splits full name into first name and last name
- Sends data to the API endpoint
- Handles loading states and error messages
- Redirects to auto-login URL on success

### API Route (`app/api/lead/route.ts`)

- Receives form data from the frontend
- Validates required fields
- Formats data to match WordPress API expectations:
  - `first_name`, `last_name`, `email`, `phone`
  - `product: 1` (for StocksFundamentals)
  - `hash: "af16b2d8ff877543367cdfce4fd6785b"` (authentication hash)
- Makes POST request to WordPress API
- Returns redirect URL or error message

## WordPress API Integration

The WordPress API (`savior-rest-api.php`) performs the following:

1. **Validates the request hash** to ensure it comes from an authorized source
2. **Checks if user exists** - returns error if email is already registered
3. **Creates new WordPress user** with subscriber role
4. **Creates WooCommerce order** for StocksFundamentals (product ID: 92581)
5. **Creates WooCommerce subscription** with trial period
6. **Sends welcome email** with login credentials
7. **Generates auto-login token** and returns login URL

## Product Types

- `product: 0` = OptionFundamentals (includes SMS alerts)
- `product: 1` = StocksFundamentals (this implementation)

## Error Handling

The implementation handles several error cases:

- Missing required fields
- Email already registered
- API connection failures
- Account creation failures

Errors are displayed inline on the form using HTML rendering to preserve any links in error messages.

## Security

- Hash authentication (`af16b2d8ff877543367cdfce4fd6785b`) validates requests
- WordPress validates the hash against `ThisCodeIsWrittenByDinaPal`
- Auto-login tokens are generated and stored securely
- User passwords are generated from phone number digits

## Flow Diagram

```
User fills form → Submit → Next.js API → WordPress API
                                              ↓
                                         Create User
                                              ↓
                                      Create WC Order
                                              ↓
                                    Create Subscription
                                              ↓
                                        Send Email
                                              ↓
                                   Generate Login Token
                                              ↓
User redirected ← Return URL ← Next.js API ← Return Data
```

## Testing

To test locally:

1. Run `npm install` to install dependencies
2. Run `npm run dev` to start the development server
3. Open `http://localhost:3000`
4. Fill out the trial form with test data
5. Check that the form submits and handles the response correctly

**Note:** In development, API calls will hit the production WordPress site.

## Deployment

When deploying to production:

1. Ensure the Next.js app is deployed (Vercel, Netlify, etc.)
2. Verify the API endpoint is accessible
3. Test the full flow from form submission to redirect
4. Monitor for any CORS or API connection issues
