// task 1 --------------------
//Выведите массив a1 на страницу. a1 = { 3 : 'hello', 'one' : 'hi'};
func_1();
function func_1() {
    let outTask1 = document.querySelector('.out-task1');        //получим строку для вывода
    let buttonTask1 = document.querySelector('.button-task1');  //получим кнопку
    let a1 = {                                                  //создадим объект
        3: 'hello',
        'one': 'hi'
    };

    buttonTask1.onclick = () => {                               //по клику
        for (key in a1) {                                       //запустим цикл
            outTask1.innerHTML += `${key} : ${a1[key]} <br>`;   //выводим ключ и соответствующий элемент
        }
    }
}

// task 2 --------------------
//Выведите на страницу элементы из масиива a2 у которых символов больше 4. let a2 = { 3 : 'hello', 'one' : 'hi', 'testt' : 'vodoley', 'ivan' : 'ivanov'}
func_2();
function func_2() {
    let outTask2 = document.querySelector('.out-task2');        //получим строку для вывода
    let buttonTask2 = document.querySelector('.button-task2');  //получим кнопку
    let a2 = {                                                  //создадим объект
        3: 'hello',
        'one': 'hi',
        'testt': 'vodoley',
        'ivan': 'ivanov'
    };

    buttonTask2.onclick = () => {                               //по клику
        for (key in a2) {                                       //запустим цикл
            if (a2[key].length > 4) {                           //проверим элементы на длину более 4   
                outTask2.innerHTML += `${key} : ${a2[key]} <br>`; //выводим ключ и соответствующий элемент    
            }
        }
    }
}

// task 3 --------------------
//Выведите на страницу элементы из масиива a3 у которых ключ содержит больше 4 символов. let a3 = { 3 : 'hello', 'one' : 'hi', 'testt' : 'vodoley', 'ivan' : 'ivanov'};
func_3();
function func_3() {
    let outTask3 = document.querySelector('.out-task3');            //получим строку для вывода
    let buttonTask3 = document.querySelector('.button-task3');      //получим кнопку
    let a3 = {
        3: 'hello',
        'one': 'hi',
        'testt': 'vodoley',
        'ivan': 'ivanov'
    };

    buttonTask3.onclick = () => {                                   //по клику
        for (key in a3) {                                           //запустим цикл
            if (key.length > 4) {                                   //проверим элементы на длину более 4   
                outTask3.innerHTML += `${key} : ${a3[key]} <br>`;   //выводим ключ и соответствующий элемент    
            }
        }
    }
}

// task 4 --------------------
//Выведите на страницу элементы из масиива a4 у которых значение - число. let a4 = { 3 : 'hello', 'one' :
//4, 'testt': 'vodoley', 'ivan': 6;
func_4();
function func_4() {
    let outTask4 = document.querySelector('.out-task4');            //получим строку для вывода
    let buttonTask4 = document.querySelector('.button-task4');      //получим кнопку
    let a4 = {
        3: 'hello',
        'one': 4,
        'testt': 'vodoley',
        'ivan': 6
    };

    buttonTask4.onclick = () => {                                   //по клику
        for (key in a4) {                                           //запустим цикл
            if (typeof a4[key] == 'number') {                       //проверим элементы на число  
                outTask4.innerHTML += `${key} : ${a4[key]} <br>`;   //выводим ключ и соответствующий элемент    
            }
        }
    }
}
//
//// task 5 --------------------
////Выведите на страницу элементы из масиива a4 у которых значение - число. let a5 = {a : 7, z : 4, 45 : 12, f : 6};
func_5();
function func_5() {
    let outTask5 = document.querySelector('.out-task5');            //получим строку для вывода
    let buttonTask5 = document.querySelector('.button-task5');      //получим кнопку
    let a5 = {
        a: 7,
        z: 4,
        45: 12,
        f: 6
    };

    buttonTask5.onclick = () => {                                   //по клику
        let summ = 0;
        for (key in a5) {                                           //запустим цикл
            if (typeof a5[key] == 'number') {                       //проверим элементы на число   
                summ = summ + a5[key];                              //будем прибавлять в переменную summ числа из массива
            }
        }
        outTask5.innerHTML += summ;                                 //выводим сумму   
    }
}

