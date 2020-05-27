var player = {
  passwords: 10,
  exploits: 0,
  money: 0,
  phishing: [],
  hacking: [],
  botnet: [],
  lastUpdate: Date.now()
}

const firstPhishing = {
  tier: 0,
  cost: 10,
  mult: 1,
  amount: 0,
  bought: 0,
  name: "Facebook phishing campaign"
}

const firstHacking = {
  tier: 0,
  cost: 100,
  mult: 1,
  amount: 0,
  bought: 0,
  name: "Trojan"
}

player.phishing.push(new Generator(firstPhishing));
player.hacking.push(new Generator(firstHacking));