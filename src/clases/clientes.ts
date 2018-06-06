export interface DatosPersonales {
    nombre: string;
    apellidos: string;
    mail: string;
    telefono: string;
    telefono1: string;
    mail1: string;
    dni: string;
    nacionalidad: string;
    edad: number;
}

export interface Clientes {
    id: number;
    datosPersonales: DatosPersonales;
    inquilino: boolean;
    arrendatario: boolean;
    comprador: boolean;
    vendedor: boolean;
    comentarios: string;
    fechaEntrada: string;
    presupuestoMin: number;
    presupuestoMax: number;
    canalEntrada: number;
    accountHash: string;
    idAgente: number;
    idInmuebleInteres: number;
    idAgenteEntrada: number;
}