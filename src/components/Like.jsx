const Like = ({ bookmark, setBookmark, id }) => {
    const handleBookmark = (eltId) => {{
    
            const isBookmarked = bookmark.includes(eltId)
            if(isBookmarked){
                setBookmark((prev) => prev.filter((poke) => poke !== eltId))
            } 
            else{
                setBookmark((prev) => [...prev, eltId])
            }
        }
    }

    return(
        <>
            <button className="mb-4" onClick={() => handleBookmark(id)}>
                <img src="unliked.png" alt="unliked" />
            </button>
        </>
    )
}

export default Like;