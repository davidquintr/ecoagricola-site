export const products = [
    {
        name: 'Fertilizante',
        slug: "fertilizante",
        short_description: "Mejora la fertilidad del suelo.",
        description: "El fertilizante es un producto diseñado para mejorar la fertilidad del suelo y proporcionar los nutrientes esenciales que las plantas necesitan para crecer de manera saludable. Puede ser de origen orgánico, como el compost y el estiércol, o sintético, elaborado con compuestos químicos específicos. Su función principal es suplir elementos clave como nitrógeno, fósforo y potasio, esenciales para el desarrollo de raíces, hojas y frutos. Su uso adecuado aumenta la producción agrícola, mejora la calidad de los cultivos y optimiza el rendimiento del suelo a largo plazo.",
        rate: 0.5,
        price: 40,
        company: 0,
        images: ["/products/fertilizer.webp"],
        category: 0
    },
    {
        name: 'Pesticida',
        slug: "pesticida",
        short_description: "Protege tus cultivos de plagas.",
        description: "",
        price: 30,
        rate: 4.5,
        company: 0,
        images: ["/products/pesticide.webp"],
        category: 0
    },
    {
        name: 'Semillas de Maíz',
        slug: "semillas-de-maiz",
        short_description: "Semillas de alta calidad para una buena cosecha.",
        description: "",
        price: 20,
        rate: 4.5,
        company: 0,
        images: ["/products/corn_seeds.webp"],
        category: 0
    },
    {
        name: 'Tractor',
        slug: "tractor",
        short_description: "Tractor eficiente para labores agrícolas.",
        description: "",
        price: 15000,
        rate: 4.5,
        company: 0,
        images: ["/products/tractor.webp"],
        category: 0
    },
    {
        name: 'Kit de Riego por Goteo',
        slug: "kit-de-riego-por-goteo",
        short_description: "Sistema de riego eficiente para tus cultivos.",
        description: "",
        price: 200,
        rate: 4.5,
        company: 0,
        images: ["/products/drip_irrigation.webp"],
        category: 0
    },
    {
        name: 'Herbicida',
        slug: "herbicida",
        short_description: "Elimina las malas hierbas de tu campo.",
        description: "",
        price: 920,
        rate: 4.5,
        company: 0,
        images: ["/products/herbicide.webp"],
        category: 0
    },

    // Apicultura
    {
        name: 'Ahumador',
        slug: "ahumador",
        short_description: "Ahumador de apicultor de acero inoxidable con rejilla, gran opción calidad-precio.",
        description: "",
        price: 850,
        rate: 4.5,
        company: 0,
        images: ["/products/Apicultura/ahumador.webp"],
        category: 1
    },
    {
        name: 'Blusón poliamida',
        slug: "blusonPoliamida",
        short_description: "Blusón de protección con careta redonda de poliamida doble.",
        description: "",
        price: 1045,
        rate: 4.5,
        company: 0,
        images: ["/products/Apicultura/blusonPoliamida.webp"],
        category: 1
    },
    {
        name: 'Colmena Langstroth',
        slug: "colmena",
        short_description: "Blusón de protección con careta redonda de poliamida doble.",
        description: "",
        price: 3125,
        rate: 4.5,
        company: 0,
        images: ["/products/Apicultura/colmena.webp"],
        category: 1
    },
    {
        name: 'Bota Apicultor 990',
        slug: "bota",
        short_description: "Bota para apicultores de serraje vulcanizado, con cremallera y forro merinilla beige.",
        description: "",
        price: 920,
        rate: 4.5,
        company: 0,
        images: ["/products/Apicultura/bota.webp"],
        category: 1
    },
    {
        name: 'Cepillo desabejar',
        slug: "cepillo",
        short_description: "Cepillo de desabejar de 40 cm con mango de pino y doble hilera de 21 cm, resistente y de calidad.",
        description: "",
        price: 190,
        rate: 4.5,
        company: 0,
        images: ["/products/Apicultura/cepillo.webp"],
        category: 1
    },
    {
        name: 'Espátula europea roja',
        slug: "espatula",
        short_description: "Espátula de acero inoxidable, esencial para el manejo eficiente de colmenas.",
        description: "",
        price: 190,
        rate: 4.5,
        company: 0,
        images: ["/products/Apicultura/espatula.webp"],
        category: 1
    },
    {
        name: 'Espátula europea roja',
        slug: "guantes",
        short_description: "Guantes de piel de vacuno 100% con manguito de lona reforzada de 15 cm e hidrófugos.",
        description: "",
        price: 550,
        rate: 4.5,
        company: 0,
        images: ["/products/Apicultura/guantes.webp"],
        category: 1
    },

    //Insecticidas
    {
        name: 'Armero 35',
        slug: "armero35",
        short_description: "Insecticida sistémico a base de imidacloprid para el control de insectos chupadores.",
        description: "",
        price: 190,
        rate: 4.5,
        company: 1,
        images: ["/products/Insecticidas/armero35.webp"],
        category: 4
    },

    {
        name: 'Armero 70',
        slug: "armero70",
        short_description: "Insecticida sistémico a base de Imidacloprid para el control de insectos chupadores.",
        description: "",
        price: 300,
        rate: 4.5,
        company: 1,
        images: ["/products/Insecticidas/armero70.webp"],
        category: 4
    },
    {
        name: 'Cepadik',
        slug: "cepadik",
        short_description: "Es un insecticida, larvicida de ingestión y contacto a base de Emamectina para el control de Lepidopteros.",
        description: "",
        price: 190,
        rate: 4.5,
        company: 1,
        images: ["/products/Insecticidas/cepadik.webp"],
        category: 4
    },
    {
        name: 'Landris',
        slug: "landris",
        short_description: "Es un insecticida sistémico a base de Acetamiprid y Cipermetrina para el control de insectos chupadores y masticadores.",
        description: "",
        price: 190,
        rate: 4.5,
        company: 1,
        images: ["/products/Insecticidas/landris.webp"],
        category: 4
    },
    {
        name: 'Lubric',
        slug: "lubric",
        short_description: "Es un insecticia de contacto a base de lufenuron para el control de larvas de lepidopteros.",
        description: "",
        price: 190,
        rate: 4.5,
        company: 1,
        images: ["/products/Insecticidas/lubric.webp"],
        category: 4
    },
    {
        name: 'Raptan',
        slug: "raptan",
        short_description: "Es un insecticida de contacto e ingestión a base de cipermetrina y profenofos para el control de larvas de lepidopteros.",
        description: "",
        price: 190,
        rate: 4.5,
        company: 1,
        images: ["/products/Insecticidas/raptan.webp"],
        category: 4
    },
    {
        name: 'Salvate',
        slug: "salvate",
        short_description: "Es un insecticida sistémico a base de Acetamiprid para el control de insectos chupadores y trips.",
        description: "",
        price: 190,
        rate: 4.5,
        company: 1,
        images: ["/products/Insecticidas/salvate.webp"],
        category: 4
    },
    {
        name: 'Task',
        slug: "task",
        short_description: "Es un insecticida a base de Thiametoxam para el control de insectos chupadores.",
        description: "",
        price: 190,
        rate: 4.5,
        company: 1,
        images: ["/products/Insecticidas/task.webp"],
        category: 4
    },
    {
        name: 'Winner',
        slug: "winner",
        short_description: "Es un insecticida a base de spinetoram para el control de larvas de lepidopteros y trips.",
        description: "",
        price: 190,
        rate: 4.5,
        company: 1,
        images: ["/products/Insecticidas/winner.webp"],
        category: 4
    },
    {
        name: 'Zarper',
        slug: "zarper",
        short_description: "Es un insecticida sistémico y de contacto a base de thiodicarb e imidacloprid para el tratamiento de semillas.",
        description: "",
        price: 190,
        rate: 4.5,
        company: 1,
        images: ["/products/Insecticidas/zarper.webp"],
        category: 4
    },

    // Fertilizante

    {
        name: 'Fertilizante para Cactus',
        slug: "fertilizanteCactus",
        short_description: "Fertilizante para cactus y suculentas, para diluir en 1 litro, marca Ever Green",
        description: "",
        price: 430,
        rate: 4.5,
        company: 2,
        images: ["/products/Fertilizante/fertilizanteCactus.webp"],
        category: 0
    },

    {
        name: 'Fertilizante Color Premium',
        slug: "fertilizanteColorPremium",
        short_description: "Fertilizante granulado para uso doméstico de primera calidad, disponible en presentación de 1 kilogramo, marca Evergreen.",
        description: "",
        price: 550,
        rate: 4.5,
        company: 2,
        images: ["/products/Fertilizante/fertilizanteColorPremium.webp"],
        category: 0
    },

    {
        name: 'Fertilizante para flores',
        slug: "fertilizanteFlores",
        short_description: "Fertilizante para flores y orquideas en presentaci n de 250 mililitros marca Ever green",
        description: "",
        price: 230,
        rate: 4.5,
        company: 2,
        images: ["/products/Fertilizante/fertilizanteFlores.webp"],
        category: 0
    },
    
    {
        name: 'Fertilizante Multiaccion 250ml',
        slug: "fertilizanteMultiaccion",
        short_description: "Fertilizante orgánico multiacción Evergreen, 250 ml, ideal para el crecimiento de plantas.",
        description: "",
        price: 230,
        rate: 4.5,
        company: 2,
        images: ["/products/Fertilizante/fertilizanteMultiaccion.webp"],
        category: 0
    },

    {
        name: 'Fertilizante Super Nutriente',
        slug: "fertilizanteSuperNutriente",
        short_description: "Fertilizante Súper Nutriente 10-30-20 Evergreen, 500 g, estimula la floración y color en orquídeas.",
        description: "",
        price: 440,
        rate: 4.5,
        company: 2,
        images: ["/products/Fertilizante/fertilizanteSuperNutriente.webp"],
        category: 0
    },

    {
        name: 'Fertilizante Urea +S',
        slug: "fertilizanteUreaS",
        short_description: "Fertilizante de urea+S, en presentación de 10 kilogramos, marca Eficaz",
        description: "",
        price: 2000,
        rate: 4.5,
        company: 2,
        images: ["/products/Fertilizante/fertilizanteUreaS.webp"],
        category: 0
    },

    // Herramientas

    {
        name: 'Bolso para Herramientas',
        slug: "bolsoHerramientas",
        short_description: "Bolso para herramientas con medidas de 16 pulgadas, marca Truper",
        description: "",
        price: 1000,
        rate: 4.5,
        company: 2,
        images: ["/products/Herramientas/bolsoHerramientas.webp"],
        category: 2
    },

    {
        name: 'Cortador Manual',
        slug: "cortadoraManual",
        short_description: "Bolso para herramientas con medidas de 16 pulgadas, marca Truper",
        description: "",
        price: 1500,
        rate: 4.5,
        company: 2,
        images: ["/products/Herramientas/cortadoraManual.webp"],
        category: 2
    },

    {
        name: 'Escobillon Plastico',
        slug: "escobillon",
        short_description: "Escobillón plástico flexible con medidas de 48 pulgadas, con mango de madera y 22 dientes, marca Truper",
        description: "",
        price: 300,
        rate: 4.5,
        company: 2,
        images: ["/products/Herramientas/escobillon.webp"],
        category: 2
    },

    {
        name: 'Juego de Herramientas para Niños',
        slug: "herramientasJardinNinos",
        short_description: "Juego de herramientas de jardin para niños de 9 piezas marca ACE",
        description: "",
        price: 900,
        rate: 4.5,
        company: 2,
        images: ["/products/Herramientas/herramientasJardinNinos.webp"],
        category: 2
    },
    {
        name: 'Manguera 1/2',
        slug: "manguera",
        short_description: "Manguera con medidas de 1/2 pulgadas x 10 metros, de tipo liviano y para uso en jardín, marca Pretul",
        description: "",
        price: 160,
        rate: 4.5,
        company: 2,
        images: ["/products/Herramientas/manguera.webp"],
        category: 2
    },

    {
        name: 'Motobomba a Gasolina',
        slug: "motobomba",
        short_description: "Motobomba a gasolina Truper para riego agrícola, 4x4 pulgadas, 9 hp de potencia.",
        description: "",
        price: 21740,
        rate: 4.5,
        company: 2,
        images: ["/products/Herramientas/motobomba.webp"],
        category: 2
    },
    {
        name: 'Sierra Jardin 12, Mango de Madera',
        slug: "sierraJardin",
        short_description: "Sierra para podar jardin con medidas de 12 pulgadas, con mango de madera, marca Imacasa.",
        description: "",
        price: 21740,
        rate: 4.5,
        company: 2,
        images: ["/products/Herramientas/sierraJardin.webp"],
        category: 2
    },

    //Semillas
    {
        name: 'Semillas Brocoli',
        slug: "semillasBrocoli",
        short_description: "Semilla de brócoli en presentación de 2 gramos",
        description: "",
        price: 170,
        rate: 4.5,
        company: 3,
        images: ["/products/Semillas/semillasBrocoli.webp"],
        category: 3
    },
    {
        name: 'Semillas Cebolla',
        slug: "semillasCebolla",
        short_description: "Semillas de cebolla con ciclo de cosecha de 4 meses, disponibles en presentación de 2 gramos.",
        description: "",
        price: 170,
        rate: 4.5,
        company: 3,
        images: ["/products/Semillas/semillasCebolla.webp"],
        category: 3
    },
    {
        name: 'Semillas Chile',
        slug: "semillasChile",
        short_description: "Semillas de chile jalapeño con ciclo de cosecha de 70 días, disponibles en presentación de 2 gramos.",
        description: "",
        price: 170,
        rate: 4.5,
        company: 3,
        images: ["/products/Semillas/semillasChile.webp"],
        category: 3
    },
    {
        name: 'Semillas Chiltoma',
        slug: "semillasChiltoma",
        short_description: "Semilla de chiltoma en presentación de 2 gramos",
        description: "",
        price: 170,
        rate: 4.5,
        company: 3,
        images: ["/products/Semillas/semillasChiltoma.webp"],
        category: 3
    },
    {
        name: 'Semillas Espinaca',
        slug: "semillasEspinaca",
        short_description: "Semilla de espinaca en presentación de 2 gramos",
        description: "",
        price: 170,
        rate: 4.5,
        company: 3,
        images: ["/products/Semillas/semillasEspinaca.webp"],
        category: 3
    },
    {
        name: 'Semillas Espinaca',
        slug: "semillasRabano",
        short_description: "Semillas de rábano con ciclo de cosecha de 6 semanas, disponibles en presentación de 2 gramos.",
        description: "",
        price: 170,
        rate: 4.5,
        company: 3,
        images: ["/products/Semillas/semillasRabano.webp"],
        category: 3
    },
    
];