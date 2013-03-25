/**
 * Created with JetBrains WebStorm.
 * User: Aram Ali Qureshi
 * Date: 3/24/13
 * Time: 2:24 AM
 * To change this template use File | Settings | File Templates.
 */

(function(){

    var Rectangle = Backbone.Model.extend({});
    var RectangleView = Backbone.View.extend({

        tagName: 'div',
        className: 'rectangle',
        events:{
          'click': 'move'
        },
        render: function(){
            this.setDimensions();
            this.setPosition();
            this.setColor();
            return this;
        },

        setDimensions: function(){
            this.$el.css({
                width: this.model.get('width') + 'px',
                height: this.model.get('height') + 'px'
            });
        },

        setPosition: function(){
            var position = this.model.get('position');
            this.$el.css({
                left: position.x,
                top: position.y

            })
        },

        setColor: function(){
            this.$el.css('backgroundColor',this.model.get('color'));
        },
//        setColor: function(){
//            var color = this.model.get('color');
//            this.$el.css({
//                backgroundColor: color
//            });
//        }

        move: function(){
            this.$el.css('left',this.$el.position().left+10);
        }

    });

    var myRectangle = new Rectangle({
        width: 100,
        height: 60,
        position: {
            x: 300,
            y: 150
        },
        color: 'red'
    });

//    var Rectangles = [
//        new Rectangle({
//        width: 50,
//        height: 70,
//        position: {
//            x: 300,
//            y: 150
//        },
//        color: 'red'
//    }),
//        new Rectangle({
//            width: 100,
//            height: 60,
//            position: {
//                x: 300,
//                y: 50
//            },
//            color: 'red'
//        }),
//        new Rectangle({
//            width: 56,
//            height: 25,
//            position: {
//                x: 30,
//                y: 150
//            },
//            color: 'red'
//        })
//    ];

//    _(Rectangles).each(function(Rectangle){
//        $('div#whiteBoard').append(new RectangleView({model: Rectangle}).render().el);
//    });


    var myView = new RectangleView({
        model: myRectangle
    });

    $('div#whiteBoard').append(myView.render().el);

})();
