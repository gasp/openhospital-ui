// tslint:disable
/**
 * OH 2.0 Api Documentation
 * OH 2.0 Api Documentation
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    ExamDTO,
} from './';

/**
 * @export
 * @interface LaboratoryDTO
 */
export interface LaboratoryDTO {
    /**
     * Laboratory Patient Age
     * @type {number}
     * @memberof LaboratoryDTO
     */
    age?: number;
    /**
     * Laboratory Code
     * @type {number}
     * @memberof LaboratoryDTO
     */
    code?: number;
    /**
     * Laboratory Exam Date
     * @type {string}
     * @memberof LaboratoryDTO
     */
    date?: string;
    /**
     * @type {ExamDTO}
     * @memberof LaboratoryDTO
     */
    exam?: ExamDTO;
    /**
     * Laboratory Patient InOut
     * @type {string}
     * @memberof LaboratoryDTO
     */
    inOutPatient?: LaboratoryDTOInOutPatientEnum;
    /**
     * lock
     * @type {number}
     * @memberof LaboratoryDTO
     */
    lock?: number;
    /**
     * Blood
     * @type {string}
     * @memberof LaboratoryDTO
     */
    material?: string;
    /**
     * Note by laboratorist
     * @type {string}
     * @memberof LaboratoryDTO
     */
    note?: string;
    /**
     * Laboratory Patient Name
     * @type {string}
     * @memberof LaboratoryDTO
     */
    patName?: string;
    /**
     * Laboratory Patient Code
     * @type {number}
     * @memberof LaboratoryDTO
     */
    patientCode?: number;
    /**
     * Laboratory Registration Date
     * @type {string}
     * @memberof LaboratoryDTO
     */
    registrationDate?: string;
    /**
     * Laboratory Result
     * @type {string}
     * @memberof LaboratoryDTO
     */
    result?: string;
    /**
     * Laboratory Patient Sex
     * @type {string}
     * @memberof LaboratoryDTO
     */
    sex?: string;
    /**
     * Laboratory status
     * @type {string}
     * @memberof LaboratoryDTO
     */
    status?: LaboratoryDTOStatusEnum;
}

/**
 * @export
 * @enum {string}
 */
export enum LaboratoryDTOInOutPatientEnum {
    I = 'I',
    O = 'O'
}
/**
 * @export
 * @enum {string}
 */
export enum LaboratoryDTOStatusEnum {
    DONE = 'DONE',
    DRAFT = 'DRAFT',
    OPEN = 'OPEN',
    INVALID = 'INVALID',
    DELETED = 'DELETED'
}

