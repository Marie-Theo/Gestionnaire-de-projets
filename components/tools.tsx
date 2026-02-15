export const tools = {
    pluralize: (count: number) => count === 1 ? '' : 's',
    defineBadgecolor: (couleur: string) => `bg-${couleur}-100 border-${couleur}-400 text-${couleur}-900`,
    definePublicBadgeColor: (isPublic: boolean) => isPublic ? 'bg-green-100 border-green-400 text-green-900 ml-2' : 'bg-red-100 border-red-400 text-red-900 ml-2',
    isPage: (page: string, pageName: string) => page === pageName ? 'secondary' : 'ghost',
};