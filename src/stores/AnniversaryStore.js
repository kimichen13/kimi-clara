import {create} from 'zustand'

// This will hold all your individual stores
const stores = {}

// This will be your store factory
const createStore = (id) => {
    const store = create(set => ({
        timeLeft: {},
        totalDays: 0,
        setTimeLeft: (value) => set({ timeLeft: value }),
        setTotalDays: (value) => set({ totalDays: value })
    }));

    stores[id] = store;
    return store;
}

// This custom hook will allow you to retrieve or create a new store on demand
const useAnniversaryStore = (id) => {
    return stores[id] || createStore(id);
}

export default useAnniversaryStore;