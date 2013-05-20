<%= application_name %>.Views.<%= class_name.pluralize %>Edit = Duckbone.View.extend({

  templateName: '<%= class_name.underscore.pluralize %>_edit',

  fields: {
<% attributes.each do |attribute| -%>
    <%= attribute.name %>: {},
<% end %>
  },

  modelSyncEvents: {
    'sync:success': 'modelSaved'
  },

  modelSaved: function(){
    <%= application_name %>.app.navigate("<%= class_name.underscore.pluralize %>/" + this.model.id, true);
    <%= application_name %>.app.flashNotice('<%= class_name %> was successfully updated.')
  }
  },

 { routeAction: function(id){
    <%= class_name.underscore %> = <%= application_name %>.<%= class_name.underscore.pluralize %> ? <%= application_name %>.<%= class_name.underscore.pluralize %>.get(id) : null;
    <%= class_name.underscore %> = category || new <%= application_name %>.Models.<%= class_name %>({id: id});
    <%= class_name.underscore %>.fetch({
      success: function(){
        <%= application_name %>.app.loadView(<%= application_name %>.Views.<%= class_name.pluralize %>Edit, {model: <%= class_name.underscore %>});
      }
     }
    );
  }
 });