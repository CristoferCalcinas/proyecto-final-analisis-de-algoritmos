function linearSearch(arr: string[], target: string) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Retorna el índice del elemento encontrado
        }
    }
    return -1; // Retorna -1 si el elemento no se encuentra en la lista
}