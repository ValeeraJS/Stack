import typescript from 'rollup-plugin-typescript2';
import json from '@rollup/plugin-json';

export default {
	input: 'src/index.ts',
	plugins: [
		json(),
		typescript({
			tsconfig: './tsconfig.legacy.json'
		})
	],
	output: [
		{
			format: 'umd',
			name: 'Stack',
			file: 'build/Stack.legacy.js',
			sourceMap: true,
			indent: '\t'
		},
		{
			format: 'es',
			file: 'build/Stack.legacy.module.js',
			sourceMap: true,
			indent: '\t'
		}
	]
};
