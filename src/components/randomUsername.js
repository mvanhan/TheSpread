const adjectives = ["Ugly", "Dumbass", "Retard", "Squiggly", "Stinky", "Skibidi", "Poopy", "Horny"];
const nouns = ["Turd", "Canadian", "Dick", "Cunt", "Toilet", "Fucker", "Chicken", "Gyatt", "Titties", "Jizz", "LeBronJames"];

export function generateRandomUsername() {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return `${adjective}${noun}${Math.floor(Math.random() * 1000)}`;
}
