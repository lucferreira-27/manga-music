import MangaRepository from "../models/mangaModel.js";

async function findAll() {
  const mangas = await MangaRepository.findAll();
  return mangas;
}
async function findById(id) {
  const manga = await MangaRepository.findById(id);
  return manga;
}
async function create(manga) {
  const newManga = await MangaRepository.create(manga);
  return newManga;
}
async function update(id, manga) {
  const updatedManga = await MangaRepository.update(id, manga);
  return updatedManga;
}
async function remove(id) {
  const deletedManga = await MangaRepository.remove(id);
  return deletedManga;
}

export default { findAll, findById, create, update, remove };
