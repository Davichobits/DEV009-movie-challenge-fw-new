
export const MovieCard = ({name, url}) => {
  return (
    <div className="w-[160px] border cursor-pointer border-gray-50 rounded-lg overflow-hidden shadow-xl">
      <img src={url} alt="" />
      <p>{name}</p>
    </div>
  )
}
