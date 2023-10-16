import { updateGenre } from "../redux/slices/genre";
import { useCustomDispatch } from "../hooks/redux";

type Genre = {
  name: string;
};

interface GenreProps {
  genre: Genre;
}

export const Genre: React.FC<GenreProps> = ({genre}:GenreProps) => {
  const dispatch = useCustomDispatch()

  const handleClick = () => {
    dispatch(updateGenre(genre.name))
  }

  return (
    <div onClick={handleClick} className="border border-gray rounded-xl p-2 px-2 cursor-pointer hover:bg-gray-200">
      {genre.name}
    </div>
  )
}