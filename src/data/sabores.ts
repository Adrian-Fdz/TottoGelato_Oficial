export type SaborCategoria = "gourmet" | "top" | "select";
export type SaborEstado = "nuevo" | "temporal" | null;
export type SaborEtiqueta = "sin-azucar";
export type SaborTipo = "frutas" | "cremosos" | "chocolate" | "sin-azucar";

export type Sabor = {
  id: number;
  nombre: string;
  descripcion: string;
  ingredientes: string;
  categoria: SaborCategoria;
  estado: SaborEstado;
  etiquetas: SaborEtiqueta[];
  tipo: SaborTipo;
  imagen: string;
  destacado: boolean;
};

export const sabores: Sabor[] = [
  {
    id: 1,
    nombre: "Pistache Siciliano",
    descripcion: "Auténtico pistache de Bronte tostado con un toque sutil de sal de mar y base cremosa de leche.",
    ingredientes: "Leche entera fresca, crema de leche, azúcar refinada, pasta de pistache de Bronte 100% pura, sal de mar fina y estabilizantes naturales.",
    categoria: "gourmet",
    estado: null,
    etiquetas: [],
    tipo: "cremosos",
    imagen: "/images/sabores/Pistache.webp",
    destacado: true,
  },
  {
    id: 2,
    nombre: "Mango con Maracuyá",
    descripcion: "Sorbete refrescante de mango Manila con un toque ácido de maracuyá fresco, elaborado en base agua.",
    ingredientes: "Agua purificada, pulpa de mango Manila natural, jugo de maracuyá fresco, fructosa y fibra vegetal.",
    categoria: "top",
    estado: "temporal",
    etiquetas: [],
    tipo: "frutas",
    imagen: "/images/sabores/Maracuya.webp",
    destacado: true,
  },
  {
    id: 3,
    nombre: "Chocolate Belga 70%",
    descripcion: "Sorbete espeso de chocolate belga oscuro 70%, intensamente cremoso y completamente libre de lácteos.",
    ingredientes: "Agua purificada, cacao en polvo belga 70%, pasta de cacao pura, azúcar de caña orgánica y un toque de vaina de vainilla natural.",
    categoria: "select",
    estado: "nuevo",
    etiquetas: [],
    tipo: "chocolate",
    imagen: "/images/sabores/ChocolateBelga.webp",
    destacado: true,
  },
  {
    id: 4,
    nombre: "Vainilla de Papantla",
    descripcion: "Gelato clásico elaborado con vainas de vainilla de Papantla seleccionadas y una rica base de crema y yemas.",
    ingredientes: "Leche entera fresca, crema de leche, azúcar de caña, yemas de huevo pasteurizadas, vainas de vainilla natural de Papantla y vainilla líquida concentrada.",
    categoria: "gourmet",
    estado: "nuevo",
    etiquetas: [],
    tipo: "cremosos",
    imagen: "/images/sabores/Pistache.webp",
    destacado: false,
  },
  {
    id: 5,
    nombre: "Fior di Latte",
    descripcion: "La máxima expresión de pureza: gelato suave elaborado únicamente con la mejor leche y crema dulce de la región.",
    ingredientes: "Leche entera fresca seleccionada, crema de leche fresca pasteurizada, azúcares y fécula de maíz natural.",
    categoria: "gourmet",
    estado: "temporal",
    etiquetas: [],
    tipo: "cremosos",
    imagen: "/images/sabores/Pistache.webp",
    destacado: false,
  },
  {
    id: 6,
    nombre: "Fresa Silvestre",
    descripcion: "Sorbete fresco e intenso de fresas orgánicas seleccionadas en su punto óptimo de dulzura.",
    ingredientes: "Fresas frescas orgánicas trituradas, agua purificada, azúcar de caña y fibra natural de cítricos.",
    categoria: "top",
    estado: "nuevo",
    etiquetas: [],
    tipo: "frutas",
    imagen: "/images/sabores/Maracuya.webp",
    destacado: false,
  },
  {
    id: 7,
    nombre: "Limón con Albahaca",
    descripcion: "Sorbete cítrico de limón Eureka aromatizado con hojas frescas de albahaca dulce.",
    ingredientes: "Agua purificada, jugo de limón Eureka recién exprimido, ralladura de limón orgánico, hojas de albahaca fresca e infusión de albahaca.",
    categoria: "top",
    estado: null,
    etiquetas: [],
    tipo: "frutas",
    imagen: "/images/sabores/Maracuya.webp",
    destacado: false,
  },
  {
    id: 8,
    nombre: "Chocolate Blanco con Frambuesa",
    descripcion: "Gelato cremoso de chocolate blanco con vetas artesanales de mermelada ácida de frambuesas frescas.",
    ingredientes: "Leche entera fresca, manteca de cacao pura, azúcar refinada, frambuesas frescas, pectina y jugo de limón fresco.",
    categoria: "select",
    estado: "temporal",
    etiquetas: [],
    tipo: "chocolate",
    imagen: "/images/sabores/ChocolateBelga.webp",
    destacado: false,
  },
  {
    id: 9,
    nombre: "Chocolate Amargo con Menta",
    descripcion: "Sorbete de chocolate oscuro con infusión natural de hojas de menta piperita fresca.",
    ingredientes: "Agua purificada, cacao belga puro procesado, azúcar de caña, infusión concentrada de hojas de menta fresca y mentol natural.",
    categoria: "select",
    estado: null,
    etiquetas: [],
    tipo: "chocolate",
    imagen: "/images/sabores/ChocolateBelga.webp",
    destacado: false,
  },
  {
    id: 10,
    nombre: "Matcha Japonés Sin Azúcar",
    descripcion: "Gelato intenso de té verde Matcha de grado ceremonial, endulzado con stevia natural.",
    ingredientes: "Leche entera fresca, té verde matcha japonés puro grado ceremonial, eritritol orgánico y extracto purificado de stevia.",
    categoria: "gourmet",
    estado: "nuevo",
    etiquetas: ["sin-azucar"],
    tipo: "sin-azucar",
    imagen: "/images/sabores/Pistache.webp",
    destacado: false,
  },
  {
    id: 11,
    nombre: "Coco Tostado Sin Azúcar",
    descripcion: "Cremoso gelato de coco natural con hojuelas de coco tostadas a mano y endulzado con eritritol.",
    ingredientes: "Leche de coco cremosa, coco rallado tostado, eritritol orgánico, goma guar y un toque de extracto natural de coco.",
    categoria: "top",
    estado: "temporal",
    etiquetas: ["sin-azucar"],
    tipo: "sin-azucar",
    imagen: "/images/sabores/Maracuya.webp",
    destacado: false,
  },
  {
    id: 12,
    nombre: "Avellana Piamonte Sin Azúcar",
    descripcion: "Gelato gourmet elaborado con pasta pura de avellana del Piamonte italiano y base láctea sin azúcar añadida.",
    ingredientes: "Leche entera, crema de leche, pasta pura de avellana IGP Piamonte, eritritol y stevia refinada.",
    categoria: "select",
    estado: null,
    etiquetas: ["sin-azucar"],
    tipo: "sin-azucar",
    imagen: "/images/sabores/ChocolateBelga.webp",
    destacado: false,
  },
];
