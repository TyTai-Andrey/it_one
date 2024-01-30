export const storageService = (prefix: string) => {
  const storage = {
    set(key: string, data: any) {
      const _data = JSON.stringify(data);
      localStorage.setItem(`${prefix}_${key}`, _data);

      return data;
    },
    get(key: string, def?: any) {
      const item = localStorage.getItem(`${prefix}_${key}`);

      if (item) {
        return JSON.parse(item);
      }

      return typeof def !== 'undefined' ? def : null;
    },
    remove(key: string) {
      localStorage.removeItem(`${prefix}_${key}`);
    },
    clear() {
      localStorage.clear();
    },
  };

  return storage;
};
