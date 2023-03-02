import cac from 'cac';
import path from 'path';
import { build } from './build';

const version = require('../../package.json').version;

const cli = cac('island').version(version).help();

cli
  .command('[root]', 'start dev server')
  .alias('dev')
  .action(async (root: string) => {
    const createServer = async () => {
      const { createDevServer } = await import('./dev.js');
      const server = await createDevServer(root, async () => {
        await server.close();
        await createServer();
      });
      await server.listen();
      server.printUrls();
    };
    await createServer();
  });

cli
  .command('build [root]', 'build for production')
  .action(async (root: string) => {
    console.log('build', root);
    try {
      root = path.resolve(root);
      await build(root);
    } catch (e) {
      console.log(e);
    }
  });

cli.parse();
