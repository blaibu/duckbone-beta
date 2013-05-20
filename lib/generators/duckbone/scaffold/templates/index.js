// The view for each <%= class_name %> item
<%= application_name %>.Views.<%= class_name.pluralize %>Item = Duckbone.View.extend({

  templateName: '<%= class_name.underscore.pluralize %>_item',
  tagName: 'tr',

  events: {
    "click a[data-action=destroy]": "destroy"
  },

  destroy: function(){
    if(confirm("Are you sure?")) {
      this.model.destroy({
        success: function(){
          <%= application_name%>.<%= class_name.underscore.pluralize %>.remove(this.model);
        }
      });
    }
  }
});

// The List View that manages all <%= class_name %> items on the page
<%= application_name %>.Views.<%= class_name.pluralize %>List = Duckbone.ListView.extend({
  tagName: 'tbody',
  viewClass: <%= application_name %>.Views.<%= class_name.pluralize %>Item
});

// The index view itself, which hosts the list view
<%= application_name %>.Views.<%= class_name.pluralize %>Index = Duckbone.View.extend({

  templateName: '<%= class_name.underscore.pluralize %>_index',

  createChildren: function(){
    list: new <%= application_name %>.Views.<%= class_name.pluralize %>List({collection: this.collection});
  }},

{routeAction: function(id){
    <%= application_name %>.<%= class_name.underscore.pluralize %> =  <%= application_name %>.<%= class_name.underscore.pluralize %> || new <%= application_name %>.Collections.<%= class_name.pluralize %>();
    <%= application_name %>.<%= class_name.underscore.pluralize %>.fetch(
      {freshen: true,
      success: function(){
        <%= application_name %>.app.loadView(<%= application_name %>.Views.<%= class_name.pluralize %>Index, {collection: <%= application_name %>.<%= class_name.underscore.pluralize %>});
      }});
  }
}
);
