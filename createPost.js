/**
 * @file createPost.js
 * @description This script creates a new post by sending a POST request to the JSONPlaceholder API.
 *              It adds a custom key "excerpt" that contains the first 20 characters of the post body.
 */

// The Main function for creating a new post
(async function () {
  // Step 1:  Here is the API URL
  const apiUrl = "https://jsonplaceholder.typicode.com/posts";

  // Step 2: Here is he post data to be sent
  const postData = {
    title: "Sample Post Title", // Post title
    body: "This is the body of a sample post created for a skills test.", // Post body
  };

  // Step 3: Here is the "excerpt" key containing the first 20 characters of the "body" content
  postData.excerpt = postData.body.substring(0, 20);

  try {
    // Step 4: Sending the POST request to the API
    const response = await fetch(apiUrl, {
      method: "POST", // Request type
      headers: {
        "Content-Type": "application/json", // Content type
      },
      body: JSON.stringify(postData), // JSON data sent in the request body
    });

    // Step 5: Checking the response of the API
    if (!response.ok) {
      throw new Error(`Request error: ${response.status}`);
    }

    // Step 6: Reading and fetching the response data
    const responseData = await response.json();
    console.log("Post created successfully:", responseData);
  } catch (error) {
    // Error handling
    console.error("Error:", error.message);
  }
})();
