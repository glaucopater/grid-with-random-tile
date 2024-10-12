import { MAX_ITEMS, MAX_ITEMS_PER_ROW } from "../constants";

// Improved random number generator (Xorshift)
export const createXorshift = (seed) => {
  let x = seed;
  let y = 362436069;
  let z = 521288629;
  let w = 88675123;
  return () => {
    const t = x ^ (x << 11);
    x = y; y = z; z = w;
    w = w ^ (w >> 19) ^ (t ^ (t >> 8));
    return (w & 0x7fffffff) / 0x7fffffff;
  };
};

export const generateRandomProp = (randomBool) => (index) => ({
  pos: { x: index, y: 0 },
  top: randomBool(),
  right: randomBool(),
  bottom: randomBool(),
  left: randomBool(),
});

export const generateItems = (xorshift) => {
  const randomBool = (probability = 0.7) => xorshift() < probability;
  const randomProp = generateRandomProp(randomBool);

  return [...Array(MAX_ITEMS).keys()].map((_, index) => {
    const randomProps = randomProp(index);
    return { ...randomProps, index };
  });
};

export const generatePaths = (items) => {
  const paths = [];
  items.forEach((item, index) => {
    if (item.top && index >= MAX_ITEMS_PER_ROW && items[index - MAX_ITEMS_PER_ROW].bottom) {
      paths.push(`${index + 1}-${index - MAX_ITEMS_PER_ROW + 1}`);
      items[index].topConnected = true;
      items[index - MAX_ITEMS_PER_ROW].bottomConnected = true;
    }
    if (item.right && (index + 1) % MAX_ITEMS_PER_ROW !== 0 && items[index + 1].left) {
      paths.push(`${index + 1}-${index + 2}`);
      items[index].rightConnected = true;
      items[index + 1].leftConnected = true;
    }
  });
  return paths;
};
