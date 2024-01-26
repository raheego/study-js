function calcDefaultValue(a = 1, b = a == 1 ? 2 : 3) {
    console.log(a, b);
}

calcDefaultValue(1); // 출력: 1, 2
calcDefaultValue(2); // 출력: 2, 3

