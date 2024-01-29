function parseEnv() {
  Object.keys(process.env).forEach((key) => {
    if (key.startsWith('RSS_')) {
      console.log(`${key}=${process.env[key]}`);
    }
  });
}

parseEnv();
//npx cross-env SOME=any RSS_foo=bar RSS_bar=baz node src/cli/env.js