import Link from "next/link";

interface Props {
    imageSrc: string;
    imageAlt: string;
    name: string;
    href: string;
}


export const PerfilCard = ({ imageSrc, imageAlt, name, href }: Props) => {
    return (
        <div
            className="group relative h-96 rounded-lg bg-white shadow-xl sm:aspect-h-5 sm:aspect-w-4"
        >
            <div>
                <div aria-hidden="true" className="absolute inset-0 overflow-hidden rounded-lg">
                    <div className="absolute inset-0 overflow-hidden group-hover:opacity-75">
                        <img
                            src={imageSrc}
                            alt={imageAlt}
                            className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50" />
                </div>
                <div className="absolute inset-0 flex items-end rounded-lg p-6">
                    <div>
                        <p aria-hidden="true" className="text-sm text-white">
                            Acceder como
                        </p>
                        <h3 className="mt-1 font-semibold text-white">
                            <Link href={href}>
                                <span className="absolute inset-0" />
                                {name}
                            </Link>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
