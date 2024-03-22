export default function getDescription(characterObj) {
  const result = [];
  const { special } = characterObj;
  if (!special) {
    return result;
  }

  for (let i = 0; i < special.length; i++) {
    if (!special[i].description) {
      special.description = "Описание недоступно";
    }
    result.push({
      id: special[i].id,
      name: special[i].name,
      icon: special[i].icon,
      description: special[i].description,
    });
  }
  return result;
}

const character = {
  name: "Лучник",
  type: "Bowman",
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: "Двойной выстрел",
      icon: "http://...",
      description: "Двойной выстрел наносит двойной урон",
    },
    {
      id: 9,
      name: "Нокаутирующий удар",
      icon: "http://...",
      // <- обратите внимание, описание "засекречено"
    },
  ],
};

const hero1 = {
    name: "Лучник",
    type: "Bowman",
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: []
};

const hero2 = {
    name: "Лучник",
    type: "Bowman",
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
};

console.log(character);
console.log(hero1);
console.log(hero2);