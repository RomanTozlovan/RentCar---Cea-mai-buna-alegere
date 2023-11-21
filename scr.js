let isFilled = false;

function toggleHeartFill() {
  const heart = document.getElementById("heart");
  if (isFilled) {
    heart.style.animation = "unfillHeart 0.5s linear forwards";
  } else {
    heart.style.animation = "fillHeart 0.5s linear forwards";
  }
  isFilled = !isFilled;
}
