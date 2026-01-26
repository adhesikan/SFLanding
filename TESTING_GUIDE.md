# Local Testing Guide

## Prerequisites Installation

### Step 1: Install Node.js

1. **Download Node.js:**
   - Go to https://nodejs.org/
   - Download the LTS (Long Term Support) version
   - Recommended: v20.x or later

2. **Install Node.js:**
   - Run the downloaded installer
   - Follow the installation wizard
   - Keep all default options selected
   - **Important:** Make sure "Add to PATH" is checked

3. **Verify Installation:**
   ```powershell
   node --version
   npm --version
   ```
   - You should see version numbers for both

4. **Restart VS Code** after installation to refresh the PATH

---

## Testing Steps

### Step 2: Install Project Dependencies

Once Node.js is installed, run:

```powershell
npm install
```

This will install all required packages:
- next
- react
- react-dom
- typescript
- tailwindcss
- And all other dependencies from package.json

### Step 3: Start Development Server

```powershell
npm run dev
```

Expected output:
```
> strategy-fundamentals-landing@0.1.0 dev
> next dev

   ▲ Next.js 14.2.35
   - Local:        http://localhost:3000
   - Ready in X.Xs
```

### Step 4: Open the Landing Page

Open your browser and navigate to:
```
http://localhost:3000
```

---

## Testing the Form

### Test Case 1: New User Signup (Success)

1. **Fill out the form:**
   - Full Name: `Test User`
   - Email: `testuser123@example.com` (use a unique email)
   - Phone: `5551234567`

2. **Submit the form**
   - Click "Get Free Trial Access"
   - Watch for button text change to "Creating Account..."

3. **Expected Result:**
   - Form submits successfully
   - You're redirected to WordPress auto-login URL
   - You land in the WordPress dashboard
   - Check your email for welcome message

4. **Verify in WordPress:**
   - Log into WordPress admin at https://www.optionfundamentals.com/wp-admin
   - Go to Users → All Users
   - Find the new user
   - Go to WooCommerce → Orders
   - Verify the order was created
   - Go to WooCommerce → Subscriptions
   - Verify the subscription is active

### Test Case 2: Existing User (Error)

1. **Use the same email from Test Case 1**
2. **Submit the form**
3. **Expected Result:**
   - Error message displays: "This email is already registered please log in now"
   - Form remains editable
   - No new account is created

### Test Case 3: Validation Error

1. **Leave one or more fields empty**
2. **Try to submit**
3. **Expected Result:**
   - Browser validation prevents submission
   - "Please fill out this field" message appears

### Test Case 4: Network Error

1. **Disconnect from internet** (optional)
2. **Submit the form**
3. **Expected Result:**
   - Error message: "An error occurred. Please try again."
   - Form remains editable

---

## Debugging

### Check Browser Console

Open Developer Tools (F12) and check the Console tab for:
- Form submission logs
- API call details
- Any JavaScript errors

### Check Network Tab

In Developer Tools, go to Network tab:
1. Filter by "Fetch/XHR"
2. Submit the form
3. Look for the `/api/lead` request
4. Check the request payload
5. Check the response

### Expected Network Request:

**Request URL:** `http://localhost:3000/api/lead`
**Method:** `POST`
**Payload:**
```json
{
  "firstName": "Test",
  "lastName": "User",
  "email": "testuser123@example.com",
  "phone": "5551234567"
}
```

**Success Response:**
```json
{
  "success": true,
  "redirect": "https://www.optionfundamentals.com/auto-login?login_token=..."
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Error message here"
}
```

### Check Terminal Output

Look at your PowerShell terminal where `npm run dev` is running:
- API route logs
- Console.log outputs
- Any server errors

---

## Common Issues & Solutions

### Issue: "npm is not recognized"
**Solution:** 
- Node.js is not installed or not in PATH
- Install Node.js from https://nodejs.org/
- Restart VS Code after installation

### Issue: "Cannot find module 'next'"
**Solution:**
```powershell
npm install
```

### Issue: Port 3000 is already in use
**Solution:**
```powershell
# Stop the current process with Ctrl+C
# Then use a different port:
npm run dev -- -p 3001
```

### Issue: Form submits but nothing happens
**Solution:**
- Check browser console for errors
- Check Network tab for API call
- Verify WordPress site is accessible
- Check authentication hash is correct

### Issue: "Failed to create account"
**Solution:**
- Check if WordPress site is online
- Verify API URL is correct
- Check WordPress error logs
- Ensure WooCommerce is active

### Issue: Auto-login doesn't work
**Solution:**
- Check that redirect URL is complete
- Verify token in URL
- Clear browser cookies
- Try in incognito mode

---

## Manual API Testing

You can test the API directly without the form:

### Using PowerShell:

```powershell
$body = @{
    firstName = "Test"
    lastName = "User"
    email = "testuser456@example.com"
    phone = "5551234567"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:3000/api/lead" -Method POST -Body $body -ContentType "application/json"
```

### Using cURL (if installed):

```bash
curl -X POST http://localhost:3000/api/lead \
  -H "Content-Type: application/json" \
  -d "{\"firstName\":\"Test\",\"lastName\":\"User\",\"email\":\"testuser789@example.com\",\"phone\":\"5551234567\"}"
```

---

## Production Testing

Once local testing is complete, test on production:

1. **Deploy to hosting** (Vercel, Netlify, etc.)
2. **Update DNS** if needed
3. **Test form submission** on production domain
4. **Monitor logs** for any issues
5. **Verify WordPress integration** works

---

## Testing Checklist

- [ ] Node.js installed
- [ ] Dependencies installed (`npm install`)
- [ ] Dev server running (`npm run dev`)
- [ ] Landing page loads at http://localhost:3000
- [ ] Form fields are visible and editable
- [ ] Form submits with valid data
- [ ] Loading state appears during submission
- [ ] Success: Redirects to WordPress
- [ ] Error: Shows error message
- [ ] WordPress account created
- [ ] WooCommerce order created
- [ ] Welcome email received
- [ ] Auto-login works
- [ ] Existing user gets error message

---

## Next Steps After Testing

1. ✅ Fix any issues found during testing
2. ✅ Test with multiple user scenarios
3. ✅ Verify email delivery
4. ✅ Check WordPress subscription setup
5. ✅ Deploy to production
6. ✅ Monitor production logs
7. ✅ Set up error tracking (optional)

---

## Support Resources

- **Next.js Docs:** https://nextjs.org/docs
- **React Docs:** https://react.dev/
- **WordPress REST API:** https://developer.wordpress.org/rest-api/
- **WooCommerce API:** https://woocommerce.github.io/woocommerce-rest-api-docs/

For WordPress-specific issues, check the WordPress error logs at:
`/wp-content/debug.log` (if WP_DEBUG is enabled)
