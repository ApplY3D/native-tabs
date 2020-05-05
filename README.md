# native-tabs

# Install
Connect .js file to your html file or copy function to your main js file

# Description
Function required 3 arguments and optional 2 arguments
```js
function tabs(wrapNavigationSelector, tabsBtnSelector, tabsContentSelector, showClass, hideClass) {..}
```
# Usage

for using this script, you may pass:
1. Wrapper of tabs selector,
2. Tabs selector,
3. Content for tabs selector,
```js
tabs('.wrapperClass', '.tabsBtnClass', '.tabsContentClass')
```

and declare hide/show class:
```js
tabs('.wrapperClass', '.tabsBtnClass', '.tabsContentClass', 'showClassName', 'hideClassName')
```
