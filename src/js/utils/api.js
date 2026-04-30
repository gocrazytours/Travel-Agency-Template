const DATA_BASE = '/data/';

async function loadJSON(filename) {
  const res = await fetch(`${DATA_BASE}${filename}`);
  if (!res.ok) throw new Error(`Failed to load ${filename}: ${res.status}`);
  return res.json();
}

export async function fetchTours() {
  const data = await loadJSON('tours.json');
  return data.tours;
}

export async function fetchFeaturedTours() {
  const tours = await fetchTours();
  return tours.filter(t => t.featured);
}

export async function fetchDestinations() {
  const data = await loadJSON('destinations.json');
  return data.destinations;
}

export async function fetchConfig() {
  const data = await loadJSON('config.json');
  return data;
}

export async function fetchCategories() {
  const data = await loadJSON('categories.json');
  return data.categories;
}

export async function fetchToursByCategory(categoryId) {
  const tours = await fetchTours();
  return tours.filter(t => Array.isArray(t.categories) && t.categories.includes(categoryId));
}
