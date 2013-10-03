/*global $, ko*/
(function ($, ko) {
    var names = [
        'Declan',
        'Tessa',
        'Claire',
        'Violet',
        'Alice',
        'Mia',
        'Camille',
        'Aiden'
    ];
    
    var sort = [
        '1 One',
        '2 Two',
        '3 Three',
        '4 Four',
        '5 Five',
        '6 Six',
        '7 Seven'   
    ];

    var model = {
        simple: {
            source: ko.observableArray([].concat(names)),
            target: ko.observableArray(),
            dropFromSource: function (data, model) {
                model.source.remove(data);
                model.target.push(data);
            },
            dropFromTarget: function (data, model) {
                model.target.remove(data);
                model.source.push(data);
            }
        },

        dragElement: {
            source: ko.observableArray([].concat(names)),
            target: ko.observableArray(),
            dropFromSource: function (data, model) {
                model.source.remove(data);
                model.target.push(data);
            },
            dropFromTarget: function (data, model) {
                model.target.remove(data);
                model.source.push(data);
            }
        },

        styling: {
            source: ko.observableArray(ko.utils.arrayMap(names, function (name) {
                return {
                    value: name,
                    dragging: ko.observable(false)
                };
            })),
            target: ko.observableArray(),
            dragStart: function (item) {
                item.dragging(true);
            },
            dragEnd: function (item) {
                item.dragging(false);
            },
            dropFromSource: function (data, model) {
                model.source.remove(data);
                model.target.push(data);
            },
            dropFromTarget: function (data, model) {
                model.target.remove(data);
                model.source.push(data);
            }
        },
        sortable: {            
            dragStart: function (item) {
                item.dragging(true);
            },
            dragEnd: function (item) {
                item.dragging(false);
            },
            dropFn: function (data, model, index) {
                model.source.remove(data);
                if (index !== undefined) {
                    model.source.splice(index, 0, data);
                } else {
                    model.source.push(data);
                }
            },
            source: ko.observableArray(ko.utils.arrayMap(sort, function (name) {
                return {
                    value: name,
                    dragging: ko.observable(false)
                };
            }))
        },
        sortableHandle: {            
            dragStart: function (item) {
                item.dragging(true);
            },
            dragEnd: function (item) {
                item.dragging(false);
            },
            dropFn: function (data, model, index) {                
                model.source.remove(data);
                if (index !== undefined) {
                    model.source.splice(index, 0, data);
                } else {
                    model.source.push(data);
                }
            },
            source: ko.observableArray(ko.utils.arrayMap(sort, function (name) {
                return {
                    value: name,
                    dragging: ko.observable(false)
                };
            }))
        }
    };
    ko.applyBindings(model, $('.demo')[0]);
}($, ko));
