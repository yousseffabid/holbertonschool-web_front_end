class studentHogwarts {
  constructor() {
    this.privateScore = 0;
    this.name = null;
  }

  #changeScoreBy(points) {
    this.privateScore = this.privateScore + points;
  }

  setName(newName) {
    this.name = newName;
  }

  rewardStudent() {
    this.#changeScoreBy(1);
  }

  penalizeStudent() {
    this.#changeScoreBy(-1);
  }

  getScore() {
    let returnstr = `${this.name}: ${this.privateScore}`;
    return returnstr;
  }
}

let harry = new studentHogwarts();
harry.setName("Harry");
for (let i = 0; i < 4; i++) {
  harry.rewardStudent();
}
console.log(harry.getScore());

let draco = new studentHogwarts();
draco.setName("Draco");
draco.rewardStudent();
for (let i = 0; i < 3; i++) {
  draco.penalizeStudent();
}
console.log(draco.getScore());
