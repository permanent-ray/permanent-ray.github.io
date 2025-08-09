var posts=["2025/08/09/hello-world/","2025/08/09/面朝大海，春暖花开！/","2025/08/09/强袭自由/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };