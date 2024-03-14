import { TypeSite, type Point } from "../stores/mapStore";

export const sites: Point[] = [
    {
        id: '1',
        name: 'Charco Escondido',
        geom: [-76.619, 3.252],
        image: 'https://www.jamundi.gov.co/Dependencias/PublishingImages/Paginas/Rutas-de-Naturaleza/ruta%20del%20bosque-01.jpg',
        image360: '6.hdr',
        description: 'En Jamundí se encuentra Charco Escondido, un verdadero tesoro natural  de aguas azules y profundas. Viajar hasta Charco Escondido es un plan divertido y relajante, perfecto para pasar un fin de semana entre amigos y familiares. A continuación, te presentamos algunos de los mejores planes que puedes realizar en esta maravilla natural.',
        type: TypeSite.ECOTURISMO
    },
    {
        id: '2',
        name: 'Charco Cajones',
        geom: [-76.637, 3.187],
        image: 'https://picoloro.co/wp-content/uploads/2017/09/rivering-rio-claro-picoloro-ecoturiso-cali-14.jpg',
        image360: '1.hdr',
        description: 'Descripcion 1',
        type: TypeSite.ECOTURISMO
    },
    {
        id: '3',
        name: 'Charco Carina',
        geom: [-76.636, 3.200],
        image: 'https://s2.wklcdn.com/image_193/5809882/90732442/59246423.jpg',
        image360: '2.hdr',
        description: 'Descripcion 1',
        type: TypeSite.ECOTURISMO
    },
    {
        id: '4',
        name: 'Monumento a la Vida',
        geom: [-76.537696, 3.264934 ],
        image: 'https://www.municipios.com.co/sitiosturisticos/20150222111434.jpg',
        image360: '2.hdr',
        description: 'Fue construído en el año 2006 por el reconocido maestro de artes plasticas y escultor Hector Lombana, también reconocido por esculturas como La India Catalina en Cartajena y el Monumento a la Solidaridad en Cali. El Monumento a la Vida es un símbolo que busca rendir homenaje a la muerte de diéz agentes de la DIJIN y un informante en el corregimiento de Potrerito, a manos de las fuerzas militares durante un operativo coordinado desde Bogotá. Esta gran fuente conformada por platos superpuestos con siete caídas de agua que representan los siete ríos que bañan nuestro hermoso municipio. En su base, las tres esculturas representan el nucleo familiar, un hombre de 4.25 metros de altura que sostiene a una mujer de 3.25 metros, quien a su vez lleva en sus brazos un niño de 2.25 metros de alto.',
        type: TypeSite.CULTURAL
    },
]