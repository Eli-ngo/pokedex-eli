import toast, { Toaster } from "react-hot-toast"

const Like = ({ bookmark, setBookmark, id }) => {
    const handleBookmark = (eltId) => {{
    
            const isBookmarked = bookmark.includes(eltId)
            if(isBookmarked){
                setBookmark((prev) => prev.filter((poke) => poke !== eltId))
                toast('Supprimé des Favoris',
                {
                    icon: '🗑️',
                    style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                    },
                }
            );
            } 
            else{
                setBookmark((prev) => [...prev, eltId])
                toast('Ajouté aux Favoris',
                {
                    icon: '✅',
                    style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff',
                    },
                }
            );
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