import Image from "next/image"
import Link from "next/link"

import { PerfilCard } from "./PerfilCard"

export const Presentation = () => {
  return (
    <div className="relative bg-white">
      {/* Background image and overlap */}
      <div aria-hidden="true" className="absolute inset-0 hidden sm:flex sm:flex-col">
        <div className="relative w-full flex-1 bg-gray-800 rounded-lg">
          <div className="absolute inset-0 overflow-hidden rounded-lg">
            <Image
              width={1024}
              height={1024}
              className="h-full w-full object-cover object-center"
              src="/image_home.jpg"
              alt=""
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gray-900 opacity-50 rounded-lg" />
        </div>
        <div className="h-32 w-full bg-white md:h-40 lg:h-48" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 pb-96 text-center sm:px-6 sm:pb-0 lg:px-8">
        {/* Background image and overlap */}
        <div aria-hidden="true" className="absolute inset-0 flex flex-col sm:hidden">
          <div className="relative w-full flex-1 bg-gray-800 rounded-lg">
            <div className="absolute inset-0 overflow-hidden rounded-lg">
              <Image
                width={1024}
                height={1024}
                src="/image_home.jpg"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="absolute inset-0 bg-gray-900 opacity-50 rounded-lg" />
          </div>
          <div className="h-48 w-full bg-white" />
        </div>
        <div className="relative py-28">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-5xl">
            Bienvenido a la plataforma de administración de estudiantes
          </h1>
          <div className="mt-4 sm:mt-10">
            <Link
              href="/algorithms"
              className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 font-medium text-white hover:bg-indigo-700"
            >
              Click aquí para ver los algoritmos
            </Link>
          </div>
        </div>
      </div>

      <section aria-labelledby="tipo-de-permisos" className="relative -mt-96 sm:mt-0">
        <h2 id="tipo-de-permisos" className="sr-only">
          Tipo de permisos
        </h2>
        <div className="mx-auto grid max-w-md grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:grid-cols-2 sm:gap-x-6 sm:gap-y-0 sm:px-6 lg:gap-x-8 lg:px-8">

            <PerfilCard
              imageSrc={"https://f.hubspotusercontent00.net/hubfs/53/Tiposdeclientes.jpeg"}
              imageAlt={"Acceso a la pagina con los permisos de cliente"}
              name={"Clientes"}
              href={"/dashboard/student-list"}
            />

            <PerfilCard
              imageSrc={"https://img.freepik.com/foto-gratis/hombre-pelo-corto-traje-negocios-que-lleva-dos-registros_549566-318.jpg?w=740&t=st=1717897720~exp=1717898320~hmac=6ce0767048cf52ec956e39e5c7bd6a80e2aaf74be435f52848cf936cc8bbd117"}
              imageAlt={"Acceso a la pagina con los permisos de Administrador"}
              name={"Administradores"}
              href={"/auth/login"}
            />

        </div>
      </section>
    </div>
  )
}
