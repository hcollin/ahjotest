
import resolve from 'rollup-plugin-node-resolve';

// rollup.config.js
export default {
    input: 'src/AhjoServer.js',
    output: {
        file: 'lib/AhjoServer.js',
        name: 'ahjoserver',
        format: 'cjs',
    },
    plugins: [resolve({
        // pass custom options to the resolve plugin
        customResolveOptions: {
          moduleDirectory: 'node_modules'
        }
      })],
    external: [ 'express', 'mobx-state-tree', 'mobx' ] // <-- suppresses the warning
  };