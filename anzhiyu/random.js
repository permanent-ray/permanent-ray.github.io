var posts=["lief/一个人的朝圣/","lief/终不似-少年游/","lief/图床搭建-Cloudflare-R2/","lief/在心里种花，人生才不会荒芜。/","lief/面朝大海，春暖花开！/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };