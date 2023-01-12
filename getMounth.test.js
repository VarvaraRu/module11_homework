const getMounth = require("./getMounth"); 

describe ("tests for getMounth function", () => {
    const list = {
        1 : "January",
        2 : "February",
        3 : "March", 
        4 : "April",
        5 : "May",
        6 : "June",
        7 : "July",
        8 : "August",
        9 : "September",
        10 : "October",
        11 : "November",
        12 : "December",
    }; 

//Тест на корректность выведенных данных
    it ("should show the correct mounth depending on the number", () => {
        for (let i in list) {
                expect(getMounth(+i)).toBe(list[i]);
            };
    }), 

// Тет с конкретным числом и месяцем
    it ("should show January if we put number 1", () => {
            expect(getMounth(1)).toBe("January");
    }), 
    
//Корнер-кейс если вводится число выше 12, ниже 1 или не вводится ничего 
    it ("should show error message if the number depass limits", () => {
        expect(getMounth(13)).toBe("invalid data, please try again")
    }),

//Заведомо ошибочный тест (видела в интернете, что это хорошая практика проверять подобные случаи. У меня слишком легкая функция, но все равно захотела ее добавить)
    it ("should NOT opperate corretly because of the wrong information", () => {
        expect(getMounth(1)).toBe("July")
    });
}); 
