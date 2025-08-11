var posts=["2025/08/09/面朝大海，春暖花开！/","2025/08/11/在心里种花，人生才不会荒芜。/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };