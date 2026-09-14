const tasaB = 2.38;
const tasaB1 = 1.97;
const tasaC = 3.2;
const tasaC1 = 2.71;

// RC mes en curso (Septiembre)
const rc100 = 94339;
const rc200 = 100300;
const rc100h20 = 72746;
const rc200h20 = 75390;
const rc100m20 = 80898;
const rc200m20 = 85954;
const rcTdp = 145251;

// RC mes anterior (Agosto)
const rc100A = 92399;
const rc200A = 98237;
const rc100h20A = 71250;
const rc200h20A = 73840;
const rc100m20A = 79234;
const rc200m20A = 84186;
const rcTdpA = 142264;

//function guardarDato() {
//    const datoIngresado = document.getElementById("miInput").value;
//    console.log(datoIngresado); // Aquí puedes usar la constante como necesites

//    document.getElementById("suma").textContent = datoIngresado;
//}

//-------------------------------------------------------------------------------------------------
//funciones mes en curso

function micro100() {
  const datoIngresado = document.getElementById("miInput").value;
  console.log(datoIngresado); // Aquí puedes usar la constante como necesites

  document.getElementById("textoRc").textContent = "RC Micro 100kms $  ";
  document.getElementById("cobRc").textContent = rc100;
  document.getElementById("textoB").textContent =
    "Cobertura B Micro 100kms $  ";
  document.getElementById("cobB").textContent = Math.round(
    datoIngresado * tasaB + rc100,
  );
  document.getElementById("textoB1").textContent =
    "Cobertura B1 Micro 100kms $  ";
  document.getElementById("cobB1").textContent = Math.round(
    datoIngresado * tasaB1 + rc100,
  );
  document.getElementById("textoC").textContent =
    "Cobertura C Micro 100kms $  ";
  document.getElementById("cobC").textContent = Math.round(
    datoIngresado * tasaC + rc100,
  );
  document.getElementById("textoC1").textContent =
    "Cobertura C1 Micro 100kms $  ";
  document.getElementById("cobC1").textContent = Math.round(
    datoIngresado * tasaC1 + rc100,
  );
}

function micro200() {
  const datoIngresado = document.getElementById("miInput").value;
  console.log(datoIngresado); // Aquí puedes usar la constante como necesites

  document.getElementById("textoRc").textContent = "RC Micro 200kms $  ";
  document.getElementById("cobRc").textContent = rc200;
  document.getElementById("textoB").textContent =
    "Cobertura B Micro 200kms $  ";
  document.getElementById("cobB").textContent = Math.round(
    datoIngresado * tasaB + rc200,
  );
  document.getElementById("textoB1").textContent =
    "Cobertura B1 Micro 200kms $  ";
  document.getElementById("cobB1").textContent = Math.round(
    datoIngresado * tasaB1 + rc200,
  );
  document.getElementById("textoC").textContent =
    "Cobertura C Micro 200kms $  ";
  document.getElementById("cobC").textContent = Math.round(
    datoIngresado * tasaC + rc200,
  );
  document.getElementById("textoC1").textContent =
    "Cobertura C1 Micro 200kms $  ";
  document.getElementById("cobC1").textContent = Math.round(
    datoIngresado * tasaC1 + rc200,
  );
}

function mini100() {
  const datoIngresado = document.getElementById("miInput").value;
  console.log(datoIngresado); // Aquí puedes usar la constante como necesites

  document.getElementById("textoRc").textContent =
    "RC Minibus 100kms hasta 20 asientos $  ";
  document.getElementById("cobRc").textContent = rc100h20;
  document.getElementById("textoB").textContent =
    "Cobertura B Minibus 100kms hasta 20 asientos $  ";
  document.getElementById("cobB").textContent = Math.round(
    datoIngresado * tasaB + rc100h20,
  );
  document.getElementById("textoB1").textContent =
    "Cobertura B1 Minibus 100kms hasta 20 asientos $  ";
  document.getElementById("cobB1").textContent = Math.round(
    datoIngresado * tasaB1 + rc100h20,
  );
  document.getElementById("textoC").textContent =
    "Cobertura C Minibus 100kms hasta 20 asientos $  ";
  document.getElementById("cobC").textContent = Math.round(
    datoIngresado * tasaC + rc100h20,
  );
  document.getElementById("textoC1").textContent =
    "Cobertura C1 Minibus 100kms hasta 20 asientos $  ";
  document.getElementById("cobC1").textContent = Math.round(
    datoIngresado * tasaC1 + rc100h20,
  );
}

