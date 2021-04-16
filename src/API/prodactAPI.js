import prodacts from "./prodacts.json";

export async function getAll() {
  return Promise.resolve(prodacts);
}
export function getById(id) {
  const prodact = prodacts.find((item) => item.id === id);
  return Promise.resolve(prodact);
}
export default { getById, getAll };
