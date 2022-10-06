// 1.

class Cat{
    constructor(nameParam, breedParam, ageParam, friendlyParam) {
    this.Name = nameParam;
    this.Breed = breedParam;
    this.Age = ageParam;
    this.Friendly = friendlyParam;
    }
    sleeping(){
        this.isSleep = true;
        console.log(this.Name + " is sleeping.")
    }
    walking(){
        this.isWalking = false;
        console.log(this.Name + " is not walking.")
    }
    eating(){
        this.isEating = true;
        console.log(`${this.Name} is not eating.`)
    }
}

let speedy = new Cat("Speedy", "American Bobtail", 8, false)
let msKitty = new Cat("Ms.Kitty", "Siamese", 15, true)
// Print to console below
console.log( speedy, msKitty)

speedy.sleeping();
speedy.walking();
speedy.eating();
msKitty.sleeping();
msKitty.walking();
msKitty.eating();




// 2.

class Pirate{
    constructor(countryParam, pirateParam, sloganParam, ){
        this.Country = countryParam;
        this.Pirate = pirateParam;
        this.Slogan = sloganParam;
    }
    sail(){
        this.isSailing = true;
        console.log("Ship is sailing!")
    }
    scream(){
        this.isScreaming = true;
        console.log(this.Slogan.toUpperCase())
    }
    armmed(){
        this.isArmmed = true;
        console.log("ARM THE CANNONS! IT'S WAR!")
    }
}
let jollyRoger = [new Pirate("N/A, born on ship", "Jack Sparrow", "Not all treasure is silver and gold, mate."), new Pirate("Canada", "Serjay Parks", "Shiver me timbers"), new Pirate("USA", "Christina Takara", "There's no place like Texas.")];
let blackPearl = [new Pirate("Scotland", "Pete Blackbeard", "Where's my booty?"), new Pirate("Mexico", "Big Jones", "ARRRRRGGG!"), new Pirate("Jamaica", "Bill Bones", "Walk the plank!")];

function manifest(ship){
    ship.forEach((crew) => {
        console.log(crew);
    })
}

// Print to console below
manifest(jollyRoger);
manifest(blackPearl);

jollyRoger[0].sail()
blackPearl[0].armmed()
jollyRoger[1].scream()