const PROFILES_KEY = 'profiles';
const CURRENT_USER_KEY = 'currentUser';

export const loadProfiles = () => {
  try {
    const stored = localStorage.getItem(PROFILES_KEY);
    return stored ? JSON.parse(stored) : [{ name: 'Вася', isLogined: false }];
  } catch (error) {
    console.error('Error loading profiles:', error);
    return [{ name: 'Вася', isLogined: false }];
  }
};

export const saveProfiles = (profiles) => {
  try {
    localStorage.setItem(PROFILES_KEY, JSON.stringify(profiles));
  } catch (error) {
    console.error('Error saving profiles:', error);
  }
};

export const loadCurrentUser = () => {
  try {
    const stored = localStorage.getItem(CURRENT_USER_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.error('Error loading current user:', error);
    return null;
  }
};

export const saveCurrentUser = (user) => {
  try {
    if (user) {
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(CURRENT_USER_KEY);
    }
  } catch (error) {
    console.error('Error saving current user:', error);
  }
};

export const updateProfileInStorage = (userName, isLogined) => {
  try {
    const profiles = loadProfiles();
    const updatedProfiles = profiles.map(profile =>
      profile.name === userName ? { ...profile, isLogined } : profile
    );
    saveProfiles(updatedProfiles);
    return updatedProfiles;
  } catch (error) {
    console.error('Error updating profile:', error);
    return profiles;
  }
};
