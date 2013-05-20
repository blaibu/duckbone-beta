<%= application_name %>.Models.<%= class_name %> = Duckbone.Model.extend({

  urlRoot: function(){
    "/api/<%= class_name.underscore.pluralize %>"
    },

  createOrUpdate: function(){
    if(isNew()){
      "Create <%= class_name %>"
    }
    else{
      "Update <%= class_name %>"
    }
  }
});

<%= application_name %>.Collections.<%= class_name.pluralize %> = Duckbone.Collection.extend({

  model: <%= application_name %>.Models.<%= class_name %>,
  url: function(){
    "/api/<%= class_name.underscore.pluralize %>"
    }
});