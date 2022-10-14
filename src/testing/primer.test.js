const suma = (a, b) => {
  if (typeof a === "string" || typeof b === "string")
    throw new Error("Error, a y b deberían ser números");
  return a + b;
};

test("La suma de 5 y 3 es 8", () => {
  const total = suma(5, 3);
  // console.log(total)

  expect(total).toBe(8);
  expect(total).toBeGreaterThan(0);
  expect(total === 8).toBeTruthy();
});

test("Si le paso un string, debería dar un error", () => {
//   expect(suma("5", 3)).toBeInstanceOf(Error);
});

test("Lanzo la suma y se ejecuta una vez", () => {
    const suma = jest.fn()

    const total = suma(1, 3)

    expect(suma).toBeCalledTimes(1)
})
