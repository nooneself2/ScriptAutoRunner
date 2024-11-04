// Replace with your GitHub personal access token
const token = 'your_github_token_here';

// Gist data
const gistData = {
  description: 'Example Gist created using fetch API',
  public: true,  // Set to false if you want a private gist
  files: {
    'example.js': {
      content: `console.log("Hello, GitHub Gist!");`
    }
  }
};

// Create the Gist using fetch
fetch('https://api.github.com/gists', {
  method: 'POST',
  headers: {
    'Authorization': `token ${token}`,
    'Content-Type': 'application/json',
    'Accept': 'application/vnd.github+json'
  },
  body: JSON.stringify(gistData)
})
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
})
.then(data => {
  console.log('Gist created successfully:', data.html_url);
})
.catch(error => {
  console.error('Error creating Gist:', error);
});
