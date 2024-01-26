function getQuestion() {
  let count = 0;
  let x, y;
  while (count < 10) {
    x = Math.trunc(Math.random() * 10); //random generates from 0 to 1
    y = Math.trunc(Math.random() * 10); // trunc returns the integer part of a given no
    if (x + y < 10) {
      console.log(`${x} + ${y} =`, x + y);
      count++;
    }
  }
}

getQuestion();
