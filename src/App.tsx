import { useFavoriteRepoStore } from './store/favoriteRepoStore';
import { useReposQuery } from './hooks/useReposQuery';
import Card from './components/Card';

function App() {
  const { favoriteReposIds } = useFavoriteRepoStore();
  const { data, isLoading } = useReposQuery();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  console.log(data);
  return (
    <>
      {data?.map((repo) => (
        <Card
          {...repo}
          isFavorite={favoriteReposIds.includes(repo.id)}
          key={repo.id}
        />
      ))}
    </>
  );
}

export default App;
