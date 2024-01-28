export function transformTag(tag: string): string {
    if (tag === '전체') {
        return '';
    }
    if (tag === '빵') {
        return 'BREAD';
    }
    if (tag === '쿠키') {
        return 'COOKIE';
    }
    if (tag === '케이크') {
        return 'CAKE';
    }
    if (tag === '타르트') {
        return 'TART';
    }
    if (tag === '잼/청') {
        return 'JAM';
    }
    if (tag === '요거트') {
        return 'YOGURT';
    }
    if (tag === '기타') {
        return 'ETC';
    }
    return tag;
}

export function transformIngredientTag(tag: string): string {
    if (tag === 'glutenFree') {
        return '글루텐프리';
    }
    if (tag === 'highProtein') {
        return '고단백';
    }
    if (tag === 'vegan') {
        return '비건';
    }
    if (tag === 'sugarFree') {
        return '무설탕';
    }
    if (tag === 'ketogenic') {
        return '키토제닉';
    }
    return tag;
}
export function transformIngredientEngishTag(tag: string): string {
    if (tag === '글루텐프리') {
        return 'glutenFree';
    }
    if (tag === '고단백') {
        return 'highProtein';
    }
    if (tag === '비건') {
        return 'vegan';
    }
    if (tag === '무설탕') {
        return 'sugarFree';
    }
    if (tag === '키토제닉') {
        return 'ketogenic';
    }
    return tag;
}