//// task 6 --------------------
////Создайте ассоциативный массив a6, который содержит ключи name, age, sex, height и значения любого персонажа. Выведите массив на страницу.
func_6();
function func_6() {
    let outTask6 = document.querySelector('.out-task6');            //получим строку для вывода
    let buttonTask6 = document.querySelector('.button-task6');      //получим кнопку
    let a6 = {
        'name': 'John',
        'age': 25,
        'sex': 'man',
        'height': 180,
        'health': 90
    };

    buttonTask6.onclick = () => {                                   //по клику
        for (key in a6) {                                           //запустим цикл
            outTask6.innerHTML += `${key} : ${a6[key]} <br>`;       //выводим ключ и соответствующий элемент
        }
    }
}

// task 7 --------------------
//Создайте ассоциативный массив a7, два input (u7-key__input, u7-value__input) и кнопку. При нажатии кнопки добавляйте в массив новое значение с соответствующим ключем. Выводите массив на страницу.

//Глобальный ассоциативный массив для task 7 - 10
    let arrGlobal = {};                                                    //пустой объект
    let outTaskGlobal = document.querySelectorAll('.out-taskGlobal');            //получим строку для вывода

func_7();
function func_7() {
    let keyInput = document.querySelector('.u7-key__input');        //получим поле для ввода ключа
    let valueInput = document.querySelector('.u7-value__input');    //получим поле для ввода значения
    let buttonTask7 = document.querySelector('.button-task7');      //получим кнопку

    buttonTask7.onclick = () => {                                   //по клику
        arrGlobal[keyInput.value] = valueInput.value;               //создадим ячейку массива
        outArrGlobal ();                                            //запустим ф.цию вывода на экран массива
        keyInput.value = '';                                        //очистим поле
        valueInput.value = '';                                      //очистим поле
    }
}
   
// task 8 --------------------
//Добавьте к предыдущей задачи input.u8-key__input и кнопку. При нажатии кнопки - удаляйте значение с соответствующим ключем. Выводите массив на страницу.
func_8();
function func_8() {
    let buttonTask8 = document.querySelector('.button-task8');      //получим кнопку 
    let keyDelete = document.querySelector(".u8-key__input");       //получим поле для удаления ключа

    buttonTask8.onclick = () => {                                   //по клику
        delete arrGlobal[keyDelete.value];                          //удалим ячейку по заданному ключу
        
        outArrGlobal ();                                            //запустим ф.цию вывода на экран массива
        keyDelete.value = '';                                       //очистим поле
    }
}
   
// task 9 --------------------
//Добавьте к предыдущей задачи input.u9-delete-value__input и кнопку. При нажатии кнопки - удаляйте записи с соответствующим значением. Выводите массив на страницу.
func_9();
function func_9() {
    let buttonTask9 = document.querySelector('.button-task9');      //получим кнопку 
    let valueDelete = document.querySelector(".u9-delete-value__input");       //получим поле для удаления ключа

    buttonTask9.onclick = () => {                                   //по клику
        for(key in arrGlobal){
            if(valueDelete.value == arrGlobal[key]){
                delete arrGlobal[key];                              //удалим ячейку по заданному ключу
            }
        }
        
        outArrGlobal ();                                            //запустим ф.цию вывода на экран массива   
        valueDelete.value = '';                                     //очистим поле
    }
}
   
// task 10 --------------------
//Добавьте к предыдущей задачи input.u10-has-key__input и кнопку. При нажатии кнопки - возвращайте true если такой ключ есть в массиве, и false если нет.
func_10();
function func_10() {
    let buttonTask10 = document.querySelector('.button-task10');      //получим кнопку 
    let keySearch = document.querySelector(".u10-has-key__input");       //получим поле для удаления ключа
    let resultSearch = document.querySelector('.result-search');    //вывод результата поиска

    buttonTask10.onclick = () => {                                   //по клику
        for(key in arrGlobal){                                      //в цикле
            if(keySearch.value == key){                             //перебираем ключи и сравниваем с введённым 
                resultSearch.innerHTML = true;                      //нашли совпадение - true
            }else{
                resultSearch.innerHTML = false;                     //совпадения нет - false
            }
        }
        
        outArrGlobal ();                                        //запустим ф.цию вывода на экран массива
        keySearch.value = '';                                 //очистим поле
    }
}

