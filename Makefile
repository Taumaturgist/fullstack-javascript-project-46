gh:
	node bin/gendiff.js -h
gv:
	node bin/gendiff.js -V
gff:
	node bin/gendiff.js file1.json file2.json
gff2:
	node bin/gendiff.js file1.json misc/file2.json
gff3:
	node bin/gendiff.js file1.json /mnt/c/tau/git/hexlet/js/file2.json
gyaml:
	node bin/gendiff.js file1.yaml file2.yaml
gyml:
	node bin/gendiff.js file1.yml file2.yml
gjy:
	node bin/gendiff.js file1.json file2.yaml
init-jest:
	npm i --save-dev jest
test-all:
	NODE_OPTIONS=--experimental-vm-modules npx jest
install:
	npm ci
lint:
	npx eslint .
lint-fix:
	npx eslint --fix .
publish:
	npm publish --dry-run