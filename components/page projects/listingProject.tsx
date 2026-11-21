import Project from '@/components/page projects/project';

import { projectProps, OutilsProps } from "@/hooks/interface";

export default function ListingProjet({projects, outils,title} : {projects: projectProps[], outils: OutilsProps[],title: string}) {

    return (
        projects.length > 0 ? (
            <section>
                {title?(
                    <h2 className='font-bold text-2xl pb-4 pt-5'>{title}</h2>
                    ): null}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {projects.map(project => (
                        <Project key={project.id} project={project} outils={outils} />
                    ))}
                </div>
            </section>
        ) : null
    );
}