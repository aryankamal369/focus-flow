import { MoreVertical } from 'lucide-react'
import React from 'react'

const ToDoTask = () => {

    const tasks = [
  {
    title: 'Complete React project',
    priority: 'High',
    category: 'Coding',
    dueDate: 'Today, 2:30 PM',
    status: 'In Progress',
    time: '2h 30m',
  },
  {
    title: 'Solve DSA problems',
    priority: 'High',
    category: 'Coding',
    dueDate: 'Today, 6:00 PM',
    status: 'Pending',
    time: '1h 30m',
  },
  {
    title: 'Read a book',
    priority: 'Medium',
    category: 'Personal',
    dueDate: 'Tomorrow, 9:00 AM',
    status: 'Completed',
    time: '1h 00m',
  },
]


  return (
    <div className='w-full overflow-x-auto rounded-xl border border-gray-200'>
      <div className='min-w-[850px]'>

        {/* Table header */}
        <div className={`grid grid-cols-[minmax(180px,2fr)_90px_100px_145px_120px_75px_30px] items-center gap-3 bg-[#F7F3EA] px-4 py-3 text-md font-semibold text-gray-800`}>
            <span>Task</span>
            <span>Priority</span>
            <span>Category</span>
            <span>Due Date</span>
            <span>Status</span>
            <span>Time</span>
            <span></span>
        </div>


        {/* Task rows */}
        {tasks.map((task, index)=>(
            <div key={index} className='grid grid-cols-[minmax(180px,2fr)_90px_100px_145px_120px_75px_30px] items-center gap-3 px-4 py-4 border-t border-gray-200 text-sm'>

                {/* Task */}
                <div className='flex items-center gap-2'>
                    <input type="checkbox" className='size-4 shrink-0 accent-emerald-900' />
                    <span className='truncate font-medium text-green-950'>
                        {task.title}
                    </span>
                </div>

                {/* Priority */}
                <span className={`w-fit rounded-full px-2 py-1 text-xs font-semibold ${task.priority === 'High' ? 'bg-red-100 text-red-600 border border-red-300 rounded-md' : task.priority==='Medium' ? 'bg-amber-100 text-amber-700 border border-amber-300 rounded-md' : 'bg-green-100 text-green-700 border border-green-300 rounded-md'} `}>
                    {task.priority}
                </span>

                {/* Category */}
                <span className="text-gray-600">{task.category}</span>

                {/* Due Date */}
                <span className="text-gray-600">{task.dueDate}</span>

                {/* Status */}
                <span className={`${task.status === 'Completed' ? 'bg-green-100 text-center text-green-700 border border-green-300 rounded-xl' : task.status==='In Progress' ? 'bg-blue-100 text-blue-700 border border-blue-300 rounded-xl text-center' : 'bg-gray-100 text-center text-gray-700 border border-gray-300 rounded-xl'} `}>{task.status}</span>

                {/* Time */}
                <span className="text-gray-600">{task.time}</span>

                {/* Actions */}
                <button aria-label="Task options">
                    <MoreVertical size={18} />
                </button>
            </div>
        ))}

      </div> 
    </div>
  )
}

export default ToDoTask
