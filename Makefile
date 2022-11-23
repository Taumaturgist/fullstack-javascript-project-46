gejj:
	node bin/gendiff.js __fixtures__/testEmbJSON1.json __fixtures__/testEmbJSON2.json
geyy:
	node bin/gendiff.js __fixtures__/testEmbYML1.yml __fixtures__/testEmbYML2.yml
plain:
	node bin/gendiff.js __fixtures__/testEmbYML1.yml __fixtures__/testEmbYML2.yml -f plain
json:
	node bin/gendiff.js __fixtures__/testEmbJSON1.json __fixtures__/testEmbYML2.yml -f json
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
rec:
	asciinema rec