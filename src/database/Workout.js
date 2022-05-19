const DB = require("./db.json")
const { saveToDatabase } = require("./utils")

const getAllWorkouts = () => {
  return DB.workouts
}

const getOneWorkout = (workoutId) => {
  const workout = DB.workouts.find((workout) => workout.id === workoutId);

  if (!workout) {
    throw {
      status: 400,
      message: `Workout with the ID '${workoutId}' not found`
    }
  }

  return workout
}
const createNewWorkout = (newWorkout) => {
  const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;

  if (isAlreadyAdded) {
const deleteOneWorkout = (workoutId) => {
  const indexForDeletion = DB.workouts.findIndex( workout => workout.id === workoutId)

  if (indexForDeletion === -1) {
    return
  }

  DB.workouts.splice(indexForDeletion, 1)

  saveToDatabase(DB)
}

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  deleteOneWorkout
}