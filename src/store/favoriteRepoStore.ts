import create from 'zustand';
import { persist } from 'zustand/middleware';

type FavoriteRepoStore = {
  favoriteReposIds: number[];
  addFavoriteRepo: (id: number) => void;
  removeFavoriteRepo: (id: number) => void;
};

export const useFavoriteRepoStore = create(
  persist<FavoriteRepoStore>(
    (set) => ({
      // states
      favoriteReposIds: [],

      // actions
      addFavoriteRepo: (id: number) => {
        set((state) => ({
          ...state,
          favoriteReposIds: [...state.favoriteReposIds, id],
        }));
      },

      removeFavoriteRepo: (id: number) => {
        set((state) => ({
          ...state,
          favoriteReposIds: state.favoriteReposIds.filter(
            (repoId) => repoId !== id
          ),
        }));
      },
    }),
    {
      name: 'favoriteRepoStore',
    }
  )
);
