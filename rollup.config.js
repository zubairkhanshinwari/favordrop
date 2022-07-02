export default {
    input: './cypress/integration/TestSuit/testSuit.js',
    output: {
        file: './build/bundle.min.js',
        format: 'iife',
        name: 'bundle'
    }
}