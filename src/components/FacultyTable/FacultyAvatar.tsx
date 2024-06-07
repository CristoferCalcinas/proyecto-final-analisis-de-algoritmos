import Avvvatars from "avvvatars-react"

export const FacultyAvatar = ({ nombre }: { nombre: string | null }) => {
    const nombre_imagen = nombre!.split(" ")[2]

    return (
        <Avvvatars value={nombre_imagen} size={128} />
    )
}