function mini200() {
  const datoIngresado = document.getElementById("miInput").value;
  console.log(datoIngresado); // Aquí puedes usar la constante como necesites

  document.getElementById("textoRc").textContent =
    "RC Minibus 200kms hasta 20 asientos $  ";
  document.getElementById("cobRc").textContent = rc200h20;
  document.getElementById("textoB").textContent =
    "Cobertura B Minibus 200kms hasta 20 asientos $  ";
  document.getElementById("cobB").textContent = Math.round(
    datoIngresado * tasaB + rc200h20,
  );
  document.getElementById("textoB1").textContent =
    "Cobertura B1 Minibus 200kms hasta 20 asientos $  ";
  document.getElementById("cobB1").textContent = Math.round(
    datoIngresado * tasaB1 + rc200h20,
  );
  document.getElementById("textoC").textContent =
    "Cobertura C Minibus 200kms hasta 20 asientos $  ";
  document.getElementById("cobC").textContent = Math.round(
    datoIngresado * tasaC + rc200h20,
  );
  document.getElementById("textoC1").textContent =
    "Cobertura C1 Minibus 200kms hasta 20 asientos $  ";
  document.getElementById("cobC1").textContent = Math.round(
    datoIngresado * tasaC1 + rc200h20,
  );
}

function mini100mas() {
  const datoIngresado = document.getElementById("miInput").value;
  console.log(datoIngresado); // Aquí puedes usar la constante como necesites

  document.getElementById("textoRc").textContent =
    "RC Minibus 100kms mas de 20 asientos $  ";
  document.getElementById("cobRc").textContent = rc100m20;
  document.getElementById("textoB").textContent =
    "Cobertura B Minibus 100kms mas de 20 asientos $  ";
  document.getElementById("cobB").textContent = Math.round(
    datoIngresado * tasaB + rc100m20,
  );
  document.getElementById("textoB1").textContent =
    "Cobertura B1 Minibus 100kms mas de 20 asientos $  ";
  document.getElementById("cobB1").textContent = Math.round(
    datoIngresado * tasaB1 + rc100m20,
  );
  document.getElementById("textoC").textContent =
    "Cobertura C Minibus 100kms mas de 20 asientos $  ";
  document.getElementById("cobC").textContent = Math.round(
    datoIngresado * tasaC + rc100m20,
  );
  document.getElementById("textoC1").textContent =
    "Cobertura C1 Minibus 100kms mas de 20 asientos $  ";
  document.getElementById("cobC1").textContent = Math.round(
    datoIngresado * tasaC1 + rc100m20,
  );
}

function mini200mas() {
  const datoIngresado = document.getElementById("miInput").value;
  console.log(datoIngresado); // Aquí puedes usar la constante como necesites

  document.getElementById("textoRc").textContent =
    "RC Minibus 200kms mas de 20 asientos $  ";
  document.getElementById("cobRc").textContent = rc200m20;
  document.getElementById("textoB").textContent =
    "Cobertura B Minibus 200kms mas de 20 asientos $  ";
  document.getElementById("cobB").textContent = Math.round(
    datoIngresado * tasaB + rc200m20,
  );
  document.getElementById("textoB1").textContent =
    "Cobertura B1 Minibus 200kms mas de 20 asientos $  ";
  document.getElementById("cobB1").textContent = Math.round(
    datoIngresado * tasaB1 + rc200m20,
  );
  document.getElementById("textoC").textContent =
    "Cobertura C Minibus 200kms mas de 20 asientos $  ";
  document.getElementById("cobC").textContent = Math.round(
    datoIngresado * tasaC + rc200m20,
  );
  document.getElementById("textoC1").textContent =
    "Cobertura C1 Minibus 200kms mas de 20 asientos $  ";
  document.getElementById("cobC1").textContent = Math.round(
    datoIngresado * tasaC1 + rc200m20,
  );
}

