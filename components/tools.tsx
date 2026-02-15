const colors = {
    red: 'bg-red-100 border-red-400 text-red-900',
    green: 'bg-green-100 border-green-400 text-green-900',
    blue: 'bg-blue-100 border-blue-400 text-blue-900',
    yellow: 'bg-yellow-100 border-yellow-400 text-yellow-900',
    purple: 'bg-purple-100 border-purple-400 text-purple-900',
    pink: 'bg-pink-100 border-pink-400 text-pink-900',
    orange: 'bg-orange-100 border-orange-400 text-orange-900',
    teal: 'bg-teal-100 border-teal-400 text-teal-900',
    cyan: 'bg-cyan-100 border-cyan-400 text-cyan-900',
    indigo: 'bg-indigo-100 border-indigo-400 text-indigo-900'
};

export const tools = {
    pluralize: (count: number) => count === 1 ? '' : 's',
    defineBadgecolor: (couleur: string) => colors[couleur as keyof typeof colors] || 'bg-gray-100 border-gray-400 text-gray-900',
    definePublicBadgeColor: (isPublic: boolean) => isPublic ? 'bg-green-100 border-green-400 text-green-900 ml-2' : 'bg-red-100 border-red-400 text-red-900 ml-2',
    isPage: (page: string, pageName: string) => page === pageName ? 'secondary' : 'ghost',
};