/**
 * @file fetchPostWithComments.js
 * @description This script fetches a post by ID and retrieves all associated comments,
 *              then merges the comments into the post data using a "comments" key.
 */

// The main function to fetch the post and its comments
(async function () {
  // Step 1: Definition of the API base URL
  const apiUrl = "https://jsonplaceholder.typicode.com";

  // Step 2: Specifying the Post ID to fetch
  const postId = 50;

  try {
    // Step 3: Fetching the post with the given ID
    const postResponse = await fetch(`${apiUrl}/posts/${postId}`);
    if (!postResponse.ok) {
      throw new Error(`Failed to fetch post. Status: ${postResponse.status}`);
    }
    const postData = await postResponse.json(); // Parsing the post data

    // Step 4: Fetching all comments associated with the post
    const commentsResponse = await fetch(`${apiUrl}/posts/${postId}/comments`);
    if (!commentsResponse.ok) {
      throw new Error(
        `Failed to fetch comments. Status: ${commentsResponse.status}`
      );
    }
    const commentsData = await commentsResponse.json(); // Parse comments data

    // Step 5: Merge the comments into the post data
    postData.comments = commentsData;

    // Step 6: Log the combined post and comments data
    console.log("Post with comments merged:", postData);
  } catch (error) {
    // Error handling
    console.error("Error:", error.message);
  }
})();
