class Person{
    constructor(name, city, mobileNo)
    {
        this.name = name;
        this.city = city;
        this.mobileNo = mobileNo
    }

    walking()
    {
        return ` ${this.name} is walking...`
    }

    living()
    {
        return ` ${this.name} lives in ${this.city}...`
    }

}

const Pavithran = new Person("Pavithran", "Erode", "890909072")
console.log(Pavithran.walking())
console.log(Pavithran.living())