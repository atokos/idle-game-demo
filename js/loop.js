function producePrevious(generatorArray, diff) {
  for (let i = 1; i < generatorArray.length; i++) {
    let generator = generatorArray[i];
    generatorArray[i - 1].amount += generator.productionPerSecond * diff
  }
}

function gameLoop(app) {
  let diff = (Date.now() - app.player.lastUpdate) / 1000;
  app.player.passwords += app.player.phishing[0].productionPerSecond * diff;
  app.player.exploits += app.player.hacking[0].productionPerSecond * diff;
  producePrevious(app.player.phishing, diff);
  producePrevious(app.player.hacking, diff);
  producePrevious(app.player.botnet, diff);

  app.player.lastUpdate = Date.now();
}