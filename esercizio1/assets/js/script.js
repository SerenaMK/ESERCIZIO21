class Person {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }

    confrontoEta(that) {
        if(this.age > that.age) {
            return `${this.name} è più vecchi* di ${that.name}`;
        } else if (this.age < that.age) {
            return `${this.name} è più giovane di ${that.name}`
        } else if (this.age == that.age) {
            return `${this.name} e ${that.name} hanno la stessa età`
        }
    };
};

const p1 = new Person("Serena", 27);
const p2 = new Person("Elena", 58);
const p3 = new Person("Pippo", 27);


// STAMPA ETA'

document.getElementById("lista1").innerHTML = `${p1.name}: <b>${p1.age}</b> anni`;
document.getElementById("lista2").innerHTML = `${p2.name}: <b>${p2.age}</b> anni`;
document.getElementById("lista3").innerHTML = `${p3.name}: <b>${p3.age}</b> anni`;

// STAMPA CONFRONTO

document.getElementById("conf1").innerHTML = p1.confrontoEta(p2);
document.getElementById("conf2").innerHTML = p2.confrontoEta(p1);

document.getElementById("conf3").innerHTML = p1.confrontoEta(p3);
document.getElementById("conf4").innerHTML = p3.confrontoEta(p1);

document.getElementById("conf5").innerHTML = p2.confrontoEta(p3);
document.getElementById("conf6").innerHTML = p3.confrontoEta(p2);