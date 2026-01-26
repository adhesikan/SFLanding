# API Reference

## Next.js API Endpoint

**URL:** `/api/lead`  
**Method:** `POST`  
**Content-Type:** `application/json`

### Request Body

```json
{
  "firstName": "Jane",
  "lastName": "Trader",
  "email": "jane@example.com",
  "phone": "5551234567"
}
```

### Success Response

```json
{
  "success": true,
  "redirect": "https://www.optionfundamentals.com/auto-login?login_token=abc123&order_id=12345&user_hash=67890"
}
```

### Error Response

```json
{
  "success": false,
  "message": "This email is already registered please <a href='https://www.optionfundamentals.com/my-account/'>log in now</a>"
}
```

## WordPress API Endpoint

**URL:** `https://www.optionfundamentals.com/wp-json/data-receiver/v1/data`  
**Method:** `POST`  
**Content-Type:** `application/json`

### Request Body

```json
{
  "first_name": "Jane",
  "last_name": "Trader",
  "email": "jane@example.com",
  "phone": "5551234567",
  "product": 1,
  "hash": "af16b2d8ff877543367cdfce4fd6785b"
}
```

**Parameters:**
- `first_name` (string, required) - User's first name
- `last_name` (string, required) - User's last name
- `email` (string, required) - User's email address (used as username)
- `phone` (string, required) - User's phone number (digits used as password)
- `product` (integer, required) - Product type: 0 = OptionFundamentals, 1 = StocksFundamentals
- `hash` (string, required) - MD5 hash of 'ThisCodeIsWrittenByDinaPal' for authentication

### Success Response

```json
{
  "success": true,
  "message": "ordered successfully",
  "data": {
    "user_id": 12345,
    "login_url": "https://www.optionfundamentals.com/auto-login?login_token=abc123xyz",
    "order_id": 67890
  }
}
```

### Error Response - User Exists

```json
{
  "success": false,
  "message": "This email is already registered please <a href='https://www.optionfundamentals.com/my-account/'>log in now</a>",
  "data": {
    "user_id": 12345
  }
}
```

### Error Response - Invalid Hash

```json
{
  "success": false,
  "message": "Data Not Come From Valid Source"
}
```

### Error Response - Order Creation Failed

```json
{
  "success": false,
  "message": "order not created",
  "data": "Something went to wrong ..."
}
```

## WordPress Actions Performed

When the API receives a valid request, it performs these actions in order:

1. **Validate hash** - Ensures request is from authorized source
2. **Check existing user** - Looks up username and email
3. **Create WordPress user** (if new)
   - Username: email address
   - Password: digits from phone number
   - Role: subscriber (upgraded to customer after order)
   - Meta: stores phone number
4. **Create WooCommerce order**
   - Product: 92581 (StocksFundamentals) or 42488 (OptionFundamentals)
   - Customer: linked to user_id
   - Status: completed
5. **Create WooCommerce subscription**
   - Billing period: from product settings
   - Status: active
   - Dates: trial_end, next_payment, end
6. **Send welcome email**
   - Subject: "Welcome to StocksFundamentals - Your Account Details Inside"
   - Contains: username, password, support link
7. **Generate auto-login token**
   - Random 32-character token
   - Stored in user meta
   - Valid for single use
8. **Return response** with login URL and order details

## Product Configuration

### StocksFundamentals (product: 1)
- **WooCommerce Product ID:** 92581
- **SMS Alerts:** No
- **Email Subject:** "Welcome to StocksFundamentals - Your Account Details Inside"
- **Email From:** "StocksFundamentals <noreply@optionfundamentals.com>"

### OptionFundamentals (product: 0)
- **WooCommerce Product ID:** 42488
- **SMS Alerts:** Yes (Mobile Text Alerts integration)
- **Email Subject:** "Welcome to OptionFundamentals - Your Account Details Inside"
- **Email From:** "OptionFundamentals <noreply@optionfundamentals.com>"

## Password Generation

User passwords are automatically generated from the phone number:
- All non-digit characters are removed
- Example: "(555) 123-4567" becomes "5551234567"

Users are encouraged to change their password after first login.

## Auto-Login URL Structure

```
https://www.optionfundamentals.com/auto-login?login_token={token}&order_id={order_id}&user_hash={user_id}
```

**Parameters:**
- `login_token` - One-time use token from user meta
- `order_id` - WooCommerce order ID
- `user_hash` - WordPress user ID

## Error Messages

Common error messages and their meanings:

| Message | Meaning | Action |
|---------|---------|--------|
| "All fields are required" | Missing firstName, lastName, email, or phone | Complete all form fields |
| "This email is already registered..." | Email already exists in WordPress | Use different email or login |
| "Data Not Come From Valid Source" | Invalid hash | Check authentication hash |
| "order not created" | WooCommerce order creation failed | Check WordPress/WooCommerce logs |
| "Internal server error" | Server-side error | Check API logs |

## Testing with cURL

### Test Next.js API

```bash
curl -X POST http://localhost:3000/api/lead \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Jane",
    "lastName": "Trader",
    "email": "jane@example.com",
    "phone": "5551234567"
  }'
```

### Test WordPress API Directly

```bash
curl -X POST https://www.optionfundamentals.com/wp-json/data-receiver/v1/data \
  -H "Content-Type: application/json" \
  -d '{
    "first_name": "Jane",
    "last_name": "Trader",
    "email": "jane@example.com",
    "phone": "5551234567",
    "product": 1,
    "hash": "af16b2d8ff877543367cdfce4fd6785b"
  }'
```
