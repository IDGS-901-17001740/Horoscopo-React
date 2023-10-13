const Card = ({ fechaSeleccionada }) => {
  const horoscopoInfo = {
    Aries: {
      nombre: "Aries",
      imagen:
        "https://tierrahechicera.com/wp-content/uploads/2018/08/Aries-150x150.png",
      presagio:
        "Este mes todo comenzará a tener el orden perfecto. Vive el momento presente. Ábrete a nuevos proyectos. Crecimiento profesional, ascenso. Se te dará lo que tanto anhelas. Debes ser cuidadoso al tomar decisiones. Celebraciones con familiares y amigos.",
      fechaInicio: "21 de marzo",
      fechaFin: "19 de abril",
      consejo:
        "Encuentra tu verdad y tu paz interior, llena de significado tu camino y sé fuerte.",
    },
    Tauro: {
      nombre: "Tauro",
      imagen:
        "https://tierrahechicera.com/wp-content/uploads/2018/08/Tauro-150x150.png",
      presagio:
        "Si ya tomaste una decisión se coherente y no le des más vueltas. Siente la fuerza que hay dentro de ti. Alguien importante cree en tus ideas y esto te traerá grandes éxitos. Llego el momento de enfrentar lo que tanto has postergado. Alguien de tu familia necesita ayuda, búscalo y bríndale tu mano amiga.",
      fechaInicio: "20 de abril",
      fechaFin: "20 de mayo",
      consejo:
        "Elimina obstáculos, mantén la esperanza y permite que todo fluya con energía.",
    },
    Géminis: {
      nombre: "Géminis",
      imagen:
        "https://tierrahechicera.com/wp-content/uploads/2018/08/Geminis-150x150.png",
      presagio:
        "No pierdas la esperanza de conseguir tu mayor sueño. Entras en un ciclo contundente donde se te presentan pruebas de las que saldrás triunfante. Es momento de planificar, especialmente en todo lo relacionado con el hogar. Saldrá a relucir una energía que estaba oculta en el trabajo.",
      fechaInicio: "21 de mayo",
      fechaFin: "20 de junio",
      consejo:
        "Disfruten el momento y vayan poco a poco, pero tengan claro que lo que están viviendo no es para siempre.",
    },
    Cáncer: {
      nombre: "Cáncer",
      imagen:
        "https://tierrahechicera.com/wp-content/uploads/2018/08/cancer-150x150.png",
      presagio:
        "Durante este mes sentirás que das pasos importante en el trabajo, el universo te recompensa, ascenso. Etapa de plenitud. Se producirán cambios positivos a tu alrededor, se presentarán oportunidades que debes aprovechar. Te llega una propuesta interesante a través de un amigo.",
      fechaInicio: "21 de junio",
      fechaFin: "22 de julio",
      consejo:
        "Lo que hayas aprendido no caerá en saco roto, más temprano que tarde te servirá para lograr lo que te propongas.",
    },
    Leo: {
      nombre: "Leo",
      imagen:
        "https://tierrahechicera.com/wp-content/uploads/2018/08/leo-150x150.png",
      presagio:
        "Alguien en quien tú confías podría defraudarte en el trabajo. Observa bien quienes son tus compañeros y quienes tus amigos. Momento de transformación. Se consagra un proyecto espectacular. Cuidado con mujer chismosa que se mete en tu relación. Remodelaciones.",
      fechaInicio: "23 de julio",
      fechaFin: "22 de agosto",
      consejo:
        "Atrévete a tomar riesgos, deja el miedo, el universo te está brindando protección divina.",
    },
    Virgo: {
      nombre: "Virgo",
      imagen:
        "https://tierrahechicera.com/wp-content/uploads/2018/08/virgo-150x150.png",
      presagio:
        "Un proyecto en el que has puesto tus esperanzas podría no salir bien. Energías negativas en el ámbito laboral, observa las señales alrededor de tu entorno. Terminas una relación o amistad, lo que se tenga que ir que se vaya.",
      fechaInicio: "23 de agosto",
      fechaFin: "22 de septiembre",
      consejo:
        "Se apacible, busca soluciones pacificas a cualquier problema que surja, permite que fluya tu paz interna.",
    },
    Libra: {
      nombre: "Libra",
      imagen:
        "https://tierrahechicera.com/wp-content/uploads/2018/08/libra-150x150.png",
      presagio:
        "La situación laboral te obliga a ser dinámico y estar en constate renovación. Especialízate en algo que pueda servirte más adelante. Energía perturbadora en el trabajo. Sanación que te permitirá abrirte a cosas maravillosas. Toma conciencia. Dios te protege.",
      fechaInicio: "23 de septiembre",
      fechaFin: "22 de octubre",
      consejo:
        "Practica la meditación en silencio. Aprecia las diferencias y evita hacerle daño a los demás.",
    },
    Escorpion: {
      nombre: "Escorpion",
      imagen:
        "https://tierrahechicera.com/wp-content/uploads/2018/08/Escorpio-150x150.png",
      presagio:
        "No te adelantes a los acontecimientos, lo que tiene que ser será en su momento adecuado. Debes ser creativo, busca una nueva etapa en tu vida. Los cambios dan miedo, pero suelen ser beneficiosos. No te aísles. Se te presentarán obstáculos, se perseverante. Documentos que debes colocar al día.",
      fechaInicio: "23 de octubre",
      fechaFin: "21 de noviembre",
      consejo:
        "Cuídate de personas que quieren hacerte daño, usa una piedra de turmalina para tu protección.",
    },
    Sagitario: {
      nombre: "Sagitario",
      imagen:
        "https://tierrahechicera.com/wp-content/uploads/2018/08/Sagitario-150x150.png",
      presagio:
        "Recibes el apoyo de personas extranjeras. No permitas que abusen de tu buena fe. Conecta tu humildad, tu sencillez, se noble escucha a tus familiares. Nuevo empleo en el que te sentirás muy bien.",
      fechaInicio: "22 de noviembre",
      fechaFin: "21 de diciembre",
      consejo:
        "Necesitan un margen de libertad para ir tras sus sueños e ideales. No permitan que otras personas decidan por ustedes.",
    },
    Capricornio: {
      nombre: "Capricornio",
      imagen:
        "https://tierrahechicera.com/wp-content/uploads/2023/07/Capricornio-150x150.webp",
      presagio:
        "Tienes que hacer un nuevo plan de vida. Sal de la monotonía, realiza cambios positivos. Haz lo que indique tu corazón. Aprovecha que el universo está conspirando a tu favor. Fluye, da lo mejor de ti y busca tu felicidad. Un viaje que planificas con fuerza.",
      fechaInicio: "22 de diciembre",
      fechaFin: "19 de enero",
      consejo:
        "Mantente tal como vas que las buenas oportunidades no tardan en llegar.",
    },
    Acuario: {
      nombre: "Acuario",
      imagen:
        "https://tierrahechicera.com/wp-content/uploads/2018/08/Acuario-150x150.png",
      presagio:
        "Tendrás que modificar tu manera de trabajar o de desenvolverte ya que no estas llegando a las metas que te has propuesto. Te sientes cansado, conecta tu fuerza interior y superarás cualquier obstáculo. Debes confiar y delegar responsabilidades. Ámate, reconócete. Todo fluirá de forma excelente.",
      fechaInicio: "20 de enero",
      fechaFin: "18 de febrero",
      consejo:
        "Es el momento propicio para establecer las bases de proyectos a largo plazo.",
    },
    Piscis: {
      nombre: "Piscis",
      imagen:
        "https://tierrahechicera.com/wp-content/uploads/2018/08/Piscis-150x150.png",
      presagio:
        "Evita los problemas en el trabajo ya que solo conseguirás alterarte y el mayor perjudicado serás tú. No le des importancia a quien no la tiene, pero se justo con las personas que tienes a tu lado, podrías perderlas. Alguien del pasado podría regresar y quizás no estés preparado para ese encuentro.",
      fechaInicio: "19 de febrero",
      fechaFin: "20 de marzo",
      consejo: "Rompe con ataduras que no te permiten avanzar.",
    },
  };

  const determinarSigno = (fecha) => {
    const fechaNacimiento = new Date(fecha);
    const mes = fechaNacimiento.getMonth() + 1;
    const dia = fechaNacimiento.getDate() + 1;

    console.log("mes: " + mes);
    console.log("dia: " + dia);

    const zodiaco = [
      { signo: "Aries", inicio: [3, 21], fin: [4, 19] },
      { signo: "Tauro", inicio: [4, 20], fin: [5, 20] },
      { signo: "Géminis", inicio: [5, 21], fin: [6, 20] },
      { signo: "Cáncer", inicio: [6, 21], fin: [7, 22] },
      { signo: "Leo", inicio: [7, 23], fin: [8, 22] },
      { signo: "Virgo", inicio: [8, 23], fin: [9, 22] },
      { signo: "Libra", inicio: [9, 23], fin: [10, 22] },
      { signo: "Escorpion", inicio: [10, 23], fin: [11, 21] },
      { signo: "Sagitario", inicio: [11, 22], fin: [12, 21] },
      { signo: "Capricornio", inicio: [12, 22], fin: [1, 19] },
      { signo: "Acuario", inicio: [1, 20], fin: [2, 18] },
      { signo: "Piscis", inicio: [2, 19], fin: [3, 20] },
    ];

    const signoEncontrado = zodiaco.find(({ inicio, fin }) => {
      const [inicioMes, inicioDia] = inicio;
      const [finMes, finDia] = fin;
      return (
        (mes === inicioMes && dia >= inicioDia) ||
        (mes === finMes && dia <= finDia)
      );
    });

    return signoEncontrado ? signoEncontrado.signo : "Desconocido";
  };

  const obtenerInfoHoroscopo = (signo) => horoscopoInfo[signo];

  const infoHoroscopo =
    fechaSeleccionada &&
    obtenerInfoHoroscopo(determinarSigno(fechaSeleccionada));

  if (!fechaSeleccionada || !infoHoroscopo) {
    return (
      <div className="box">
        <p>Selecciona una fecha válida para ver tu horóscopo.</p>
      </div>
    );
  }

  // Desestructuración para acceder a las propiedades del objeto infoHoroscopo
  const { nombre, imagen, presagio, fechaInicio, fechaFin, consejo } =
    infoHoroscopo;

  return (
    <>
      <div class="box">
        <article class="media">
          <div class="media-left">
            <figure class="image is-128x128">
              <img src={imagen} alt="Image" />
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <h1 className="title is-1">{nombre}</h1>
            </div>
            <p>Fecha de inicio: {fechaInicio}</p>
            <p>Fecha de fin: {fechaFin}</p>
          </div>
        </article>
      </div>
      <div className="box">
        <div className="content">
          <p className="has-text-weight-semibold">Presagio:</p>
          <p className="has-text-justified">{presagio}</p>
        </div>
        <div className="content">
          <p className="has-text-weight-semibold">Consejo:</p>
          <p className="has-text-justified">{consejo}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
