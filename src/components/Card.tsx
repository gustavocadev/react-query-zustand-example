import type { RepositoryResponse } from '../types/RepositoryResponse';
import { useFavoriteRepoStore } from '../store/favoriteRepoStore';

type Props = RepositoryResponse & {
  isFavorite: boolean;
};

const Card = (props: Props) => {
  const { addFavoriteRepo, removeFavoriteRepo } = useFavoriteRepoStore();

  const toggleFavorite = () => {
    if (props.isFavorite) {
      removeFavoriteRepo(props.id);
      return;
    }

    addFavoriteRepo(props.id);
  };

  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <button onClick={() => toggleFavorite()}>
        {props.isFavorite ? 'dislike' : 'like'}
      </button>
    </div>
  );
};
export default Card;
