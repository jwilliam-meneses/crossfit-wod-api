const { v4: uuid } = require("uuid")
const Workout = require("../database/Workout")

const getAllWorkouts = () => {
  return Workout.getAllWorkouts()
}

const getOneWorkout = (workoutId) => {
  try {
    const workout = Workout.getOneWorkout(workoutId)

    return workout
  } catch (error) {
    throw error
  }
}

const createNewWorkout = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  }

  const createdWorkout = Workout.createNewWorkout(workoutToInsert)

  return createdWorkout
}

const updateOneWorkout = () => {
  return
}

const deleteOneWorkout = (workoutId) => {
  Workout.deleteOneWorkout(workoutId)
}

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout
}