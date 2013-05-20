<%= application_name %>.Views.<%= class_name.pluralize %>Show = Duckbone.View.extends({

  templateName: '<%= class_name.underscore.pluralize %>_show',

  routeAction: function(id){
    <%= class_name.underscore %> = <%= application_name %>.<%= class_name.underscore.pluralize %>?.get(id);
    <%= class_name.underscore %> ?= new <%= application_name %>.Models.<%= class_name %>({id: id});
    <%= class_name.underscore %>.fetch({
      success: function(){
        <%= application_name %>.app.loadView(<%= application_name %>.Views.<%= class_name.pluralize %>Show, {model: <%= class_name.underscore %>});
      }
    });
  }
});