import { create } from "zustand";

interface CohortState {
  joinedCohorts: string[]; // or number[], depending on your ID type
  joinCohort: (id: string) => void;
  leaveCohort: (id: string) => void;
}

export const useCohortStore = create<CohortState>((set) => ({
  joinedCohorts: [],
  joinCohort: (id) =>
    set((state) => ({
      joinedCohorts: state.joinedCohorts.includes(id)
        ? state.joinedCohorts
        : [...state.joinedCohorts, id],
    })),
  leaveCohort: (id) =>
    set((state) => ({
      joinedCohorts: state.joinedCohorts.filter((cohortId) => cohortId !== id),
    })),
}));