//Ф.ция вывода на экран массива ------------------------------------------------------------------------------------------------
function outArrGlobal (){
    for(let i = 0; i < outTaskGlobal.length; i++){
        outTaskGlobal[i].innerHTML = '';
        for (key in arrGlobal) {                                    //запустим цикл
            outTaskGlobal[i].innerHTML += `${key} : ${arrGlobal[key]} <br>`;//выводим ключ и соответствующий элемент
        }
    }
}
//---------------------------------------------------------------------------------------------------------------------------   

// task 11 --------------------
//Глобальная переменная киевского метро
    let metroPoliten = {
        "red":['Академгородок', 'Житомирская', 'Святошин', 'Нивки', 'Берестейская', 'Шулявская', 'Политехнический институт',            'Вокзальная', 'Университет', 'Театральная', 'Крещатик', 'Арсенальная', 'Днепр', 'Гидропарк', 'Левобережная',            'Дарница', 'Черниговская', 'Лесная'],
        "green":['Виноградарь', 'Мостицкая', 'Сырец', 'Дорогожичи', 'Лукьяновская', 'Львовская брама', 'Золотые ворота', 'Дворец          спорта', 'Кловская', 'Печерская', 'Дружбы народов', 'Выдубичи', 'Теличка', 'Славутич', 'Осокорки', 'Позняки',           'Харьковская', 'Вырлица', 'Бориспольская', 'Красный хутор'],
        "blue":['Героев Днепра', 'Минская', 'Оболонь', 'Петровка', 'Тараса Шевченко', 'Контрактовая площадь', 'Почтовая                 площадь', 'Майдан Незалежности', 'Площадь Льва Толстого', 'Олимпийская', 'Дворец «Украина»', 'Лыбедская',               'Демиевская', 'Голосеевская', 'Васильковская', 'Выставочный центр', 'Ипподром', 'Теремки', 'Одесская']
    };
//Создайте массив, который описывает метро киевского метрополитена, выведите его на страницу.
func_11();                                                      //запуск ф.ции
function func_11(){                                                         
    let buttonMetro = document.querySelector('.button-task11'); //получим кнопку
    let outMetro = document.querySelector('.out-task11');       //строка для вывода
    
    buttonMetro.onclick = () => {                                   //по клику
        for(key in metroPoliten){                                   //в цикле
        outMetro.innerHTML += `${key} : ${metroPoliten[key]} <br>`; //выводим ветки метро и станции
        }
    }
}

// task 12 --------------------
//Добавьте к предыдущей задаче select.u12-branch и кнопку. Пользователь может выбрать цвет ветки и нажать кнопку, после чего на страницу будут выведены только станции данной ветки.
func_12();                                                              //запуск ф.ции
function func_12(){
    let selectOption = document.querySelector('#metro-politen');        //получим тег select
    let outBranchColor = document.querySelector('.out-task12');         //строка для вывода
    let buttonBranchColor = document.querySelector('.button-task12');   //получим кнопку
    let selectColor = document.querySelectorAll('option');              //получим все значения тега option
    
    buttonBranchColor.onclick = () => {                                 //по клику
        let key = selectOption.value;                                   //присвоим key значение select.value
        
        for(let i = 0; i < selectColor.length; i++){                    //определим через data-attribut`ы цвет ветки
            if(selectColor[i].selected){                                //определяем выбранную ветку
            let color = selectColor[i].getAttribute('data-color');
            outBranchColor.innerHTML = `${color} :&nbsp`;               //вывод ветки
            }    
        }
        outBranchColor.innerHTML += metroPoliten[key];                  //вывод станций ветки
    }
}























    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    