/**
 * fr-incident-report-api
 * # FrIncidentReportApi ## Auth -  ## status code - 200: success - 401: auth error - 403: access denied - 4xx: handring error   - 400: validation error   - 401: auth error   - 404: not found error - 5xx: system error   - 500: server error   - 503: temporary error 
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Common } from './common';


export interface Report { 
    /**
     * 作成者
     */
    readonly createdBy?: string;
    /**
     * 作成日
     */
    readonly createdAt?: Date;
    /**
     * 更新者
     */
    readonly updatedBy?: string;
    /**
     * 更新日
     */
    readonly updatedAt?: Date;
    /**
     * バージョン情報
     */
    readonly version?: number;
    /**
     * repotId
     */
    id: string;
    /**
     * reportType
     */
    type?: string;
    /**
     * impact
     */
    impact?: string;
    /**
     * division
     */
    division?: string;
    /**
     * reporter name
     */
    name?: string;
    /**
     * job
     */
    job?: string;
    /**
     * year of experience
     */
    experience?: string;
    /**
     * accrual datetime
     */
    accrualAt?: string;
    /**
     * accrual place
     */
    accrualPlace?: string;
    /**
     * accrual detail place
     */
    accrualPlaceDetail?: string;
    /**
     * patient's id
     */
    patientId?: string;
    /**
     * patient's age
     */
    patientAge?: string;
    /**
     * patient's gender
     */
    patientGender?: string;
    /**
     * main disease
     */
    mainDisease?: string;
    /**
     * physician
     */
    physician?: string;
}
