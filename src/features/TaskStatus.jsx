import React from 'react'
import { CalendarCheck, Check, Timer, Flame } from 'lucide-react'

const stats = [
  {
    title: 'Total Tasks',
    value: '12',
    trend: '↑ 2 today',
    icon: CalendarCheck,
    color: '#DDF2E7',
    iconColor: '#126B52',
    trendColor: '#21836A',
  },
  {
    title: 'Completed',
    value: '8',
    trend: '67%',
    icon: Check,
    color: '#DDF2E7',
    iconColor: '#126B52',
    trendColor: '#21836A',
  },
  {
    title: 'Focus Time',
    value: '4h 30m',
    trend: '↑ 1h 20m',
    icon: Timer,
    color: '#DDF2E7',
    iconColor: '#126B52',
    trendColor: '#21836A',
  },
  {
    title: 'Current Streak',
    value: '5 days',
    trend: 'Keep going!',
    icon: Flame,
    color: '#FCE8D8',
    iconColor: '#F04427',
    trendColor: '#E94B43',
  },
]

const TaskStats = () => {
  return (
    <div className="grid grid-cols-4 gap-3">
      {stats.map((item) => {
        const Icon = item.icon

        return (
          <div
            key={item.title}
            className="bg-[#FCFBF7] border border-[#E1E5DC] 
            rounded-xl p-4 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div
                className="h-10 w-10 shrink-0 rounded-full 
                flex items-center justify-center"
                style={{ backgroundColor: item.color }}
              >
                <Icon
                  size={23}
                  strokeWidth={2.5}
                  color={item.iconColor}
                />
              </div>

              <p className="text-lg font-medium text-[#374741]">
                {item.title}
              </p>
            </div>

            <h2 className="text-2xl font-bold text-[#172D2A] 
            text-center mt-1">
              {item.value}
            </h2>

            <p
              className="text-sm font-semibold text-center mt-1"
              style={{ color: item.trendColor }}
            >
              {item.trend}
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default TaskStats
