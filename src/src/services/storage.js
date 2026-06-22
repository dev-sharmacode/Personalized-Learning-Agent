export function saveProgress(progress) {
  localStorage.setItem("learningProgress", JSON.stringify(progress));
}

export function getProgress() {
  const progress = localStorage.getItem("learningProgress");

  return progress ? JSON.parse(progress) : {};
}
