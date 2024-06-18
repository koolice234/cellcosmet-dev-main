import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import OneDrawer from 'src/scripts/modules/module-oneDrawer';

export default Backbone.View.extend({

    initialize: function (opts) {
        
        console.log('init webpack view !');
        
        var self = this;
        
        OneDrawer.init({
            drawerContent: '<p>test modal</p>',
            drawerModalId: 'TestDrawerModal',
            triggerEvent: 'click',
            triggerElem: '.open-modal',
            initCallback: function(){
                self.$currentModal = this;
            },
            openCallback: function(){                                
        
            },
            closeCallback: function(){

            }
        });
        
    },
    
    events: {

    },
    
    destroy: function () {
        this.undelegateEvents();
    }

});