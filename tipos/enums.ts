(() => {
  enum audioLevel {
    min,
    medium,
    max,
  }

  let currentAudio = audioLevel.min;
  currentAudio = audioLevel.medium;
  currentAudio = audioLevel.max;

  console.log(currentAudio);
})();
