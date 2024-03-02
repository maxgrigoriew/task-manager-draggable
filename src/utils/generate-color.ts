const generatorColor = (): string => {
  const colors = [
    '#d2f1ff',
    '#fdd4ff',
    '#6a2499',
    '#c7ffdf',
    '#07dfdf',
    '#0dddaa',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

export default generatorColor;
