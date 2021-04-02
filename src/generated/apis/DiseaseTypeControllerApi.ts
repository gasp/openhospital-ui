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

import { Observable } from 'rxjs';
import { BaseAPI, HttpHeaders, throwIfNullOrUndefined, encodeURI, OperationOpts, RawAjaxResponse } from '../runtime';
import {
    DiseaseTypeDTO,
} from '../models';

export interface DeleteDiseaseTypeUsingDELETERequest {
    code: string;
}

export interface NewDiseaseTypeUsingPOSTRequest {
    diseaseTypeDTO: DiseaseTypeDTO;
}

export interface UpdateDiseaseTypeUsingPUTRequest {
    diseaseTypeDTO: DiseaseTypeDTO;
}

/**
 * no description
 */
export class DiseaseTypeControllerApi extends BaseAPI {

    /**
     * deleteDiseaseType
     */
    deleteDiseaseTypeUsingDELETE({ code }: DeleteDiseaseTypeUsingDELETERequest): Observable<{ [key: string]: boolean; }>
    deleteDiseaseTypeUsingDELETE({ code }: DeleteDiseaseTypeUsingDELETERequest, opts?: OperationOpts): Observable<RawAjaxResponse<{ [key: string]: boolean; }>>
    deleteDiseaseTypeUsingDELETE({ code }: DeleteDiseaseTypeUsingDELETERequest, opts?: OperationOpts): Observable<{ [key: string]: boolean; } | RawAjaxResponse<{ [key: string]: boolean; }>> {
        throwIfNullOrUndefined(code, 'code', 'deleteDiseaseTypeUsingDELETE');

        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<{ [key: string]: boolean; }>({
            url: '/diseasetypes/{code}'.replace('{code}', encodeURI(code)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * getAllDiseaseTypes
     */
    getAllDiseaseTypesUsingGET(): Observable<Array<DiseaseTypeDTO>>
    getAllDiseaseTypesUsingGET(opts?: OperationOpts): Observable<RawAjaxResponse<Array<DiseaseTypeDTO>>>
    getAllDiseaseTypesUsingGET(opts?: OperationOpts): Observable<Array<DiseaseTypeDTO> | RawAjaxResponse<Array<DiseaseTypeDTO>>> {
        const headers: HttpHeaders = {
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<Array<DiseaseTypeDTO>>({
            url: '/diseasetypes',
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     * newDiseaseType
     */
    newDiseaseTypeUsingPOST({ diseaseTypeDTO }: NewDiseaseTypeUsingPOSTRequest): Observable<DiseaseTypeDTO>
    newDiseaseTypeUsingPOST({ diseaseTypeDTO }: NewDiseaseTypeUsingPOSTRequest, opts?: OperationOpts): Observable<RawAjaxResponse<DiseaseTypeDTO>>
    newDiseaseTypeUsingPOST({ diseaseTypeDTO }: NewDiseaseTypeUsingPOSTRequest, opts?: OperationOpts): Observable<DiseaseTypeDTO | RawAjaxResponse<DiseaseTypeDTO>> {
        throwIfNullOrUndefined(diseaseTypeDTO, 'diseaseTypeDTO', 'newDiseaseTypeUsingPOST');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<DiseaseTypeDTO>({
            url: '/diseasetypes',
            method: 'POST',
            headers,
            body: diseaseTypeDTO,
        }, opts?.responseOpts);
    };

    /**
     * updateDiseaseType
     */
    updateDiseaseTypeUsingPUT({ diseaseTypeDTO }: UpdateDiseaseTypeUsingPUTRequest): Observable<DiseaseTypeDTO>
    updateDiseaseTypeUsingPUT({ diseaseTypeDTO }: UpdateDiseaseTypeUsingPUTRequest, opts?: OperationOpts): Observable<RawAjaxResponse<DiseaseTypeDTO>>
    updateDiseaseTypeUsingPUT({ diseaseTypeDTO }: UpdateDiseaseTypeUsingPUTRequest, opts?: OperationOpts): Observable<DiseaseTypeDTO | RawAjaxResponse<DiseaseTypeDTO>> {
        throwIfNullOrUndefined(diseaseTypeDTO, 'diseaseTypeDTO', 'updateDiseaseTypeUsingPUT');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.apiKey && { 'Authorization': this.configuration.apiKey('Authorization') }), // JWT authentication
        };

        return this.request<DiseaseTypeDTO>({
            url: '/diseasetypes',
            method: 'PUT',
            headers,
            body: diseaseTypeDTO,
        }, opts?.responseOpts);
    };

}