function miniTdp() {
  const datoIngresado = document.getElementById("miInput").value;
  console.log(datoIngresado); // Aquí puedes usar la constante como necesites

  document.getElementById("textoRc").textContent =
    "RC Minibus todo el pais $  ";
  document.getElementById("cobRc").textContent = rcTdp;
  document.getElementById("textoB").textContent =
    "Cobertura B Minibus todo el pais $  ";
  document.getElementById("cobB").textContent = Math.round(
    datoIngresado * tasaB + rcTdp,
  );
  document.getElementById("textoB1").textContent =
    "Cobertura B1 Minibus todo el pais $  ";
  document.getElementById("cobB1").textContent = Math.round(
    datoIngresado * tasaB1 + rcTdp,
  );
  document.getElementById("textoC").textContent =
    "Cobertura C Minibus todo el pais $  ";
  document.getElementById("cobC").textContent = Math.round(
    datoIngresado * tasaC + rcTdp,
  );
  document.getElementById("textoC1").textContent =
    "Cobertura C1 Minibus todo el pais $  ";
  document.getElementById("cobC1").textContent = Math.round(
    datoIngresado * tasaC1 + rcTdp,
  );
}

//-----------------------------------------------------------------------------------------------
// funciones mes antrior (julio)

function micro100A() {
  const datoIngresado = document.getElementById("miInput").value;
  console.log(datoIngresado); // Aquí puedes usar la constante como necesites

  document.getElementById("textoRc").textContent = "RC Micro 100kms $  ";
  document.getElementById("cobRc").textContent = rc100A;
  document.getElementById("textoB").textContent =
    "Cobertura B Micro 100kms $  ";
  document.getElementById("cobB").textContent = Math.round(
    datoIngresado * tasaB + rc100A,
  );
  document.getElementById("textoB1").textContent =
    "Cobertura B1 Micro 100kms $  ";
  document.getElementById("cobB1").textContent = Math.round(
    datoIngresado * tasaB1 + rc100A,
  );
  document.getElementById("textoC").textContent =
    "Cobertura C Micro 100kms $  ";
  document.getElementById("cobC").textContent = Math.round(
    datoIngresado * tasaC + rc100A,
  );
  document.getElementById("textoC1").textContent =
    "Cobertura C1 Micro 100kms $  ";
  document.getElementById("cobC1").textContent = Math.round(
    datoIngresado * tasaC1 + rc100A,
  );
}

function micro200A() {
  const datoIngresado = document.getElementById("miInput").value;
  console.log(datoIngresado); // Aquí puedes usar la constante como necesites

  document.getElementById("textoRc").textContent = "RC Micro 200kms $  ";
  document.getElementById("cobRc").textContent = rc200A;
  document.getElementById("textoB").textContent =
    "Cobertura B Micro 200kms $  ";
  document.getElementById("cobB").textContent = Math.round(
    datoIngresado * tasaB + rc200A,
  );
  document.getElementById("textoB1").textContent =
    "Cobertura B1 Micro 200kms $  ";
  document.getElementById("cobB1").textContent = Math.round(
    datoIngresado * tasaB1 + rc200A,
  );
  document.getElementById("textoC").textContent =
    "Cobertura C Micro 200kms $  ";
  document.getElementById("cobC").textContent = Math.round(
    datoIngresado * tasaC + rc200A,
  );
  document.getElementById("textoC1").textContent =
    "Cobertura C1 Micro 200kms $  ";
  document.getElementById("cobC1").textContent = Math.round(
    datoIngresado * tasaC1 + rc200A,
  );
}

