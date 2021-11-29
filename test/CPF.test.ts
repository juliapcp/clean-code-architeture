import CPF from "../src/CPF";

test("Deve retornar falso", function () {
    expect(new CPF("111.111.111-11").isValido()).toBeFalsy();
});
test("Deve retornar falso", function () {
    expect(new CPF("11111111111").isValido()).toBeFalsy();
});

test("Deve retornar falso", function () {
    expect(new CPF("123.456.789-99").isValido()).toBeFalsy();
});
test("Deve retornar falso", function () {
    expect(new CPF("12345678999").isValido()).toBeFalsy();
});

test("Deve retornar verdadeiro", function () {
    expect(new CPF("935.411.347-80").isValido()).toBeTruthy();
});

test("Deve retornar verdadeiro", function () {
    expect(new CPF("93541134780").isValido()).toBeTruthy();
});
test("Deve retornar falso, é um CNPJ", function () {
    expect(new CPF("60409075000152").isValido()).toBeFalsy();
});
