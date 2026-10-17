import React, { useState } from 'react'
import Button from '../components/Button'
import { Plus, Search, ChevronDown } from 'lucide-react'
import ToDoTask from '../features/ToDoTask'

const MyTasks = () => {

  const [task, setTask] = useState({
    task: '',
    category: '',
    priority: ''
  })

  const handleChange = (e)=>{
    // console.log(e.target.value);
    const {name, value} = e.target;
    setTask({...task, [name]:value});
  }



  const handleSubmit = (e)=>{
    e.preventDefault();
  }



  return (
    <div className="px-4 sm:px-5 py-6 flex flex-col gap-6">

      {/* Header */}
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-bold text-[#012725]">
          My Tasks
        </h1>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-sm text-gray-600 font-semibold">
            Organize your tasks and get things done.
          </p>

          <Button
            Icon={Plus}
            text="Add Task"
            className="px-4 py-2 self-start sm:self-auto"
          />
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center">

        {/* Search Bar */}
        <div className="flex items-center gap-2 border border-gray-300 bg-white px-3 py-2.5 rounded-lg w-full sm:flex-1 sm:max-w-[400px]">
          <Search size={18} className="text-gray-500 shrink-0" />

          <input
            type="text"
            onChange={handleChange}
            placeholder="Search tasks..."
            className="outline-none w-full bg-transparent text-sm text-gray-700"
          />
        </div>

        {/* Category Dropdown */}
        <div className="relative w-full sm:w-48">
          <select
            defaultValue="all"
            onChange={handleChange}
            className="appearance-none w-full border border-gray-300 rounded-lg px-3 py-2.5 pr-9 outline-none bg-white text-sm font-medium text-[#012725] focus:border-[#012725]"
          >
            <option value="all">All Categories</option>
            <option value="coding">Study</option>
            <option value="personal">Personal</option>
            <option value="health">Health</option>
          </select>

          <ChevronDown
            size={16}
            className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600"
          />
        </div>

        {/* Priority Dropdown */}
        <div className="relative w-full sm:w-40">
          <select
            defaultValue="all"
            onChange={handleChange}
            className="appearance-none w-full border border-gray-300 rounded-lg px-3 py-2.5 pr-9 outline-none bg-white text-sm font-medium text-[#012725] focus:border-[#012725]"
          >
            <option value="all">All Priorities</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          <ChevronDown
            size={16}
            className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600"
          />
        </div>

      </div>


      {/* To-Do List */}
      <ToDoTask/>
    </div>
  )
}

export default MyTasks
