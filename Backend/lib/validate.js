function Validate(name, email, password) {
 
  if (!name || name.trim().length === 0) {
    return { isValid: false, error: "Name is required" };
  }
  if (name.length > 50) {
    return { isValid: false, error: "Name must be less than 50 characters" };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return { isValid: false, error: "Please provide a valid email address" };
  }

  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  if (!password || !passwordRegex.test(password)) {
    return {
      isValid: false,
      error: "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number",
    };
  }

  return { isValid: true, error: null };
}

module.exports = Validate;