// Масив користувачів
const users = [
    {
        name: "Олександр",
        age: 20,
        city: "Харків",
        colors: ["червоний", "чорний"],
        isStudent: true,
        grades: [90, 85, 88, 92]
    },
    {
        name: "Ірина",
        age: 19,
        city: "Київ",
        colors: ["зелений", "жовтий"],
        isStudent: true,
        grades: [70, 75, 72, 68]
    },
    {
        name: "Іван",
        age: 22,
        city: "Львів",
        colors: ["синій", "білий"],
        isStudent: false,
        grades: [50, 55, 48, 60]
    }
];

// Функція привітання
function greet(name) {
    console.log(`Привіт, ${name}!`);
}

// Стрілкова функція середнього балу
const getAverage = (grades) => {
    let sum = 0;
    for (let g of grades) sum += g;
    return sum / grades.length;
};

// Функція визначення статусу
const getStatus = (avg) => {
    if (avg >= 90) return "Відмінно";
    else if (avg >= 75) return "Добре";
    else return "Задовільно";
};

// Функція кольорів
const getColors = (colors) => colors.join(", ");

// Стрілкові функції
const square = (x) => x * x;
const sum = (a, b) => a + b;

// 1 спосіб – for
for (let i = 0; i < users.length; i++) {
    const user = users[i];

    greet(user.name);

    const avg = getAverage(user.grades);
    console.log("Середній бал:", avg);

    console.log("Рівень:", getStatus(avg));

    console.log(`Ім'я: ${user.name}`);
    console.log(`Місто: ${user.city}`);
    console.log(`Студент: ${user.isStudent}`);

    console.log("Кольори:", getColors(user.colors));

    const needExam = avg < 60 ? "Потрібна перездача" : "Хвостів немає";
    console.log(needExam);

    console.log("------------------------");
}

// 2 спосіб – forEach
users.forEach(user => {
    console.log(`Повторний обхід: ${user.name}`);
});

// Демонстрація стрілкових функцій
console.log("Квадрат 5 =", square(5));
console.log("Сума 3 + 7 =", sum(3, 7));