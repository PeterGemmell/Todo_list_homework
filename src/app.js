import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      tasks: [
        {todo: "Buy Shopping", priority: "high"},
        {todo: "Take Out Bins", priority: "low"},
        {todo: "Wash The Dishes", priority: "high"}
      ],
        newTask: " ",
        newPriority: " "
    },
        methods: {
        saveNewTask: function () {
        this.tasks.push({
        todo:this.newTask,
        priority:this.newPriority
        });
        this.newTask = " ",
        this.newPriority = " "
         }
       }
     })
   })
