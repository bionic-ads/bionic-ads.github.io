App.BionicMenuFiltersView = Backbone.View.extend({
    
    events:{
        'click .menu-item'                                  : 'toggleMenuItem',
        'click .filter-options .overlay'                    : 'closeMenuItem',
        'change ul[data-select-all] input[type="checkbox"]' : 'checkboxChecked',
        'click .nxm-menu-filter-apply'                      : 'menuApply'
    },
    
    initialize: function(params) {
        this.defaults = {
            el: false,
            settings: {},
            filters: false,
            parentView: false,
            template: false,
            handles: {
                searchInput: '.filter-search-master'
            },
            callbacks: {

            }

            // add data-action the name of the method that should be run when apply and remove buttons are clicked
            // ie data-action="runMe" on apply button runs parentView.runMe(e)
        };

        $.extend(true, this, this.defaults, params);
        $.extend( this.events, insured(params.events, {}) );
        return this;
    },  

    render: function(){
        // if ( !exists( this.template ) )     
            // this._template = templateWithInclude(this.template);
        // if ( !exists( this.templateContent ) )      
        //     this.templateContent = _.template(tpl.get('org/components/advertisers/grid_all'));
        if(this.el && this.template){
            $(this.el).html( this.template( {filters: this.filters, settings: this.settings} ) );
        }
        
        return this;
        // this.delegateEvents(this.delegateEvents);
    },

    //@param value , default ''
    //return search input element
    setSearchInputValue: function(value){
        value = insured(value, '');
        var $el = this.$el.find( this.handles.searchInput );
        $el.val(value);
        return $el;
    },

    // opens and close the menu
    toggleMenuItem: function(e){
        if( $(e.target).closest('.filter.remove').length > 0 ){
            this.removeFilter(e);
        }else{
            var $option = $(e.target).parents('.filter-section').find('.filter-options');
            if ( $option.is(':visible') ){
                $('.filter-options').hide();
            }else{
                $('.filter-options').hide();
                $option.show();
            }
            
        }
    },

    closeMenuItem: function(e){
        $(e.target).closest('.filter-options').hide();
    },

    checkboxChecked: function(e){
        $target = $(e.target);
        if( $target.hasClass('filter-cb-all') ){
            $target.closest('ul').find('.filter-cb-sub').prop('checked', $target.prop('checked') );    
        }else if( $target.hasClass('filter-cb-sub') ){
            var selectAll = $target.closest('ul').find('.filter-cb-sub').length  > 0 && $(e.target).closest('ul').find('.filter-cb-sub').length === $(e.target).closest('ul').find('.filter-cb-sub:checked').length;
            $target.closest('ul').find('.filter-cb-all').prop('checked', selectAll);    
        }
    },

    removeFilter: function(e){
        var $target = $(e.target).closest('.filter.remove');
        var action = $target.data('action');
        if(typeof action !== 'undefined' && this.parentView && typeof this.parentView[action] === 'function' ){
            this.parentView[action](e);
        }
    },

    menuApply: function(e){
        $('.filter-options').hide();
        var $target = $(e.target).closest('.nxm-menu-filter-apply');
        var action = $target.data('action');
        if(typeof action !== 'undefined' && this.parentView && typeof this.parentView[action] === 'function' ){
            this.parentView[action](e);
        }
    }
});
