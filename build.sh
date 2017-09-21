npm run build
npm pack
var="$(find . -name '- Run `npm run build`
-*.tgz')"
cd demo
npm install ../$var --no-save
npm run build
