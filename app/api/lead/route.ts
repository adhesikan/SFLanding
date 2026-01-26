import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, phone } = (await request.json()) as {
      firstName?: string;
      lastName?: string;
      email?: string;
      phone?: string;
    };

    // Validate required fields
    if (!firstName || !lastName || !email || !phone) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Prepare data for WordPress API - matching the expected format from savior-rest-api.php
    const data = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      phone: phone,
      product: 1, // StocksFundamentals
      hash: "af16b2d8ff877543367cdfce4fd6785b", // MD5 hash of 'ThisCodeIsWrittenByDinaPal'
    };

    // Call WordPress API
    const apiUrl = "https://www.optionfundamentals.com/wp-json/data-receiver/v1/data";
    
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    let responseData;
    let rawText;
    try {
      rawText = await response.text();
      responseData = JSON.parse(rawText);
    } catch (e) {
      // If JSON parsing fails, return the raw response so we can see what WordPress returned
      return NextResponse.json(
        { 
          success: false, 
          message: `WordPress returned non-JSON response`,
          rawResponse: rawText ? rawText.substring(0, 1000) : 'empty response'
        },
        { status: 500 }
      );
    }

    // Handle the API response - check success field regardless of HTTP status
    if (responseData.success === true) {
      const { login_url, order_id, user_id } = responseData.data;
      
      // Add order_id and user_hash to the auto-login URL
      // The auto-login handler will detect StocksFundamentals order and redirect accordingly
      const redirectUrl = `${login_url}&order_id=${order_id}&user_hash=${user_id}`;
      
      return NextResponse.json({
        success: true,
        redirect: redirectUrl,
      });
    } else {
      // Return the actual error message from WordPress
      return NextResponse.json({
        success: false,
        message: responseData.message || "Account creation failed",
        debug: responseData.data || null,
      });
    }
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
