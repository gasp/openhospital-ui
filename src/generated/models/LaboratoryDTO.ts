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
    ExamDTO,
} from './';

/**
 * @export
 * @interface LaboratoryDTO
 */
export interface LaboratoryDTO {
    /**
     * Laboratory Code
     * @type {number}
     * @memberof LaboratoryDTO
     */
    code?: number;
    /**
     * Laboratory Material
     * @type {string}
     * @memberof LaboratoryDTO
     */
    material?: string;
    /**
     * @type {ExamDTO}
     * @memberof LaboratoryDTO
     */
    exam?: ExamDTO;
    /**
     * Laboratory Registration Date
     * @type {string}
     * @memberof LaboratoryDTO
     */
    registrationDate?: string;
    /**
     * Laboratory Exam Date
     * @type {string}
     * @memberof LaboratoryDTO
     */
    labDate?: string;
    /**
     * Laboratory Result
     * @type {string}
     * @memberof LaboratoryDTO
     */
    result?: string;
    /**
     * Lock
     * @type {number}
     * @memberof LaboratoryDTO
     */
    lock?: number;
    /**
     * Laboratory Note
     * @type {string}
     * @memberof LaboratoryDTO
     */
    note?: string;
    /**
     * Laboratory Patient Code
     * @type {number}
     * @memberof LaboratoryDTO
     */
    patientCode?: number;
    /**
     * Laboratory Patient Name
     * @type {string}
     * @memberof LaboratoryDTO
     */
    patName?: string;
    /**
     * Laboratory Patient InOut
     * @type {string}
     * @memberof LaboratoryDTO
     */
    inOutPatient?: LaboratoryDTOInOutPatientEnum;
    /**
     * Laboratory Patient Age
     * @type {number}
     * @memberof LaboratoryDTO
     */
    age?: number;
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
    Draft = 'draft',
    Open = 'open',
    Done = 'done',
    Invalid = 'invalid',
    Deleted = 'deleted'
}