function mini100A() {
  const datoIngresado = document.getElementById("miInput").value;
  console.log(datoIngresado); // Aquí puedes usar la constante como necesites

  document.getElementById("textoRc").textContent =
    "RC Minibus 100kms hasta 20 asientos $  ";
  document.getElementById("cobRc").textContent = rc100h20A;
  document.getElementById("textoB").textContent =
    "Cobertura B Minibus 100kms hasta 20 asientos $  ";
  document.getElementById("cobB").textContent = Math.round(
    datoIngresado * tasaB + rc100h20A,
  );
  document.getElementById("textoB1").textContent =
    "Cobertura B1 Minibus 100kms hasta 20 asientos $  ";
  document.getElementById("cobB1").textContent = Math.round(
    datoIngresado * tasaB1 + rc100h20A,
  );
  document.getElementById("textoC").textContent =
    "Cobertura C Minibus 100kms hasta 20 asientos $  ";
  document.getElementById("cobC").textContent = Math.round(
    datoIngresado * tasaC + rc100h20A,
  );
  document.getElementById("textoC1").textContent =
    "Cobertura C1 Minibus 100kms hasta 20 asientos $  ";
  document.getElementById("cobC1").textContent = Math.round(
    datoIngresado * tasaC1 + rc100h20A,
  );
}

function mini200A() {
  const datoIngresado = document.getElementById("miInput").value;
  console.log(datoIngresado); // Aquí puedes usar la constante como necesites

  document.getElementById("textoRc").textContent =
    "RC Minibus 200kms hasta 20 asientos $  ";
  document.getElementById("cobRc").textContent = rc200h20A;
  document.getElementById("textoB").textContent =
    "Cobertura B Minibus 200kms hasta 20 asientos $  ";
  document.getElementById("cobB").textContent = Math.round(
    datoIngresado * tasaB + rc200h20A,
  );
  document.getElementById("textoB1").textContent =
    "Cobertura B1 Minibus 200kms hasta 20 asientos $  ";
  document.getElementById("cobB1").textContent = Math.round(
    datoIngresado * tasaB1 + rc200h20A,
  );
  document.getElementById("textoC").textContent =
    "Cobertura C Minibus 200kms hasta 20 asientos $  ";
  document.getElementById("cobC").textContent = Math.round(
    datoIngresado * tasaC + rc200h20A,
  );
  document.getElementById("textoC1").textContent =
    "Cobertura C1 Minibus 200kms hasta 20 asientos $  ";
  document.getElementById("cobC1").textContent = Math.round(
    datoIngresado * tasaC1 + rc200h20A,
  );
}

function mini100masA() {
  const datoIngresado = document.getElementById("miInput").value;
  console.log(datoIngresado); // Aquí puedes usar la constante como necesites

  document.getElementById("textoRc").textContent =
    "RC Minibus 100kms mas de 20 asientos $  ";
  document.getElementById("cobRc").textContent = rc100m20A;
  document.getElementById("textoB").textContent =
    "Cobertura B Minibus 100kms mas de 20 asientos $  ";
  document.getElementById("cobB").textContent = Math.round(
    datoIngresado * tasaB + rc100m20A,
  );
  document.getElementById("textoB1").textContent =
    "Cobertura B1 Minibus 100kms mas de 20 asientos $  ";
  document.getElementById("cobB1").textContent = Math.round(
    datoIngresado * tasaB1 + rc100m20A,
  );
  document.getElementById("textoC").textContent =
    "Cobertura C Minibus 100kms mas de 20 asientos $  ";
  document.getElementById("cobC").textContent = Math.round(
    datoIngresado * tasaC + rc100m20A,
  );
  document.getElementById("textoC1").textContent =
    "Cobertura C1 Minibus 100kms mas de 20 asientos $  ";
  document.getElementById("cobC1").textContent = Math.round(
    datoIngresado * tasaC1 + rc100m20A,
  );
}

