# native-tabs

# Install
Connect .js file to your html file or copy function to your main js file

# Description
Function receive 3 required arguments and 3 optional arguments
```js
function tabs(wrapNavigationSelector, tabsBtnSelector, tabsContentSelector, showClassName, hideClassName, activeClassName) {..}
```
**`wrapNavigationSelector`** **(string)** - querySelector on parent of tabs    
**`tabsBtnSelector`** **(string)** - querySelector on tab button    
**`tabsContentSelector`** **(string)** - querySelector on tab content    

`showClassName` **(string)** - class for showable content    
`hideClassName` **(string)** - class for hidden content    
`activeClassName` **(string)** - class for active tab
# Usage
```js
tabs('.wrapperClass', '.tabsBtnClass', '.tabsContentClass')
```

also you can declare 'hide' and 'show' class name:
```js
tabs('.wrapperClass', '.tabsBtnClass', '.tabsContentClass', 'showClassName', 'hideClassName')
```

also you can declare 'active' tab class name:
```js
tabs('.wrapperClass', '.tabsBtnClass', '.tabsContentClass', 'showClassName', 'hideClassName', 'activeClassName')
```
for skip some argument, use undefined:
```js
tabs('.wrapperClass', '.tabsBtnClass', '.tabsContentClass', undefined, undefined, 'activeClassName')
```
# Structure of HTML
```html
<div class="wrapper">
    <div class="tab first"></div>
    <div class="tab second"></div>
    <div class="tab third"></div>
</div>
<div class="content first"></div>
<div class="content second"></div>
<div class="content third"></div>
```
