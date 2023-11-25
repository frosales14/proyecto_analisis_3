import { SimpleFooter } from "./Footer";
import { NavbarWithMegaMenu } from "./Navbar";

export const About = () => {
  return (
    <>
      <NavbarWithMegaMenu />
      <main className="px-4 max-w-[1200px] mx-auto md:px-0">
        <img
          className="w-full h-[400px] object-cover"
          src="src/assets/about.jpeg"
          alt=""
        />

        <h1 className="text-center font-bold text-4xl mb-5">Sobre Nosotros</h1>

        <p>
          Bienvenido a , tu socio confiable en servicios contables para pequeñas
          y medianas empresas (PYMEs). En [Nombre de tu Empresa], nos
          enorgullece ofrecer soluciones financieras integrales para ayudar a tu
          negocio a crecer y prosperar.
        </p>

        <h2 className="text-center font-bold text-2xl mb-4">Nuestra Mision</h2>
        <p>
          En ActG, nuestra misión es proporcionar servicios contables de calidad
          que vayan más allá de los números. Nos esforzamos por ser tu aliado
          estratégico, brindándote información financiera precisa y
          asesoramiento personalizado para que tomes decisiones informadas y
          alcances tus metas empresariales.
        </p>

        <p>
          VisiónEn ActG, nos visualizamos como líderes en la transformación
          financiera para las pequeñas y medianas empresas. Nuestra visión se
          enfoca en:Inspirar Confianza y Crecimiento: Queremos ser reconocidos
          como el socio de confianza que impulsa el crecimiento sostenible de
          nuestros clientes a través de soluciones financieras innovadoras y
          servicios contables excepcionales.Excelencia Contable Sostenible:
          Buscamos establecer un estándar de excelencia en la gestión
          financiera, contribuyendo al éxito a largo plazo de las empresas a las
          que servimos y fomentando una cultura de mejora
          continua.Empoderamiento Empresarial: Aspiramos a empoderar a las PYMEs
          proporcionándoles conocimientos financieros claros, herramientas
          efectivas y asesoramiento estratégico que les permitan tomar
          decisiones informadas y alcanzar sus metas comerciales.Impacto
          Positivo en la Comunidad: Nos esforzamos por tener un impacto positivo
          más allá de las cifras financieras, comprometiéndonos con iniciativas
          sociales y comunitarias que reflejen nuestros valores y contribuyan al
          bienestar general.Liderazgo Innovador: Buscamos liderar la industria
          contable mediante la adopción proactiva de tecnologías emergentes,
          brindando a nuestros clientes soluciones avanzadas que se anticipen a
          las demandas cambiantes del entorno empresarial.Nuestra visión es ser
          reconocidos no solo por lo que hacemos, sino por cómo transformamos
          positivamente la experiencia financiera de las empresas a las que
          servimos, construyendo un camino hacia un futuro empresarial más
          próspero y sostenible.
        </p>

        <span className="text-center font-bold text-2xl block my-4">
          ¿Por Qué Elegirnos?
        </span>

        <p>
          Experiencia Profesional: Nuestro equipo de expertos contadores cuenta
          con una amplia experiencia en el campo financiero, asegurando
          servicios de la más alta calidad.
        </p>

        <p>
          Enfoque Personalizado: Entendemos que cada empresa es única. Adaptamos
          nuestros servicios para satisfacer las necesidades específicas de tu
          negocio, brindándote soluciones a medida.
        </p>

        <p>
          Transparencia y Confianza: Valoramos la transparencia en cada
          interacción. Puedes confiar en nosotros para proporcionar información
          financiera precisa y cumplir con los más altos estándares éticos.
        </p>

        <p>
          Tecnología Innovadora: Utilizamos las últimas herramientas y
          tecnologías para agilizar los procesos contables, brindándote
          eficiencia y precisión.
        </p>

        <p>
          Balance General: Ofrecemos análisis detallados de tu situación
          financiera, permitiéndote entender la salud económica de tu empresa.
        </p>

        <p>
          Estados Financieros: Generamos informes financieros claros y
          comprensibles que te ayudarán en la toma de decisiones informadas.
        </p>

        <p>
          Razones Contables: Analizamos y presentamos razones financieras clave
          para evaluar la eficiencia y solidez de tu empresa.
        </p>
      </main>
      <SimpleFooter />
    </>
  );
};
