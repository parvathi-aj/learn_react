// main.js
class PostFetcher {
  constructor() {
    this.fetchBtn = document.getElementById("fetchBtn");
    this.clearBtn = document.getElementById("clearBtn");
    this.status = document.getElementById("status");
    this.posts = document.getElementById("posts");

    this.setupEventListeners();
  }

  setupEventListeners() {
    this.fetchBtn.addEventListener("click", () => this.fetchPosts());
    this.clearBtn.addEventListener("click", () => this.clearPosts());
  }

  async fetchPosts() {
    try {
      this.setLoading(true);
      this.showStatus("Loading posts...", "loading");

      let response = await fetch("https://jsonplaceholder.typicode.com/posts");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      let posts = await response.json();
      this.displayPosts(posts);
      this.showStatus(`Successfully loaded ${posts.length} posts!`, "success");
    } catch (error) {
      console.error("Error fetching posts:", error);
      this.showStatus(`Error: ${error.message}`, "error");
    } finally {
      this.setLoading(false);
    }
  }

  displayPosts(posts) {
    this.posts.innerHTML = "";

    // Show first 10 posts
    let postsToShow = posts.slice(0, 10);

    postsToShow.forEach((post, index) => {
      let postElement = this.createPostElement(post, index + 1);
      this.posts.appendChild(postElement);
    });
  }

  createPostElement(post, number) {
    let postDiv = document.createElement("div");
    postDiv.className = "post";

    postDiv.innerHTML = `
      <div class="post-title">${number}. ${post.title}</div>
      <div class="post-body">${post.body}</div>
    `;

    return postDiv;
  }

  showStatus(message, type) {
    this.status.innerHTML = `<div class="${type}">${message}</div>`;
  }

  clearPosts() {
    this.posts.innerHTML = "";
    this.status.innerHTML = "";
  }

  setLoading(isLoading) {
    this.fetchBtn.disabled = isLoading;
    this.fetchBtn.textContent = isLoading ? "Loading..." : "Fetch Posts";
  }
}

// Initialize the app when the page loads
document.addEventListener("DOMContentLoaded", function () {
  new PostFetcher();
});