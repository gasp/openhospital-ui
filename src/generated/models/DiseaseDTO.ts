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

import {
    DiseaseTypeDTO,
} from './';

/**
 * Class representing a disease
 * @export
 * @interface DiseaseDTO
 */
export interface DiseaseDTO {
    /**
     * Disease code
     * @type {string}
     * @memberof DiseaseDTO
     */
    code: string;
    /**
     * Disease description
     * @type {string}
     * @memberof DiseaseDTO
     */
    description: string;
    /**
     * @type {DiseaseTypeDTO}
     * @memberof DiseaseDTO
     */
    diseaseType: DiseaseTypeDTO;
    /**
     * Indicates whether the disease is an OPD disease
     * @type {boolean}
     * @memberof DiseaseDTO
     */
    opdInclude: boolean;
    /**
     * Indicates whether the disease is an IPD-IN disease
     * @type {boolean}
     * @memberof DiseaseDTO
     */
    ipdInInclude: boolean;
    /**
     * Indicates whether the disease is an IPD-OUT disease
     * @type {boolean}
     * @memberof DiseaseDTO
     */
    ipdOutInclude: boolean;
    /**
     * @type {number}
     * @memberof DiseaseDTO
     */
    readonly hashCode?: number;
    /**
     * Lock
     * @type {number}
     * @memberof DiseaseDTO
     */
    lock?: number;
}
