var post = document.querySelector(".post");
    var heart = document.querySelector(".heart");

post.addEventListener("dblclick", () => {
  heart.classList.add("active");

  setTimeout(() => {
    heart.classList.remove("active");
  }, 850);
});
