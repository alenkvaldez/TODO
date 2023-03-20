var app = new function() {
  this.el = document.getElementById('tasks');
   // getting tbody and assignting to element; new tasks will be put into table 
  this.tasks = [];
  // getting tbody 

  
  
  this.FetchAll = function() {
    var data = '';
    // displays all todo list items

    if (this.tasks.length > 0) {
      for (i = 0; i < this.tasks.length; i++) {
        data += '<tr>';
        data += '<td>'+(i+1)+". " + this.tasks[i] + '</td>';
        data += '<td><button onclick="app.Edit(' + i + ')"  class="btn btn-warning">Edit</button></td>';
        data += '<td><button onclick="app.Delete(' + i + ')"  class="btn btn-danger">Delete</button></td>';
        data += '</tr>';
      }
    }
    // display each item in todo list

    this.Count(this.tasks.length);
    return this.el.innerHTML = data;
  };

  this.Add = function () {
    el = document.getElementById('add-todo');
    // get value
    var task = el.value;

    if (task) {
      // add new value
      this.tasks.push(task.trim());
      // reset input value
      el.value = '';
      // dislay new list
      this.FetchAll();
    }
  };

  this.Edit = function (item) {
    var el = document.getElementById('edit-todo');
    // display value in the field
    el.value = this.tasks[item];
    // display fields
    document.getElementById('edit-box').style.display = 'block';
    self = this;

    document.getElementById('save-edit').onsubmit = function() {
      // get value
      var task = el.value;

      if (task) {
        // edit value
        self.tasks.splice(item, 1, task.trim());
        // display the new list
        self.FetchAll();
        // hide fields
        CloseInput();
      }
    }
  };

  this.Delete = function (item) {
    // delete current row
    this.tasks.splice(item, 1);
    // display new list
    this.FetchAll();
  };

  this.Count = function(data) {
    var el = document.getElementById('counter');
    var name = 'Tasks';
 

    if (data) {
        if(data ==1){
            name = 'Task'
        }
      el.innerHTML = data + ' ' + name ;
    } 
    else {
      el.innerHTML = 'No ' + name;
    }
  };
}
// keep track of count

app.FetchAll();

function CloseInput() {
  document.getElementById('edit-box').style.display = 'none';
}
// updates todo list and closes edit box