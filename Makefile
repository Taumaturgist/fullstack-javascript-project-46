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
install:
	npm ci
lint:
	npx eslint .
lint-fix:
	npx eslint --fix .
publish:
	npm publish --dry-run