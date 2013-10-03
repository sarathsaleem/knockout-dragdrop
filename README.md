# knockout-dragdrop

A drag and drop binding for Knockout.

[Click here to see an example](http://one-com.github.io/knockout-dragdrop/)

## Install

### NPM

`npm install knockout-dragdrop`

## Usage

Dragging between two lists:

```html
<h2>Drag from here</h2>
<ul data-bind="foreach: source">
    <li data-bind="text: $data, dragzone: { name: 'lists' }"></li>
</ul>

<h2>Drop here</h2>
<ul data-bind="foreach: target, dropzone: { name: 'lists', drop: drop }">
    <li data-bind="text: $data"></li>
</ul>
```

```js
var model = {
    source: ko.observableArray([
        'Declan',
        'Tessa',
        'Claire',
        'Violet',
        'Alice',
        'Mia',
        'Camille',
        'Aiden'
    ]),
    target: ko.observableArray(),
    drop: function (data, model) {
        model.source.remove(data);
        model.target.push(data);
    }
};
ko.applyBindings(model);
```

Use as **Sortable:**
```html
<h2>Sort the list</h2>
<ul data-bind="foreach: source, dropZone: { name: 'source', drop: drop , sortable:true }">
	 <li data-bind="text: value, css: { dragging: dragging }, dragZone: { name: 'source', dragStart: $parent.dragStart, dragEnd: $parent.dragEnd}">
</ul>
```

```js
var names = [
        '1 One',
        '2 Two',
        '3 Three',
        '4 Four',
        '5 Five',
        '6 Six'        
    ];

var model = {	
	dragStart: function (item) {
		item.dragging(true);
	},
	dragEnd: function (item) {
		item.dragging(false);
	},
	drop: function (data, model, index) {           
        model.source.remove(data);
        if(index !== undefined){
             model.source.splice(index, 0, data);
        } else {
             model.source.push(data);
        }
    },
	source: ko.observableArray(ko.utils.arrayMap(names, function (name) {
		return {
			value: name,
			dragging: ko.observable(false)
		};
	}))
};
ko.applyBindings(model);
```

## License

Knockout.dragdrop is licensed under a standard 3-clause BSD license -- see the `LICENSE`-file for details.
