import { updateGenre } from "../redux/slices/genre";
import { useCustomDispatch } from "../hooks/redux";

export const Genre = ({genre}) => {
  const dispatch = useCustomDispatch()

  const handleClick = () => {
    dispatch(updateGenre(genre))
  }

  return (
    <div onClick={handleClick} className="border border-gray rounded-xl p-2 w-40 cursor-pointer hover:bg-red-300">{genre}</div>
  )
}