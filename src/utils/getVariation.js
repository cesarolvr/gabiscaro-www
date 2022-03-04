const getVariation = (min, max, variation) => {
  var seed = (Math.floor(Math.random() * max) % (max - min)) + min; // attempts to keep the result within the bounds
  var min = min,
    max = max,
    variation = variation;
  const r = () => {
    var offset = Math.floor(Math.random() * variation);
    if (Math.random() < 0.5) offset *= -1; // chance that number will decrease
    seed += offset;
    if (seed < min) return max - seed; // also attempts to keep the result within the bounds
    if (seed > max) return min + (seed - max);
    else return seed;
  };
  return r();
};

export default getVariation;
