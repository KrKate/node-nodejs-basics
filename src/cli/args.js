function parseArgs() {
    const args = process.argv.slice(2);
    for (let i = 0; i < args.length; i += 2) {
      const propName = args[i].replace('--', '');
      const value = args[i + 1];
      console.log(`${propName} is ${value}`);
    }
  }
parseArgs();
//node args.js --some-arg value1 --other 1337 --arg2 42