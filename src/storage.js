class StorageAvailable {
  constructor(type) {
    this.type = type;
    this.storage = window[this.type];
  }

  try() {
    const x = '__storage_test__';
    this.storage.setItem(x, x);
    this.storage.removeItem(x);
    return true;
  }

  catch(e) {
    return (
      e instanceof DOMException
      && (e.code === 22
        || e.code === 1014
        || e.name === 'QuotaExceededError'
        || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      && this.storage
      && this.storage.length !== 0
    );
  }
}
const setTasksToStorage = (taskss) => {
  localStorage.setItem('Tasks', JSON.stringify(taskss));
};

const getTasksFromStorage = () => {
  if (new StorageAvailable('localStorage')) {
    const tasksFromStorage = JSON.parse(localStorage.getItem('Tasks'));

    if (tasksFromStorage !== null) {
      return tasksFromStorage;
    }
    return [];
  }
  return [];
};

export { getTasksFromStorage, setTasksToStorage };
