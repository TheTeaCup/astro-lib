export default {
    input: 'src/main.js',
    output: {
      file: 'dist/bundle.js',
      format: 'umd',
      name: 'astro_lib',
      globals: {
          'moment': 'moment'
      },
      external: [ 'moment' ]
    }
  };