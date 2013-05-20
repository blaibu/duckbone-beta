<%= application_name %>.Views.<%= class_name.pluralize %>New = Duckbone.FormView.extend({

  templateName: '<%= class_name.underscore.pluralize %>_new',

  fields: {
<% attributes.each do |attribute| -%>
    <%= attribute.name %>: {},
<% end %>
  },

  afterInitialize: function(){
    <%= application_name %>.<%= class_name.underscore.pluralize %> = <%= application_name %>.<%= class_name.underscore.pluralize %> || new <%= application_name %>.Collections.<%= class_name.pluralize %>();
    afterSaveDestination =
      {collection: <%= application_name %>.<%= class_name.underscore.pluralize %>};
  },

  modelSyncEvents: {
    'sync:success': 'modelSaved'
  },

  modelSaved: function(){
    <%= application_name %>.app.navigate("<%= class_name.underscore.pluralize %>/" + this.model.id, true);
    <%= application_name %>.app.flashNotice('<%= class_name %> was successfully created.');
  }},

 {routeAction: function(){
    <%= class_name.underscore %> = new <%= application_name %>.Models.<%= class_name %>();
    <%= application_name %>.app.loadView(<%= application_name %>.Views.<%= class_name.pluralize %>New, {model: <%= class_name.underscore %>});
  }

  });