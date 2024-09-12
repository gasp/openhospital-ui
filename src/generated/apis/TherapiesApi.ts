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

import { Observable } from 'rxjs';
import { BaseAPI, HttpHeaders, throwIfNullOrUndefined, encodeURI, OperationOpts, RawAjaxResponse } from '../runtime';
import {
    MedicalDTO,
    TherapyDTO,
    TherapyRow,
    TherapyRowDTO,
} from '../models';

export interface DeleteAllTherapiesRequest {
    codePatient: number;
}

export interface GetMedicalsOutOfStockRequest {
    therapyDTO: Array<TherapyDTO>;
}

export interface GetTherapiesRequest {
    therapyRowDTO: Array<TherapyRowDTO>;
}

export interface GetTherapyRequest {
    therapyRowDTO: TherapyRowDTO;
}

export interface GetTherapyRowsRequest {
    codePatient: number;
}

export interface NewTherapyRequest {
    therapyRowDTO: TherapyRowDTO;
}

export interface ReplaceTherapiesRequest {
    therapyRowDTO: Array<TherapyRowDTO>;
}

/**
 * no description
 */
export class TherapiesApi extends BaseAPI {

    /**
     */
    deleteAllTherapies({ codePatient }: DeleteAllTherapiesRequest): Observable<boolean>
    deleteAllTherapies({ codePatient }: DeleteAllTherapiesRequest, opts?: OperationOpts): Observable<RawAjaxResponse<boolean>>
    deleteAllTherapies({ codePatient }: DeleteAllTherapiesRequest, opts?: OperationOpts): Observable<boolean | RawAjaxResponse<boolean>> {
        throwIfNullOrUndefined(codePatient, 'codePatient', 'deleteAllTherapies');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<boolean>({
            url: '/therapies/{code_patient}'.replace('{code_patient}', encodeURI(codePatient)),
            method: 'DELETE',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    getMedicalsOutOfStock({ therapyDTO }: GetMedicalsOutOfStockRequest): Observable<Array<MedicalDTO>>
    getMedicalsOutOfStock({ therapyDTO }: GetMedicalsOutOfStockRequest, opts?: OperationOpts): Observable<RawAjaxResponse<Array<MedicalDTO>>>
    getMedicalsOutOfStock({ therapyDTO }: GetMedicalsOutOfStockRequest, opts?: OperationOpts): Observable<Array<MedicalDTO> | RawAjaxResponse<Array<MedicalDTO>>> {
        throwIfNullOrUndefined(therapyDTO, 'therapyDTO', 'getMedicalsOutOfStock');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Array<MedicalDTO>>({
            url: '/therapies/meds-out-of-stock',
            method: 'POST',
            headers,
            body: therapyDTO,
        }, opts?.responseOpts);
    };

    /**
     */
    getTherapies({ therapyRowDTO }: GetTherapiesRequest): Observable<Array<TherapyDTO>>
    getTherapies({ therapyRowDTO }: GetTherapiesRequest, opts?: OperationOpts): Observable<RawAjaxResponse<Array<TherapyDTO>>>
    getTherapies({ therapyRowDTO }: GetTherapiesRequest, opts?: OperationOpts): Observable<Array<TherapyDTO> | RawAjaxResponse<Array<TherapyDTO>>> {
        throwIfNullOrUndefined(therapyRowDTO, 'therapyRowDTO', 'getTherapies');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Array<TherapyDTO>>({
            url: '/therapies/from-rows',
            method: 'POST',
            headers,
            body: therapyRowDTO,
        }, opts?.responseOpts);
    };

    /**
     */
    getTherapy({ therapyRowDTO }: GetTherapyRequest): Observable<TherapyDTO>
    getTherapy({ therapyRowDTO }: GetTherapyRequest, opts?: OperationOpts): Observable<RawAjaxResponse<TherapyDTO>>
    getTherapy({ therapyRowDTO }: GetTherapyRequest, opts?: OperationOpts): Observable<TherapyDTO | RawAjaxResponse<TherapyDTO>> {
        throwIfNullOrUndefined(therapyRowDTO, 'therapyRowDTO', 'getTherapy');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<TherapyDTO>({
            url: '/therapies/from-row',
            method: 'POST',
            headers,
            body: therapyRowDTO,
        }, opts?.responseOpts);
    };

    /**
     */
    getTherapyRows({ codePatient }: GetTherapyRowsRequest): Observable<Array<TherapyRowDTO>>
    getTherapyRows({ codePatient }: GetTherapyRowsRequest, opts?: OperationOpts): Observable<RawAjaxResponse<Array<TherapyRowDTO>>>
    getTherapyRows({ codePatient }: GetTherapyRowsRequest, opts?: OperationOpts): Observable<Array<TherapyRowDTO> | RawAjaxResponse<Array<TherapyRowDTO>>> {
        throwIfNullOrUndefined(codePatient, 'codePatient', 'getTherapyRows');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<Array<TherapyRowDTO>>({
            url: '/therapies/{code_patient}'.replace('{code_patient}', encodeURI(codePatient)),
            method: 'GET',
            headers,
        }, opts?.responseOpts);
    };

    /**
     */
    newTherapy({ therapyRowDTO }: NewTherapyRequest): Observable<TherapyRowDTO>
    newTherapy({ therapyRowDTO }: NewTherapyRequest, opts?: OperationOpts): Observable<RawAjaxResponse<TherapyRowDTO>>
    newTherapy({ therapyRowDTO }: NewTherapyRequest, opts?: OperationOpts): Observable<TherapyRowDTO | RawAjaxResponse<TherapyRowDTO>> {
        throwIfNullOrUndefined(therapyRowDTO, 'therapyRowDTO', 'newTherapy');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<TherapyRowDTO>({
            url: '/therapies',
            method: 'POST',
            headers,
            body: therapyRowDTO,
        }, opts?.responseOpts);
    };

    /**
     */
    replaceTherapies({ therapyRowDTO }: ReplaceTherapiesRequest): Observable<TherapyRow>
    replaceTherapies({ therapyRowDTO }: ReplaceTherapiesRequest, opts?: OperationOpts): Observable<RawAjaxResponse<TherapyRow>>
    replaceTherapies({ therapyRowDTO }: ReplaceTherapiesRequest, opts?: OperationOpts): Observable<TherapyRow | RawAjaxResponse<TherapyRow>> {
        throwIfNullOrUndefined(therapyRowDTO, 'therapyRowDTO', 'replaceTherapies');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        return this.request<TherapyRow>({
            url: '/therapies/replace',
            method: 'POST',
            headers,
            body: therapyRowDTO,
        }, opts?.responseOpts);
    };

}
