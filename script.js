// task 1 --------------------
//Выведите массив a1 на страницу. a1 = { 3 : 'hello', 'one' : 'hi'};
func_1();
function func_1(){
    let outTask1 = document.querySelector('.out-task1');        //получим строку для вывода
    let buttonTask1 = document.querySelector('.button-task1');  //получим кнопку
    let a1 = {                                                  //создадим объект
        3 : 'hello', 
        'one' : 'hi'
    };
    
    buttonTask1.onclick = () => {                               //по клику
        for(key in a1){                                         //запустим цикл
            outTask1.innerHTML += `${key} : ${a1[key]} <br>`;   //выводим ключ и соответствующий элемент
        }
    }
}

// task 2 --------------------
//Выведите на страницу элементы из масиива a2 у которых символов больше 4. let a2 = { 3 : 'hello', 'one' : 'hi', 'testt' : 'vodoley', 'ivan' : 'ivanov'}
func_2();
function func_2(){
    let outTask2 = document.querySelector('.out-task2');        //получим строку для вывода
    let buttonTask2 = document.querySelector('.button-task2');  //получим кнопку
    let a2 = {                                                  //создадим объект
        3 : 'hello', 
        'one' : 'hi', 
        'testt' : 'vodoley', 
        'ivan' : 'ivanov'};
    
    buttonTask2.onclick = () => {                                //по клику
        for(key in a2){                                          //запустим цикл
            if(a2[key].length > 4){                              //проверим элементы на длину более 4   
                outTask2.innerHTML += `${key} : ${a2[key]} <br>`;//выводим ключ и соответствующий элемент    
            }
        }
    }
}

// task ,3 --------------------
//Выведите на страницу элементы из масиива a3 у которых ключ содержит больше 4 символов. let a3 = { 3 : 'hello', 'one' : 'hi', 'testt' : 'vodoley', 'ivan' : 'ivanov'};
func_3();
function func_3(){
    let outTask3 = document.querySelector('.out-task3');        //получим строку для вывода
    let buttonTask3 = document.querySelector('.button-task3');  //получим кнопку
    let a3 = {
        3 : 'hello',
        'one' : 'hi',
        'testt' : 'vodoley',
        'ivan' : 'ivanov'
        };
    
    buttonTask3.onclick = () => {                                //по клику
        for(key in a3){                                          //запустим цикл
            if(key.length > 4){                              //проверим элементы на длину более 4   
                outTask3.innerHTML += `${key} : ${a3[key]} <br>`;//выводим ключ и соответствующий элемент    
            }
        }
    }
}
