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


export interface Common { 
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
}

