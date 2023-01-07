import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';

type FavoriteRepoStore = {
  favoriteReposIds: number[];
  addFavoriteRepo: (id: number) => void;
  removeFavoriteRepo: (id: number) => void;
};

const store = persist<FavoriteRepoStore>(
  (set) => ({
    clotes: ['jeans', 't-shirt', 'jacket'],
    // states
    favoriteReposIds: [],

    // actions
    addFavoriteRepo: (id: number) =>
      set((state) => ({
        favoriteReposIds: [...state.favoriteReposIds, id],
      })),

    removeFavoriteRepo: (id: number) =>
      set((state) => ({
        favoriteReposIds: state.favoriteReposIds.filter(
          (repoId) => repoId !== id
        ),
      })),
  }),
  {
    name: 'favoriteRepoStore',
  }
);

export const useFavoriteRepoStore = create(devtools(store));
