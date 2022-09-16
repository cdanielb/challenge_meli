import http from "../utilities/http-backend";

/**
 * Función para llamar el servicio que retorna los resultados de la búsqueda del usuario
 * @param {string} query
 * @return {promise}
 */
class ItemsService {
  getQueryResult(query) {
    return new Promise((resolve, reject) => {
      http.get(`items?q=${query}`).then((r) => {
        r.data.success ? resolve(r.data) : reject([]);
      });
    });
  }

  /**
   * Función para llamar el servicio que retorna la información y descripción de un item
   * @param {string} idItem
   * @return {promise}
   */
  getItemInfo(idItem) {
    return new Promise((resolve, reject) => {
      http.get(`items/${idItem}`).then((r) => {
        r.data.success ? resolve(r.data) : reject([]);
      });
    });
  }
}

export default ItemsService;
