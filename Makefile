gh:
	node bin/gendiff.js -h
gv:
	node bin/gendiff.js -V
install:
	npm ci
lint:
	npx eslint .
lint-fix:
	npx eslint --fix .