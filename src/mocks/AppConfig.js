import green from "../assets/produtores/green.png";
import salad from "../assets/produtores/salad.png";
import grow from "../assets/produtores/grow.png";
import jennyJack from "../assets/produtores/jenny-jack.png";
import potager from "../assets/produtores/potager.png";

const gerarNumero = (min, max) => {
    return Math.floor(Math.random() * (max-min + 1) + min);
}

const AppConfig = {
    topo: {
        boasVindas: "Olá Yury",
        legenda: "Encontre os melhores Produtores"
    },
    produtores: {
        titulo: "Produtores",
        lista: [
            {
                nome: "Green",
                imagem: green,
                distancia: `${gerarNumero(1,500)}m`,
                estrelas: gerarNumero(1,5)
            },
            {
                nome: "Salad",
                imagem: salad,
                distancia: `${gerarNumero(1,500)}m`,
                estrelas: gerarNumero(1,5)
            },
            {
                nome: "Jenny Jack Farm",
                imagem: jennyJack,
                distancia: `${gerarNumero(1,500)}m`,
                estrelas: gerarNumero(1,5)
            },
            {
                nome: "Grow",
                imagem: grow,
                distancia: `${gerarNumero(1,500)}m`,
                estrelas: gerarNumero(1,5)
            },
            {
                nome: "Potager",
                imagem: potager,
                distancia: `${gerarNumero(1,500)}m`,
                estrelas: gerarNumero(1,5)
            },
        ]
    }
}

export default AppConfig;