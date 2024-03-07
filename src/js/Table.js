
  const obj = { name: "мечник", health: 10, level: 2, attack: 80, defence: 40 };


export default function orderByProps(object, arr) {
    // массив, куда будем складывать сортированные значения
    const result = [];

    // пройдемся и соберем ключ: значение
    for (const keys in object) {
        if (Object.prototype.hasOwnProperty.call(object, keys) & !arr.includes(keys)) {
            result.push ( {key: keys, value: object[keys]} );
            
        }
    }

    // отсортируем значения

    result.sort((a, b) => {
        if (a.key > b.key) {
            return 1;
        } else {
            return -1;
        }

    });

    // пройдемся по массиву и попереставляем значения с помощью unshift
    for (let i = array.length - 1; i >= 0; i -= 1) {
        if(Object.prototype.hasOwnProperty.call(object, arr[i])) {
            result.unshift({
                key: arr[i],
                value: Object[arr[i]],
            })
        }
    }
    return result;
}

console.log(orderByProps(obj, ["name", "level"]));
