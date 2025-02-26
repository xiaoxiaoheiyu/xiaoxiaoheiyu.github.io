var posts=["2025/02/26/hello-world/","2025/02/26/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };