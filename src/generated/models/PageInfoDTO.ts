// tslint:disable
/**
 * Open Hospital API Documentation
 * Open Hospital API Documentation
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * @export
 * @interface PageInfoDTO
 */
export interface PageInfoDTO {
    /**
     * @type {number}
     * @memberof PageInfoDTO
     */
    size?: number;
    /**
     * @type {number}
     * @memberof PageInfoDTO
     */
    page?: number;
    /**
     * @type {number}
     * @memberof PageInfoDTO
     */
    nbOfElements?: number;
    /**
     * @type {number}
     * @memberof PageInfoDTO
     */
    totalPages?: number;
    /**
     * @type {number}
     * @memberof PageInfoDTO
     */
    totalNbOfElements?: number;
    /**
     * @type {boolean}
     * @memberof PageInfoDTO
     */
    hasPreviousPage?: boolean;
    /**
     * @type {boolean}
     * @memberof PageInfoDTO
     */
    hasNextPage?: boolean;
}
