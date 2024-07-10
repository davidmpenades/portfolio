import Image from "next/image";

export default function AboutMePage() {
  return (
    <div className="flex flex-cols-2 bg-gray-900 w-full h-full md:mt-10">
      <div className="bg-gray-900 text-gray-500 flex-shrink-0 p-1 hidden md:flex md:flex-col md:text-lg font-mono">
        {Array.from(Array(60), (e, i) => (
          <div key={i} className="h-6 flex justify-end items-center">
            <span className="mr-2">{i + 1}</span>
          </div>
        ))}
      </div>

      <div className="flex mx-auto p-5">
        <div className="text-lg md:text-5xl">
          <h1 className="text-center text-3xl md:text-5xl font-bold mb-6 p-4">
            Sobre mí
          </h1>
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-10 p-5">
            <div className="w-full md:w-5/6">
              <p className="text-sm md:italic md:text-2xl bg-gray-800 text-white p-4 md:p-9 pl-6 md:pl-12 rounded-lg shadow-2xl relative">
                A los 40 decidí dar un giro de 180 grados a mi vida y reciclarme
                profesionalmente en una de mis pasiones, la informática y las
                nuevas tecnologías. Adentrándome en el apasionante mundo de la
                programación. Anteriormente era mecánico de automoción.
              </p>
            </div>

           
          </div>
          <div className="text-lg md:text-5xl">
            <h1 className="text-center text-3xl md:text-5xl font-bold mb-6 p-6">
              Habilidades
            </h1>
            <div className="flex flex-wrap justify-center gap-6 p-6">
              <Image
                src="/imgs/next.webp"
                alt="about me"
                className="rounded-lg shadow-md"
                width={100}
                height={100}
              />
              <Image
                src="/imgs/react.webp"
                alt="about me"
                className="rounded-lg shadow-md"
                width={100}
                height={100}
              />
              <Image
                src="/imgs/vue.webp"
                alt="about me"
                className="rounded-lg shadow-md"
                width={100}
                height={100}
              />
              <Image
                src="/imgs/angular.webp"
                alt="about me"
                className="rounded-lg shadow-md"
                width={100}
                height={100}
              />
              <Image
                src="/imgs/javascript.webp"
                alt="about me"
                className="rounded-lg shadow-md"
                width={100}
                height={100}
              />
              <Image
                src="/imgs/html.webp"
                alt="about me"
                className="rounded-lg shadow-md"
                width={100}
                height={100}
              />
              <Image
                src="/imgs/css.webp"
                alt="about me"
                className="rounded-lg shadow-md"
                width={100}
                height={100}
              />
              <Image
                src="/imgs/tailwind.webp"
                alt="about me"
                className="rounded-lg shadow-2xl"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="text-lg md:text-5xl">
            <h1 className="text-center text-3xl md:text-5xl font-bold mb-6 p-10">
              Habilidades Personales
            </h1>
            <div className="flex justify-center items-start p-1 md:p-6">
              <div className="flex justify-center items-start bg-gray-900 mt-0">
                <div className="flex bg-gray-800 rounded-lg shadow-md p-0 md:p-4 md:w-144 justify-center items-center">
                  <pre className="text-left text-xs md:text-xl leading-relaxed text-white p-0 md:p-10">
                    <code>
                      {`{
  "proactivo": `}
                      <span className="text-blue-400">true</span>
                      {`,
  "trabajo_en_equipo": `}
                      <span className="text-blue-400">true</span>
                      {`,
  "responsable": `}
                      <span className="text-blue-400">true</span>
                      {`,
  "ganas_de_aprender": `}
                      <span className="text-blue-400">true</span>
                      {`,
  "comunicacion_efectiva": `}
                      <span className="text-blue-400">true</span>
                      {`,
  "adaptabilidad": `}
                      <span className="text-blue-400">true</span>
                      {`,
  "creatividad": `}
                      <span className="text-blue-400">true</span>
                      {`,
  "liderazgo": `}
                      <span className="text-blue-400">true</span>
                      {`,
  "gestion_del_tiempo": `}
                      <span className="text-blue-400">true</span>
                      {`,
  "empatia": `}
                      <span className="text-blue-400">true</span>
                      {`,
  "pensamiento_critico": `}
                      <span className="text-blue-400">true</span>
                      {`,
  "capacidad_de_motivacion": `}
                      <span className="text-blue-400">true</span>
                      {`,
  "toma_de_decisiones": `}
                      <span className="text-blue-400">true</span>
                      {`
}`}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
