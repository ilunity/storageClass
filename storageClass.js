class Storage {

    constructor(key, {value = 'default', storageType = localStorage}) {
        this.key = key;
        this.storageType = storageType;
        this.set(value);
    }

    set(value) {
        this.storageType.setItem(this.key, JSON.stringify(value));
    }

    get() {
        return JSON.parse(this.storageType.getItem(this.key));
    }

    clear() {
        this.storageType.removeItem(this.key);
    }

    isEmpty() {
        return this.storageType.getItem(this.key) === null;
    }
}



let user = {
    name: 'Вася',
    job: 'Пограммист'
}

const names = new Storage('names', {value: user});


alert(names.get().job);

names.set('just a string');
alert(names.get());

names.clear()
alert(names.isEmpty());
alert(names.get());