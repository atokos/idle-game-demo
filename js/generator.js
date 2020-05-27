const phishing_names = ["Facebook phishing campaign", "Email  campaign", "Fake blackmail campaign"];
const hacking_names = ["Rootkit", "SQL injection", "Backdoor", "Trojan"];
const botnet_names = ["Botnet"];

class Generator {
  constructor(props) {
    this.name = props.name;
    this.cost = props.cost;
    this.mult = props.mult;
    this.amount = props.amount;
    this.bought = props.bought;
    this.tier = props.tier;
  }

  get canBuy() {
    return this.cost <= player.passwords;
  }

  get productionPerSecond() {
    let ret = this.amount * this.mult;
    if (this.tier !== 0) ret /= 5
    return ret;
  }

  buy() {
    if (!this.canBuy) return;
    
    player.passwords -= this.cost;
    this.cost *= 1 + (this.tier+1) * 0.25;
    this.amount += 1;
    this.bought += 1;

    if (this.bought % 100 == 0) this.mult *= 5;
    else if (this.bought % 25 == 0) this.mult *= 3;
  }
}

function getColumn(type) {
  switch (type) {
    case "phishing":
      return 1;
    case "hacking":
      return 2;
    case "botnet":
      return 3;
  }
}

function makeGeneratorName(tier, type) {
  switch (type) {
    case "phishing":
      return phishing_names[tier % phishing_names.length];
    case "hacking":
      return hacking_names[tier % hacking_names.length];
    case "botnet":
      return botnet_names[tier % botnet_names.length];
  }
}

function createGenerator(tier, type) {
  let col = getColumn(type);
  const generator = {
    name: makeGeneratorName(tier, type),
    cost: Math.pow(10, tier * (col + 1)),
    mult: 1,
    amount: 0,
    bought: 0,
    tier: tier
  }

  return new Generator(generator);
}