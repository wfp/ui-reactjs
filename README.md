# WSS

## How to use?
- Run `gulp serve` to preview and watch for changes
- Run `bower install --save <package>` to install frontend dependencies
- Run `gulp serve:test` to run the tests in the browser
- Run `gulp` to build the webapp for production
- Run `gulp serve:dist` to preview the production build

## Library development

###Setup
 
1. Install Facebook Watchman: https://facebook.github.io/watchman/docs/install.html
2. Run the following:
  - `sudo npm install -g wml`
  - `npm install`
  - `wml add lib/ demo/node_modules/wfp-ui-reactjs/lib/`
  -`cp package.json demo/node_modules/wfp-ui-reactjs/`
  - `wml start`
  
  
  In another terminal 
  - `cd demo`
  - `npm install`
 
###Development

 Run:  
- `npm run build`
- `cd demo`
- `npm run build`
- `python manage.py runserver`



## Documentation
WFP UI documentation can be found here: [UI-DOC](http://cdn.wfp.org/guides/ui/v0.14.0).
