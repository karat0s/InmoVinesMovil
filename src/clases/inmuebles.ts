

    export interface Tipos {
        id: number;
        nombre: string;
        activa: number;
    }

    export interface Gestiones {
        id: number;
        nombre: string;
    }

    export interface Caracteristicas {
        nHabitaciones: number;
        nBanos: number;
        nAseos: number;
        m2Utiles: number;
        m2Construidos: number;
        m2Terreno: number;
        estadoConservacion: number;
        visible: boolean;
        zonaDeportiva: boolean;
        amueblado: boolean;
        garaje: boolean;
        calefaccion: boolean;
        aireAcondicionado: boolean;
        piscina: boolean;
        jardin: boolean;
        trastero: boolean;
        ascensor: boolean;
        terraza: boolean;
        pisoBanco: boolean;
        vpo: boolean;
        reservado: boolean;
        eficienciaEnergeticaTipo: string;
        eficienciaEnergeticaEntramite01: boolean;
        eficienciaEnergeticaFecvalid: string;
        eficienciaEnergeticaEmisiones: number;
        orientacionSolar: string;
        suelos: string;
        carpinteriaExterior: string;
        carpinteriaInterior: string;
    }

    export interface Inmuebles {
        id: number;
        referenciaCatastral: string;
        referencia: string;
        descripcion: string;
        textoReclamo: string;
        gastosComunidad: number;
        alturaEdificio: number;
        precioCompra: number;
        precioAlquiler: number;
        precioTraspaso: number;
        precioAlquilerOpcionCompra: number;
        tipos: Tipos;
        gestiones: Gestiones;
        caracteristicas: Caracteristicas;
        clientePropietario: number;
        idAgente: number;
    }



