import React from 'react'

const FocusMode = () => {
  return (
    <div className="min-h-full w-full p-3 sm:p-5">
      <div className="mx-auto h-full w-full max-w-7xl rounded-2xl bg-[#F8F7F1] p-4 sm:p-6">

        {/* Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex flex-col text-black">
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Time Center
            </h1>
            <p className="mt-1 text-sm text-gray-500">
              All your time tools in one place.
            </p>
          </div>

          <div className="flex items-center justify-between gap-3">
            <button className="rounded-xl border border-gray-200 bg-white p-3 text-gray-700 transition hover:bg-gray-50">
              ◷
            </button>

            <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700">
              Thu, 16 Oct 2026
            </div>
          </div>
        </div>

        {/* Timer Cards */}
        <section className="mt-6 grid grid-cols-1 gap-5 lg:grid-cols-5">

          {/* Countdown Timer */}
          <div className="rounded-2xl border border-gray-200/80 bg-white p-5 shadow-sm lg:col-span-3">

            <h2 className="text-lg font-semibold text-gray-800">
              Countdown Timer
            </h2>

            {/* Preset Buttons */}
            <div className="mt-5 flex flex-wrap gap-2">
              {['15m', '25m', '45m', '1h'].map((time) => (
                <button
                  key={time}
                  className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 transition hover:border-emerald-700 hover:bg-emerald-50 hover:text-emerald-800"
                >
                  <span className="mr-2 inline-block h-2 w-2 rounded-full border-2 border-current" />
                  {time}
                </button>
              ))}
            </div>

            {/* Time Inputs */}
            <div className="mt-7 grid grid-cols-3 gap-3">

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-500">
                  Hours
                </label>
                <input
                  type="number"
                  min={1}
                  max={24}
                  step={1}
                  placeholder="01"
                  className="w-full rounded-xl border border-gray-200 bg-[#FCFCFA] px-2 py-3 text-center text-lg font-semibold text-gray-800 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/10"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-500">
                  Minutes
                </label>
                <input
                  type="number"
                  min={0}
                  max={59}
                  step={1}
                  placeholder="25"
                  className="w-full rounded-xl border border-gray-200 bg-[#FCFCFA] px-2 py-3 text-center text-lg font-semibold text-gray-800 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/10"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-500">
                  Seconds
                </label>
                <input
                  type="number"
                  min={0}
                  max={59}
                  step={1}
                  placeholder="00"
                  className="w-full rounded-xl border border-gray-200 bg-[#FCFCFA] px-2 py-3 text-center text-lg font-semibold text-gray-800 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/10"
                />
              </div>

            </div>

            {/* Actions */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button className="flex-1 rounded-xl bg-emerald-800 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-emerald-900 active:scale-[0.98]">
                Start Timer
              </button>

              <button className="rounded-xl border border-gray-200 bg-white px-6 py-3 font-semibold text-gray-600 transition hover:bg-gray-50 active:scale-[0.98]">
                Reset
              </button>
            </div>
          </div>

          {/* Stopwatch */}
          <div className="flex flex-col rounded-2xl border border-gray-200/80 bg-white p-5 shadow-sm lg:col-span-2">

            <h2 className="text-lg font-semibold text-gray-800">
              Stopwatch
            </h2>

            <div className="flex flex-1 flex-col items-center justify-center py-8">
              <p className="text-4xl font-bold tracking-tight tabular-nums text-gray-900 sm:text-5xl">
                00:00.00
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <button className="rounded-xl bg-emerald-800 px-5 py-3 font-semibold text-white transition hover:bg-emerald-900 active:scale-95">
                  Start
                </button>

                <button className="rounded-xl border border-gray-200 px-5 py-3 font-semibold text-gray-600 transition hover:bg-gray-50">
                  Lap
                </button>

                <button className="rounded-xl border border-gray-200 px-5 py-3 font-semibold text-gray-600 transition hover:bg-gray-50">
                  Reset
                </button>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-4">
              <h3 className="text-sm font-medium text-gray-600">
                Lap times
              </h3>

              <p className="mt-4 text-center text-sm text-gray-400">
                No lap times yet
              </p>
            </div>

          </div>
        </section>

        {/* Study Session Presets */}
        <section className="mt-7">
          <h2 className="text-lg font-bold text-gray-800">
            Study Session Presets
          </h2>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

            {[
              { title: 'Quick Focus', duration: '15m / 5m', icon: '◴' },
              { title: 'Pomodoro', duration: '25m / 5m', icon: '◉' },
              { title: 'Deep Work', duration: '50m / 10m', icon: '▣' },
              { title: 'Long Study', duration: '90m / 15m', icon: '◷' },
            ].map((preset) => (
              <button
                key={preset.title}
                className={`group rounded-2xl border bg-white p-5 text-left transition duration-200 hover:-translate-y-1 hover:border-emerald-700 hover:shadow-md 
                }`}
              >
                <span className="text-2xl text-emerald-800">
                  {preset.icon}
                </span>

                <h3 className="mt-3 font-semibold text-gray-800">
                  {preset.title}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {preset.duration}
                </p>
              </button>
            ))}

          </div>
        </section>

      </div>
    </div>
  )
}

export default FocusMode