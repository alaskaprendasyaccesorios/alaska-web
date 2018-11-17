import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  public catalogo: any;
  private inicio: any;
  public bisuteria: any;
  constructor(private http: HttpClient) {
    this.inicio = [{
      "id": "2",
      "referencia": "W 145",
      "precioFabrica": " $36,000 ",
      "precio": " $ 51,429 ",
      "talla": "M  L",
      "titulo": "Bisuteria",
      "descripcion": "Bisuteria personalizada hecha a la medida, visita nuestro catalogo de bisuteria",
      "adicional": "N/A",
      "imagen": "../../assets/images/bisuteria/Arete Azul 4 mil .jpg"
    },
    {
      "id": "1",
      "referencia": "W146",
      "precioFabrica": " $29,000 ",
      "precio": " $ 41,429 ",
      "talla": "UNICA",
      "titulo": "Busos",
      "descripcion": "Busos para hombres y mujeres visita nuestro catalogo de busos",
      "adicional": "Ombliguero",
      "imagen": "../../assets/images/busos/Referencia 156.png"
    }];
    this.bisuteria = [
      {
        "id": "1",
        "referencia": "A100",
        "precioFabrica": "Amazonita ",
        "descripcion": "Aguamarina",
        "precio": " $4,000 ",
        "adicional": "Arete Azul 4 mil .jpg",
        "talla": "No Aplica",
        "imagen": "../../assets/images/bisuteria/Arete Azul 4 mil .jpg"
      },
      {
        "id": "2",
        "referencia": "A101",
        "precioFabrica": "Arete Redondo",
        "descripcion": "Blanco",
        "precio": " $15,000 ",
        "adicional": "Arete Redondo Blanco 15 mil.jpg",
        "talla": "No Aplica",
        "imagen": "../../assets/images/bisuteria/Arete Redondo Blanco 15 mil.jpg"
      },
      {
        "id": "3",
        "referencia": "B100",
        "precioFabrica": "Borlas",
        "descripcion": "Amarilla",
        "precio": " $10,000 ",
        "adicional": "Arete Borla Amarilla 10 mil.jpg",
        "talla": "No Aplica",
        "imagen": "../../assets/images/bisuteria/Arete Borla Amarilla 10 mil.jpg"
      },
      {
        "id": "4",
        "referencia": "B101",
        "precioFabrica": "Borla",
        "descripcion": "Beige",
        "precio": " $10,000 ",
        "adicional": "Arete Borla Beige 10 mil.jpg",
        "talla": "No Aplica",
        "imagen": "../../assets/images/bisuteria/Arete Borla Beige 10 mil.jpg"
      },
      {
        "id": "5",
        "referencia": "B102",
        "precioFabrica": "Borla ",
        "descripcion": "Gris",
        "precio": " $10,000 ",
        "adicional": "Arete Borla Gris 10 mil.jpg",
        "talla": "No Aplica",
        "imagen": "../../assets/images/bisuteria/Arete Borla Gris 10 mil.jpg"
      },
      {
        "id": "6",
        "referencia": "B103",
        "precioFabrica": "Borla",
        "descripcion": "Negra",
        "precio": " $10,000 ",
        "adicional": "Arete Borla negra valor  10000 .jpg",
        "talla": "No Aplica",
        "imagen": "../../assets/images/bisuteria/Arete Borla negra valor  10000 .jpg"
      },
      {
        "id": "7",
        "referencia": "B104",
        "precioFabrica": "Borla ",
        "descripcion": "Roja",
        "precio": " $10,000 ",
        "adicional": "Arete Borla Roja 10 mil.jpg",
        "talla": "No Aplica",
        "imagen": "../../assets/images/bisuteria/Arete Borla Roja 10 mil.jpg"
      },
      {
        "id": "8",
        "referencia": "B105",
        "precioFabrica": "Borla",
        "descripcion": "Café",
        "precio": " $17,000 ",
        "adicional": "aretes de borla cafe 17 mil.jpg",
        "talla": "No Aplica",
        "imagen": "../../assets/images/bisuteria/aretes de borla cafe 17 mil.jpg"
      },
      {
        "id": "9",
        "referencia": "B106",
        "precioFabrica": "Borla Mariposa",
        "descripcion": "Beige",
        "precio": " $13,000 ",
        "adicional": "aretes mariposa beige unico par valor 13 mil.jpg",
        "talla": "No Aplica",
        "imagen": "../../assets/images/bisuteria/aretes mariposa beige unico par valor 13 mil.jpg"
      },
      {
        "id": "10",
        "referencia": "C100",
        "precioFabrica": "Collar en V",
        "descripcion": "Rojo",
        "precio": " $15,000 ",
        "adicional": "Collar color Rojo 15 mil .jpg",
        "talla": "No Aplica",
        "imagen": "../../assets/images/bisuteria/Collar color Rojo 15 mil .jpg"
      },
      {
        "id": "11",
        "referencia": "C101",
        "precioFabrica": "mostacilla checa ",
        "descripcion": "Dorada",
        "precio": " $20,000 ",
        "adicional": "Collar mostacilla  20 mil (1).jpg",
        "talla": "No Aplica",
        "imagen": "../../assets/images/bisuteria/Collar mostacilla  20 mil (1).jpg"
      },
      {
        "id": "12",
        "referencia": "C102",
        "precioFabrica": "mostacilla checa ",
        "descripcion": "Rosado",
        "precio": " $20,000 ",
        "adicional": "Collar mostacilla Rosada  20 mil (2).jpg",
        "talla": "No Aplica",
        "imagen": "../../assets/images/bisuteria/Collar mostacilla Rosada  20 mil (2).jpg"
      },
      {
        "id": "13",
        "referencia": "CJ100",
        "precioFabrica": "mostacilla checa ",
        "descripcion": "negro- blanco- dorado",
        "precio": " $28,000 ",
        "adicional": "collar mosacilla checa, pulsera de murano con dije de hoja y aretes de borla valor conjunto 28 mil.jpg",
        "talla": "No Aplica",
        "imagen": "../../assets/images/bisuteria/collar mosacilla checa, pulsera de murano con dije de hoja y aretes de borla valor conjunto 28 mil.jpg"
      },
      {
        "id": "14",
        "referencia": "CJ101",
        "precioFabrica": "Agatas",
        "descripcion": "Café",
        "precio": " $35,000 ",
        "adicional": "Juego de agatas redondas con dije de Hoja 32 mil.jpg",
        "talla": "No Aplica",
        "imagen": "../../assets/images/bisuteria/Juego de agatas redondas con dije de Hoja 32 mil.jpg"
      },
      {
        "id": "15",
        "referencia": "CJ102",
        "precioFabrica": "Murano",
        "descripcion": "Multicolor",
        "precio": " $30,000 ",
        "adicional": "juego de escapulario en murano 30 mil.jpg",
        "talla": "No Aplica",
        "imagen": "../../assets/images/bisuteria/juego de escapulario en murano 30 mil.jpg"
      },
      {
        "id": "16",
        "referencia": "CJ103",
        "precioFabrica": "Onix - Murano",
        "descripcion": "Negro",
        "precio": " $45,000 ",
        "adicional": "juego de murano y onix color negro valor 45 mil.jpg",
        "talla": "No Aplica",
        "imagen": "../../assets/images/bisuteria/juego de murano y onix color negro valor 45 mil.jpg"
      },
      {
        "id": "17",
        "referencia": "CJ104",
        "precioFabrica": "Murano- Coral",
        "descripcion": "Rojo",
        "precio": " $30,000 ",
        "adicional": "juego escapulario murano y piedra de coral 24 mil.jpg",
        "talla": "No Aplica",
        "imagen": "../../assets/images/bisuteria/juego escapulario murano y piedra de coral 24 mil.jpg"
      },
      {
        "id": "18",
        "referencia": "CJ105",
        "precioFabrica": "Opalo",
        "descripcion": "Azul",
        "precio": " $45,000 ",
        "adicional": "juego opalo con dije de arbol de la vida valor 45 mil.jpg",
        "talla": "No Aplica",
        "imagen": "../../assets/images/bisuteria/juego opalo con dije de arbol de la vida valor 45 mil.jpg"
      },
      {
        "id": "19",
        "referencia": "CJ106",
        "precioFabrica": "Murano- Rondelas- Amazonita",
        "descripcion": "Aguamarina",
        "precio": " $30,000 ",
        "adicional": "Juego amazonita murano y rondelas  30 mil.jpg",
        "talla": "No Aplica",
        "imagen": "../../assets/images/bisuteria/Juego amazonita murano y rondelas  30 mil.jpg"
      },
      {
        "id": "20",
        "referencia": "CJ107",
        "precioFabrica": "Amazonita- Perla ",
        "descripcion": "Azul y Blanco",
        "precio": " $30,000 ",
        "adicional": "Juego amazonita y perla azul blanco valor 30 mil.jpg",
        "talla": "No Aplica",
        "imagen": "../../assets/images/bisuteria/Juego amazonita y perla azul blanco valor 30 mil.jpg"
      },
      {
        "id": "21",
        "referencia": "J100",
        "precioFabrica": "juego pulsera y aretes Amatista",
        "descripcion": "Morado y gris",
        "precio": " $10,000 ",
        "adicional": "amatista pulsera y aretes color morado y gris  valor juego 10 mil pesos.jpg",
        "talla": "No Aplica",
        "imagen": "../../assets/images/bisuteria/amatista pulsera y aretes color morado y gris  valor juego 10 mil pesos.jpg"
      },
      {
        "id": "22",
        "referencia": "J101",
        "precioFabrica": "Juego pulsera amazonita y murano",
        "descripcion": "Aguamarina",
        "precio": " $10,000 ",
        "adicional": "amazonita y murano pulsera y aretes valor 10 mil.jpg",
        "talla": "No Aplica",
        "imagen": "../../assets/images/bisuteria/amazonita y murano pulsera y aretes valor 10 mil.jpg"
      },
      {
        "id": "23",
        "referencia": "J102",
        "precioFabrica": "Amatista ",
        "descripcion": "Morado- Transparente",
        "precio": " $10,000 ",
        "adicional": "pulsera con aretes 10 mil (1).jpg",
        "talla": "No Aplica",
        "imagen": "../../assets/images/bisuteria/pulsera con aretes 10 mil (1).jpg"
      },
      {
        "id": "24",
        "referencia": "J103",
        "precioFabrica": "Murano",
        "descripcion": "Blanco",
        "precio": " $10,000 ",
        "adicional": "pulsera con aretes 10 mil (2).jpg",
        "talla": "No Aplica",
        "imagen": "../../assets/images/bisuteria/pulsera con aretes 10 mil (2).jpg"
      },
      {
        "id": "25",
        "referencia": "J104",
        "precioFabrica": "Murano",
        "descripcion": "Transparente",
        "precio": " $10,000 ",
        "adicional": "pulsera con aretes 10 mil (3).jpg",
        "talla": "No Aplica",
        "imagen": "../../assets/images/bisuteria/pulsera con aretes 10 mil (3).jpg"
      },
      {
        "id": "26",
        "referencia": "J105",
        "precioFabrica": "Murano",
        "descripcion": "Multicolor",
        "precio": " $15,000 ",
        "adicional": "Pulsera y aretes murano con dije en cruz 15 mil.jpg",
        "talla": "No Aplica",
        "imagen": "../../assets/images/bisuteria/Pulsera y aretes murano con dije en cruz 15 mil.jpg"
      },
      {
        "id": "27",
        "referencia": "P100",
        "precioFabrica": "Pulsera Agata",
        "descripcion": "Transparante  y negro",
        "precio": " $15,000 ",
        "adicional": "agatas pulseras valor 15 mil.jpg",
        "talla": "No Aplica",
        "imagen": "../../assets/images/bisuteria/agatas pulseras valor 15 mil.jpg"
      },
      {
        "id": "28",
        "referencia": "P101",
        "precioFabrica": "Murano",
        "descripcion": "Azul",
        "precio": " $7,000 ",
        "adicional": "murano azul con dije libelula  valor 7 mil.jpg",
        "talla": "No Aplica",
        "imagen": "../../assets/images/bisuteria/murano azul con dije libelula  valor 7 mil.jpg"
      },
      {
        "id": "29",
        "referencia": "P102",
        "precioFabrica": "Agata- Murano",
        "descripcion": "Azul",
        "precio": " $7,000 ",
        "adicional": "Pulsera Agata plana Valor 7 mil.jpg",
        "talla": "No Aplica",
        "imagen": "../../assets/images/bisuteria/Pulsera Agata plana Valor 7 mil.jpg"
      },
      {
        "id": "30",
        "referencia": "P102",
        "precioFabrica": "Agata",
        "descripcion": "Blanco- Crema",
        "precio": " $7,000 ",
        "adicional": "Pulsera Blanca dije mano 7 mil .jpg",
        "talla": "No Aplica",
        "imagen": "../../assets/images/bisuteria/Pulsera Blanca dije mano 7 mil .jpg"
      },
      {
        "id": "31",
        "referencia": "P103",
        "precioFabrica": "Murano",
        "descripcion": "Rojo- Transparente",
        "precio": " $2,500 ",
        "adicional": "pulsera con nudo corredizo con dije de mariposa valor 2500.jpg",
        "talla": "No Aplica",
        "imagen": "../../assets/images/bisuteria/pulsera con nudo corredizo con dije de mariposa valor 2500.jpg"
      },
      {
        "id": "32",
        "referencia": "P104",
        "precioFabrica": "Agatas",
        "descripcion": "Café",
        "precio": " $17,000 ",
        "adicional": "pulsera de agatas valor 17 mil.jpg",
        "talla": "No Aplica",
        "imagen": "../../assets/images/bisuteria/pulsera de agatas valor 17 mil.jpg"
      },
      {
        "id": "33",
        "referencia": "P105",
        "precioFabrica": "Cadena Oro Golfi",
        "descripcion": "Oro",
        "precio": " $15,000 ",
        "adicional": "Pulsera Dije Esperanza 15 mil .jpg",
        "talla": "No Aplica",
        "imagen": "../../assets/images/bisuteria/Pulsera Dije Esperanza 15 mil .jpg"
      },
      {
        "id": "34",
        "referencia": "P106",
        "precioFabrica": "Rondelas - Gold Filed",
        "descripcion": "Azul y Blanco",
        "precio": " $10,000 ",
        "adicional": "pulsera elástica con rondelas y artes, herrajes en gold filled.jpg",
        "talla": "No Aplica",
        "imagen": "../../assets/images/bisuteria/pulsera elástica con rondelas y artes, herrajes en gold filled.jpg"
      },
      {
        "id": "35",
        "referencia": "P107",
        "precioFabrica": "Murano",
        "descripcion": "Verde",
        "precio": " $8,000 ",
        "adicional": "pulsera en murano color verde en alambre memoria valor 8 mil.jpg",
        "talla": "No Aplica",
        "imagen": "../../assets/images/bisuteria/pulsera en murano color verde en alambre memoria valor 8 mil.jpg"
      },
      {
        "id": "36",
        "referencia": "P108",
        "precioFabrica": "Murano",
        "descripcion": "Amarillo - Gris",
        "precio": " $6,000 ",
        "adicional": "pulsera en murano con dije nota musical valor 6 mil.jpg",
        "talla": "No Aplica",
        "imagen": "../../assets/images/bisuteria/pulsera en murano con dije nota musical valor 6 mil.jpg"
      },
      {
        "id": "37",
        "referencia": "P109",
        "precioFabrica": "Murano",
        "descripcion": "Azul",
        "precio": " $7,000 ",
        "adicional": "Pulsera libelula 7 mil.jpg",
        "talla": "No Aplica",
        "imagen": "../../assets/images/bisuteria/Pulsera libelula 7 mil.jpg"
      },
      {
        "id": "38",
        "referencia": "P110",
        "precioFabrica": "Murano",
        "descripcion": "Azul cristal",
        "precio": " $6,000 ",
        "adicional": "Pulsera Murano con Nudo corredizo 6 mil.jpg",
        "talla": "No Aplica",
        "imagen": "../../assets/images/bisuteria/Pulsera Murano con Nudo corredizo 6 mil.jpg"
      },
      {
        "id": "39",
        "referencia": "P111",
        "precioFabrica": "Murano",
        "descripcion": "Multicolor",
        "precio": " $7,000 ",
        "adicional": "Pulsera murano dije bici 7 mil .jpg",
        "talla": "No Aplica",
        "imagen": "../../assets/images/bisuteria/Pulsera murano dije bici 7 mil .jpg"
      },
      {
        "id": "40",
        "referencia": "P112",
        "precioFabrica": "Murano",
        "descripcion": "Beige - Negro",
        "precio": " $8,000 ",
        "adicional": "Pulsera Murano en alambre 8 mil.jpg",
        "talla": "No Aplica",
        "imagen": "../../assets/images/bisuteria/Pulsera Murano en alambre 8 mil.jpg"
      },
      {
        "id": "41",
        "referencia": "P113",
        "precioFabrica": "Murano",
        "descripcion": "Blanco y Beige",
        "precio": " $6,000 ",
        "adicional": "Pulsera Murano sencilla 6 mil.jpg",
        "talla": "No Aplica",
        "imagen": "../../assets/images/bisuteria/Pulsera Murano sencilla 6 mil.jpg"
      },
      {
        "id": "42",
        "referencia": "P114",
        "precioFabrica": "Agata",
        "descripcion": "Multicolor",
        "precio": " $6,000 ",
        "adicional": "Pulsera rondela nudo corredizo valor 6 mil.jpg",
        "talla": "No Aplica",
        "imagen": "../../assets/images/bisuteria/Pulsera rondela nudo corredizo valor 6 mil.jpg"
      },
      {
        "id": "43",
        "referencia": "T100",
        "precioFabrica": "Cadena Oro Golfi",
        "descripcion": "Oro",
        "precio": " $13,000 ",
        "adicional": "tobillera cadena de oro con dije mariposa valor 13 mil.jpg",
        "talla": "No Aplica",
        "imagen": "../../assets/images/bisuteria/tobillera cadena de oro con dije mariposa valor 13 mil.jpg"
      }
    ];
    this.catalogo = [
      {
        "id": "1",
        "referencia": "W 145",
        "precioFabrica": " $36,000 ",
        "precio": " $ 52.000 ",
        "talla": "M  L",
        "descripcion": "Vino tinto/ Negro",
        "adicional": "N/A",
        "imagen": "../../assets/images/busos/Referencia 145.png",
        "pago": "https://biz.payulatam.com/L0bbbe902CAC96D"
      },
      {
        "id": "2",
        "referencia": "W146",
        "precioFabrica": " $29,000 ",
        "precio": " $ 42.000",
        "talla": "UNICA",
        "descripcion": "Blanco/ Mostaza/ Negro",
        "adicional": "Ombliguero",
        "imagen": "../../assets/images/busos/Referencia 146.png"
      },
      {
        "id": "3",
        "referencia": "W147",
        "precioFabrica": " $36,000 ",
        "precio": " $ 52.000 ",
        "talla": "UNICA",
        "descripcion": "Rosa/ Gris/ Negro",
        "adicional": "N/A",
        "imagen": "../../assets/images/busos/Referencia 147.png"
      },
      {
        "id": "4",
        "referencia": "W 148",
        "precioFabrica": " $37,000 ",
        "precio": " $ 53.000 ",
        "talla": "UNICA",
        "descripcion": "Negro / Gris/Blanco",
        "adicional": "N/A",
        "imagen": "../../assets/images/busos/Referencia 148.png"
      },
      {
        "id": "5",
        "referencia": "W 149",
        "precioFabrica": " $25,000 ",
        "precio": " $ 36.000 ",
        "talla": "UNICA",
        "descripcion": "Vino tinto/ Negro/Rosa / Blanco",
        "adicional": "Cuello bandeja",
        "imagen": "../../assets/images/busos/Referencia 149.png"
      },
      {
        "id": "6",
        "referencia": "W 150",
        "precioFabrica": " $34,000 ",
        "precio": " $ 49.000 ",
        "talla": "UNICA",
        "descripcion": "Azul/ Blanco/ Vino tinto y Blanco / Rojo/ Negro",
        "adicional": "Los colores de esta referencia son 3 en forma vertical",
        "imagen": "../../assets/images/busos/Referencia 150.png"
      },
      {
        "id": "7",
        "referencia": "W 151",
        "precioFabrica": " $32,000 ",
        "precio": " $ 46.000 ",
        "talla": "M L",
        "descripcion": "Azul / Gris/ Negro",
        "adicional": "N/A",
        "imagen": "../../assets/images/busos/Referencia 151.png"
      },
      {
        "id": "8",
        "referencia": "W 152",
        "precioFabrica": " $40,000 ",
        "precio": " $ 57.000 ",
        "talla": "M L",
        "descripcion": "Gris/ Negro",
        "adicional": "N/A",
        "imagen": "../../assets/images/busos/Referencia 152.png"
      },
      {
        "id": "9",
        "referencia": "W 153",
        "precioFabrica": " $42,000 ",
        "precio": " $ 60,000 ",
        "talla": "UNICA",
        "descripcion": "Negro/ Gris/ Rojo",
        "adicional": "N/A",
        "imagen": "../../assets/images/busos/Referencia 153.png"
      },
      {
        "id": "10",
        "referencia": "W 154",
        "precioFabrica": " $33,000 ",
        "precio": " $ 47.000 ",
        "talla": "UNICA",
        "descripcion": "Negro/ Gris/ Rojo",
        "adicional": "Referencia sin botones a gusto,el cliente puede mandarlos colocar",
        "imagen": "../../assets/images/busos/Referencia 154.png"
      },
      {
        "id": "11",
        "referencia": "W 155",
        "precioFabrica": " $37,000 ",
        "precio": " $ 53.000",
        "talla": "UNICA",
        "descripcion": "gris con blanco/ negro/ Blanco",
        "adicional": "Referencia sin botones a gusto,el cliente puede mandarlos colocar",
        "imagen": "../../assets/images/busos/Referencia 155.png"
      },
      {
        "id": "12",
        "referencia": "W 156",
        "precioFabrica": " $30,000 ",
        "precio": " $ 43.000 ",
        "talla": "UNICA",
        "descripcion": "gris naranja y negro/  Blanco Verde naranja/ Blanco Rojo Negro",
        "adicional": "Buzo a rayas horizontales negro",
        "imagen": "../../assets/images/busos/Referencia 156.png"
      },
      {
        "id": "13",
        "referencia": "W156",
        "precioFabrica": " $35,000 ",
        "precio": " $ 50.000 ",
        "talla": "UNICA",
        "descripcion": "Mostaza/ Gris claro y oscuro",
        "adicional": "Vestido con escote en forma de equis en la espalda a la altura de la cintura",
        "imagen": "../../assets/images/busos/Referencia 156 V.png"
      },
      {
        "id": "14",
        "referencia": "W 157",
        "precioFabrica": " $36,000 ",
        "precio": " $ 52.000 ",
        "talla": "UNICA",
        "descripcion": "negro con morado/ Blanco con gris/ Rojo con Negro",
        "adicional": "Esta referencia cuenta con dos colores",
        "imagen": "../../assets/images/busos/Referencia 157.png"
      },
      {
        "id": "15",
        "referencia": "W 158",
        "precioFabrica": " $33,000 ",
        "precio": " $ 47.000 ",
        "talla": "M L",
        "descripcion": "Mangas de color: Mostaza, negro, gris claro y oscuro/ Negro, blanco, Gris,Rojo, Negro y azul/ Rosa, Mostaza, Negro, Violeta,Azul",
        "adicional": "Los colores variados en esta referencia cambian en sus mangas, sus colores dominantes son Verde ocsuro, azul y rosado",
        "imagen": "../../assets/images/busos/Referencia 158.png"
      },
      {
        "id": "16",
        "referencia": "W159",
        "precioFabrica": " $30,000 ",
        "precio": " $ 43.000 ",
        "talla": "M L",
        "descripcion": "Rosa/ Verde Aguamarina/ gris oscuro",
        "adicional": "N/A",
        "imagen": "../../assets/images/busos/Referencia 159.png"
      },
      {
        "id": "17",
        "referencia": "W 160",
        "precioFabrica": " $32,000 ",
        "precio": " $ 46.000 ",
        "talla": "M L",
        "descripcion": "Rosa/ Verde Aguamarina/ gris oscuro",
        "adicional": "Cuenta con un boton",
        "imagen": "../../assets/images/busos/Referencia 160.png"
      },
      {
        "id": "18",
        "referencia": "W 161",
        "precioFabrica": " $30,000 ",
        "precio": " $ 43.000 ",
        "talla": "4-6-8-10-12-14-16",
        "descripcion": "Palo de rosa/Gris claro/Rosado",
        "adicional": "Referencia niñas, cuenta con boton central",
        "imagen": "../../assets/images/busos/Referencia 161.png"
      },
      {
        "id": "19",
        "referencia": "W 162",
        "precioFabrica": " $35,000 ",
        "precio": " $ 50.000 ",
        "talla": "UNICA",
        "descripcion": "Negro / Blanco",
        "adicional": "Ruana con mangas completas",
        "imagen": "../../assets/images/busos/Referencia 162.png"
      },
      {
        "id": "20",
        "referencia": "W 163",
        "precioFabrica": " $38,000 ",
        "precio": " $ 54.000 ",
        "talla": "UNICA",
        "descripcion": "Café/ Gris con negro/ Gris",
        "adicional": "Ruana con mangas completas y boton en la parte superior",
        "imagen": "../../assets/images/busos/Referencia 163.png"
      },
      {
        "id": "21",
        "referencia": "W 164",
        "precioFabrica": " $40,000 ",
        "precio": " $ 57.000 ",
        "talla": "UNICA",
        "descripcion": "Negro/ Rosa/ Gris Claro",
        "adicional": "Ruana con mangas completas, cremallera y capota",
        "imagen": "../../assets/images/busos/Referencia 164.png"
      },
      {
        "id": "22",
        "referencia": "W 165",
        "precioFabrica": " $34,000 ",
        "precio": " $ 49.000 ",
        "talla": "UNICA",
        "descripcion": "Rosa/ Gris/Azul/ Palo de rosa",
        "adicional": "Referencia sin botones a gusto,el cliente puede mandarlos colocar",
        "imagen": "../../assets/images/busos/Referencia 165.png"
      },
      {
        "id": "23",
        "referencia": "W166",
        "precioFabrica": " $35,000 ",
        "precio": " $ 50.000 ",
        "talla": "M L",
        "descripcion": "Palo de rosa/  Fucsia/ Negro",
        "adicional": "N/A",
        "imagen": "../../assets/images/busos/Referencia 166.png"
      },
      {
        "id": "24",
        "referencia": "M 081",
        "precioFabrica": " $37,000 ",
        "precio": " $ 53.000 ",
        "talla": "S M L",
        "descripcion": "Negro/ Azul/ Gris Oscuro y claro",
        "adicional": "N/A",
        "imagen": "../../assets/images/busos/Referencia 081.png"
      },
      {
        "id": "25",
        "referencia": "M 082",
        "precioFabrica": " $39,000 ",
        "precio": " $ 56.000 ",
        "talla": "S M L",
        "descripcion": "Negro / Gris / Verde",
        "adicional": "N/A",
        "imagen": "../../assets/images/busos/Referencia 082.png"
      },
      {
        "id": "26",
        "referencia": "M 083",
        "precioFabrica": " $45,000 ",
        "precio": " $ 64.000 ",
        "talla": "S M L",
        "descripcion": "Azul/ Café/ Gris/ Negro",
        "adicional": "chaqueta forrada con bolsillos internos y externos",
        "imagen": "../../assets/images/busos/Referencia 083.png"
      },
      {
        "id": "27",
        "referencia": "M 084",
        "precioFabrica": " $40,000 ",
        "precio": " $ 57.000 ",
        "talla": "S M L",
        "descripcion": "Café/ Gris ",
        "adicional": "N/A",
        "imagen": "../../assets/images/busos/Referencia 084.png"
      },
      {
        "id": "28",
        "referencia": "M 085",
        "precioFabrica": " $38,000 ",
        "precio": " $ 54.000 ",
        "talla": "S M L",
        "descripcion": "Gris con negro/ Blanco  azul y vino tinto",
        "adicional": "Buzo a rayas horizontales",
        "imagen": "../../assets/images/busos/Referencia 085.png"
      },
      {
        "id": "29",
        "referencia": "M 086",
        "precioFabrica": " $38,000 ",
        "precio": " $ 54.000 ",
        "talla": "S M L",
        "descripcion": "Azul / Rojo",
        "adicional": "N/A",
        "imagen": "../../assets/images/busos/Referencia 086.png"
      },
      {
        "id": "30",
        "referencia": "M 087",
        "precioFabrica": " $41,000 ",
        "precio": " $ 59.000 ",
        "talla": "S M L",
        "descripcion": "Gris/ Vino tinto",
        "adicional": "N/A",
        "imagen": "../../assets/images/busos/Referencia 087.png"
      },
      {
        "id": "31",
        "referencia": "M 088",
        "precioFabrica": " $40,000 ",
        "precio": " $ 57.000 ",
        "talla": "UNICA",
        "descripcion": "Blanco/ Gris / Negro",
        "adicional": "Referencia sin botones a gusto,el cliente puede mandarlos colocar",
        "imagen": "../../assets/images/busos/Referencia 088.png"
      },
      {
        "id": "32",
        "referencia": "M 089",
        "precioFabrica": " $43,000 ",
        "precio": " $ 62.000 ",
        "talla": "S M L",
        "descripcion": "Gris/ Negro",
        "adicional": "N/A",
        "imagen": "../../assets/images/busos/Referencia 089.png"
      },
      {
        "id": "33",
        "referencia": "M 090",
        "precioFabrica": " $30,000 ",
        "precio": " $ 43.000 ",
        "talla": "4-6-8-10-12-14-16",
        "descripcion": "Negro / Gris",
        "adicional": "Referencia niño",
        "imagen": "../../assets/images/busos/Referencia 090.png"
      },
      {
        "id": "34",
        "referencia": "M 091",
        "precioFabrica": " $37,000 ",
        "precio": " $ 53.000 ",
        "talla": "M L",
        "descripcion": "Gris claro y oscuro/ Azul y Negro",
        "adicional": "Referencia Adulto hombre",
        "imagen": "../../assets/images/busos/Referencia 091.png"
      }
    ]
  }


  public enviarCorreo = (usuario: any): Observable<any> => {
    return this.http.post('https://alaskaservices20181116061640.azurewebsites.net/api/Values', usuario);
  }

  public obtenerInicio = () => {
    return this.inicio;
  }
  public obtenerBusos = () => {
    return this.catalogo;
  }
  public obtenerBisuteria = () => {
    return this.bisuteria;
  }
}
