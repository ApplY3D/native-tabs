# native-tabs

# Install
Connect .js file to your html file or copy function to your main js file

# Description
Function receive 3 required arguments and 3 optional arguments
```js
function tabs(wrapNavigationSelector, tabsBtnSelector, tabsContentSelector, showClassName, hideClassName, activeClassName) {..}
```

# Usage

for using this script, you may pass:
1. Wrapper of tabs selector,
2. Tabs selector,
3. Content for tabs selector,
```js
tabs('.wrapperClass', '.tabsBtnClass', '.tabsContentClass')
```

and declare 'hide' and 'show' class:
```js
tabs('.wrapperClass', '.tabsBtnClass', '.tabsContentClass', 'showClassName', 'hideClassName')
```

and declare 'active' tab class:
```js
tabs('.wrapperClass', '.tabsBtnClass', '.tabsContentClass', 'showClassName', 'hideClassName', 'activeClassName')
```
