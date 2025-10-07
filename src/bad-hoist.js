const debugFunc = () => {
  let time = 'today';
  let name = 'Zo';
  let mood = 'sad';
  console.log(`Hello ${name}, are you feeling happy ${time}?`);
  if (mood === 'sad') {
    console.log(`Oh no, I'm sorry you're feeling ${mood} ${time}.`);
  } else {
    console.log(`Hey im glad you're feeling happy ${time}!`);
  }
};

debugFunc();

module.exports = {
  debugFunc,
};
