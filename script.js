// task 1 --------------------
//Выведите массив a1 на страницу. a1 = { 3 : 'hello', 'one' : 'hi'};
func_1();
function func_1() {
    let outTask1 = document.querySelector('.out-task1'); //получим строку для вывода
    let buttonTask1 = document.querySelector('.button-task1'); //получим кнопку
    let a1 = { //создадим объект
        3: 'hello',
        'one': 'hi'
    };

    buttonTask1.onclick = () => { //по клику
        for (key in a1) { //запустим цикл
            outTask1.innerHTML += `${key} : ${a1[key]} <br>`; //выводим ключ и соответствующий элемент
        }
    }
}

// task 2 --------------------
//Выведите на страницу элементы из масиива a2 у которых символов больше 4. let a2 = { 3 : 'hello', 'one' : 'hi', 'testt' : 'vodoley', 'ivan' : 'ivanov'}
func_2();
function func_2() {
    let outTask2 = document.querySelector('.out-task2'); //получим строку для вывода
    let buttonTask2 = document.querySelector('.button-task2'); //получим кнопку
    let a2 = { //создадим объект
        3: 'hello',
        'one': 'hi',
        'testt': 'vodoley',
        'ivan': 'ivanov'
    };

    buttonTask2.onclick = () => { //по клику
        for (key in a2) { //запустим цикл
            if (a2[key].length > 4) { //проверим элементы на длину более 4   
                outTask2.innerHTML += `${key} : ${a2[key]} <br>`; //выводим ключ и соответствующий элемент    
            }
        }
    }
}

// task 3 --------------------
//Выведите на страницу элементы из масиива a3 у которых ключ содержит больше 4 символов. let a3 = { 3 : 'hello', 'one' : 'hi', 'testt' : 'vodoley', 'ivan' : 'ivanov'};
func_3();
function func_3() {
    let outTask3 = document.querySelector('.out-task3'); //получим строку для вывода
    let buttonTask3 = document.querySelector('.button-task3'); //получим кнопку
    let a3 = {
        3: 'hello',
        'one': 'hi',
        'testt': 'vodoley',
        'ivan': 'ivanov'
    };

    buttonTask3.onclick = () => { //по клику
        for (key in a3) { //запустим цикл
            if (key.length > 4) { //проверим элементы на длину более 4   
                outTask3.innerHTML += `${key} : ${a3[key]} <br>`; //выводим ключ и соответствующий элемент    
            }
        }
    }
}

// task 4 --------------------
//Выведите на страницу элементы из масиива a4 у которых значение - число. let a4 = { 3 : 'hello', 'one' :
//4, 'testt': 'vodoley', 'ivan': 6;
func_4();
function func_4() {
    let outTask4 = document.querySelector('.out-task4'); //получим строку для вывода
    let buttonTask4 = document.querySelector('.button-task4'); //получим кнопку
    let a4 = {
        3: 'hello',
        'one': 4,
        'testt': 'vodoley',
        'ivan': 6
    };

    buttonTask4.onclick = () => { //по клику
        for (key in a4) { //запустим цикл
            if (typeof a4[key] == 'number') { //проверим элементы на число  
                outTask4.innerHTML += `${key} : ${a4[key]} <br>`; //выводим ключ и соответствующий элемент    
            }
        }
    }
}
//
//// task 5 --------------------
////Выведите на страницу элементы из масиива a4 у которых значение - число. let a5 = {a : 7, z : 4, 45 : 12, f : 6};
func_5();
function func_5() {
    let outTask5 = document.querySelector('.out-task5'); //получим строку для вывода
    let buttonTask5 = document.querySelector('.button-task5'); //получим кнопку
    let a5 = {
        a: 7,
        z: 4,
        45: 12,
        f: 6
    };

    buttonTask5.onclick = () => { //по клику
        let summ = 0;
        for (key in a5) { //запустим цикл
            if (typeof a5[key] == 'number') { //проверим элементы на число   
                summ = summ + a5[key]; //будем прибавлять в переменную summ числа из массива
            }
        }
        outTask5.innerHTML += summ; //выводим сумму   
    }
}

//// task 6 --------------------
////Создайте ассоциативный массив a6, который содержит ключи name, age, sex, height и значения любого персонажа. Выведите массив на страницу.
func_6();
function func_6() {
    let outTask6 = document.querySelector('.out-task6'); //получим строку для вывода
    let buttonTask6 = document.querySelector('.button-task6'); //получим кнопку
    let a6 = {
        'name': 'John',
        'age': 25,
        'sex': 'man',
        'height': 180,
        'health': 90
    };

    buttonTask6.onclick = () => { //по клику
        for (key in a6) { //запустим цикл
            outTask6.innerHTML += `${key} : ${a6[key]} <br>`; //выводим ключ и соответствующий элемент
        }
    }
}

// task 7 --------------------
//Создайте ассоциативный массив a7, два input (u7-key__input, u7-value__input) и кнопку. При нажатии кнопки добавляйте в массив новое значение с соответствующим ключем. Выводите массив на страницу.
func_7();
function func_7() {
    let keyInput = document.querySelector('.u7-key__input');
    let valueInput = document.querySelector('.u7-value__input');
    let outTask7 = document.querySelector('.out-task7'); //получим строку для вывода
    let buttonTask7 = document.querySelector('.button-task7'); //получим кнопку
    let a7 = {};

    buttonTask7.onclick = () => { //по клику
        outTask7.innerHTML = '';
        a7[keyInput.value] = valueInput.value;
        
        for (key in a7) { //запустим цикл
            outTask7.innerHTML += `${key} : ${a7[key]} <br>`; //выводим ключ и соответствующий элемент
        }
    }
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    