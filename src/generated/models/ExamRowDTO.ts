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
 * @interface ExamRowDTO
 */
export interface ExamRowDTO {
    /**
     * Exam Row Code
     * @type {number}
     * @memberof ExamRowDTO
     */
    code?: number;
    /**
     * Exam Row Code
     * @type {string}
     * @memberof ExamRowDTO
     */
    description?: string;
    /**
     * @type {ExamDTO}
     * @memberof ExamRowDTO
     */
    exam?: ExamDTO;
}
