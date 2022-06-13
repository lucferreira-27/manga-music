import TrackRepository from "../models/trackModel.js";

async function findAll() {
  const tracks = await TrackRepository.findAll();
  return tracks;
}
async function findById(id) {
  const track = await TrackRepository.findById(id);
  return track;
}
async function create(track) {
  const newTrack = await TrackRepository.create(track);
  return newTrack;
}
async function update(id, track) {
  const updatedTrack = await TrackRepository.update(id, track);
  return updatedTrack;
}
async function remove(id) {
  const deletedTrack = await TrackRepository.remove(id);
  return deletedTrack;
}

export default { findAll, findById, create, update, remove };