function mini200masA() {
  const datoIngresado = document.getElementById("miInput").value;
  console.log(datoIngresado); // Aquí puedes usar la constante como necesites

  document.getElementById("textoRc").textContent =
    "RC Minibus 200kms mas de 20 asientos $  ";
  document.getElementById("cobRc").textContent = rc200m20A;
  document.getElementById("textoB").textContent =
    "Cobertura B Minibus 200kms mas de 20 asientos $  ";
  document.getElementById("cobB").textContent = Math.round(
    datoIngresado * tasaB + rc200m20A,
  );
  document.getElementById("textoB1").textContent =
    "Cobertura B1 Minibus 200kms mas de 20 asientos $  ";
  document.getElementById("cobB1").textContent = Math.round(
    datoIngresado * tasaB1 + rc200m20A,
  );
  document.getElementById("textoC").textContent =
    "Cobertura C Minibus 200kms mas de 20 asientos $  ";
  document.getElementById("cobC").textContent = Math.round(
    datoIngresado * tasaC + rc200m20A,
  );
  document.getElementById("textoC1").textContent =
    "Cobertura C1 Minibus 200kms mas de 20 asientos $  ";
  document.getElementById("cobC1").textContent = Math.round(
    datoIngresado * tasaC1 + rc200m20A,
  );
}

function miniTdpA() {
  const datoIngresado = document.getElementById("miInput").value;
  console.log(datoIngresado); // Aquí puedes usar la constante como necesites

  document.getElementById("textoRc").textContent =
    "RC Minibus todo el pais $  ";
  document.getElementById("cobRc").textContent = rcTdpA;
  document.getElementById("textoB").textContent =
    "Cobertura B Minibus todo el pais $  ";
  document.getElementById("cobB").textContent = Math.round(
    datoIngresado * tasaB + rcTdpA,
  );
  document.getElementById("textoB1").textContent =
    "Cobertura B1 Minibus todo el pais $  ";
  document.getElementById("cobB1").textContent = Math.round(
    datoIngresado * tasaB1 + rcTdpA,
  );
  document.getElementById("textoC").textContent =
    "Cobertura C Minibus todo el pais $  ";
  document.getElementById("cobC").textContent = Math.round(
    datoIngresado * tasaC + rcTdpA,
  );
  document.getElementById("textoC1").textContent =
    "Cobertura C1 Minibus todo el pais $  ";
  document.getElementById("cobC1").textContent = Math.round(
    datoIngresado * tasaC1 + rcTdpA,
  );
}

let sumas = [
  { anio: "Año", suma: "Suma asegurada" },
  { anio: "2000", suma: "$10.000.000" },
  { anio: "2001", suma: "$12.000.000" },
  { anio: "2002", suma: "$13.000.000" },
  { anio: "2003", suma: "$14.000.000" },
  { anio: "2004", suma: "$15.000.000" },
  { anio: "2005", suma: "$16.000.000" },
  { anio: "2006", suma: "$18.000.000" },
  { anio: "2007", suma: "$19.000.000" },
  { anio: "2008", suma: "$20.000.000" },
  { anio: "2009", suma: "$22.000.000" },
  { anio: "2010", suma: "$24.000.000" },
  { anio: "2011", suma: "$26.000.000" },
  { anio: "2012", suma: "$28.000.000" },
  { anio: "2013", suma: "$30.000.000" },
];

function mostrarSumas() {
  let anios = "";
  //Recorremos el arreglo de objetos
  sumas.map((item) => {
    //Accedemos a su contenido
    anios += `<tr>
  <td>${item.anio}</td>
  <td>${item.suma}</td>
  </tr>`;
  });

  //Dibujamos la informacion
  document.getElementById("sa").innerHTML = anios;

  //        const anioProv = sumas[i].anio;
  //        const saProv = sumas[i].suma;
  //    document.getElementById("year").textContent = anioProv;
  //    document.getElementById("sa").textContent = saProv;
}
