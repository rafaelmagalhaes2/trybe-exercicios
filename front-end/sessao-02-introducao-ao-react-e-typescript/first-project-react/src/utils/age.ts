export function calculateAge(birthdate: string): number | null {
  if (birthdate) {
    const birthdateDate = new Date(birthdate);
    const today = new Date();
    const ageTime = today.getTime() - birthdateDate.getTime();
    const age = Math.floor(ageTime / (1000 * 60 * 60 * 24 * 365.25));
    return age;
  }
  return null;
}
