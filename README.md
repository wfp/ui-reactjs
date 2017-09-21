# WSS

## How to use?
- Run `gulp serve` to preview and watch for changes
- Run `bower install --save <package>` to install frontend dependencies
- Run `gulp serve:test` to run the tests in the browser
- Run `gulp` to build the webapp for production
- Run `gulp serve:dist` to preview the production build

## Library development
[comment]: <> ( npm link doesnt work properly with webpack. Common modules between the 
library and the application are resolved twice. Looking for solutions...
- Run `npm run build`
- Run `sudo npm link`
- Run `cd demo && npm link wfp-wss-ui-react && npm run build`
- Run `python manage.py runserver`
)
###Setup
- Run `npm install`
- Run `cd demo`
- Run `npm install`

###Development

Generates **wfp-wss-ui-react-a.b.c.tgz** package in the project directory. Installs the locally generated library package into project.\
\
In the project directory:
- Run `sh build.sh` 
- Run `python manage.py runserver`



## Documentation
WFP UI documentation can be found here: [UI-DOC](http://cdn.wfp.org/guides/ui/v0.14.0).
