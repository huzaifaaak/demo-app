export function createTranslation<T>(obj: T): { translation: T } {
    return {
        translation: obj,
    };
}
