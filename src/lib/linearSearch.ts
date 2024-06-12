export function linearSearch(arr: string[], target: string) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toLocaleLowerCase() === target) {
            return true; // Retorna el índice del elemento encontrado
        }
    }
    return false; // Retorna -1 si el elemento no se encuentra en la lista
}