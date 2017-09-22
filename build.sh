npm run build
npm pack
var="$(find . -name 'wfp-ui-reactjs-*.tgz')"
cd demo
npm install ../$var --no-save
npm run build
