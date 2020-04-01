import { Inject, Injectable, Optional } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpResponse,
  HttpEvent,
  HttpUrlEncodingCodec
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { LatestResponse } from '../models/latestResponse';
import { LocationResponse } from '../models/locationResponse';
import { LocationsResponse } from '../models/locationsResponse';
import { ModelObject } from '../models/modelObject';


@Injectable()
export class CoronaApiService {
  private basePath = 'https://coronavirus-tracker-api.herokuapp.com';
  public defaultHeaders = new HttpHeaders();

  constructor(protected httpClient: HttpClient) {}

  /**
   * Get Latest
   * Getting latest amount of total confirmed cases, deaths, and recoveries.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getLatestV2LatestGet(
    source?: string,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<LatestResponse>;
  public getLatestV2LatestGet(
    source?: string,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<LatestResponse>>;
  public getLatestV2LatestGet(
    source?: string,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<LatestResponse>>;
  public getLatestV2LatestGet(
    source?: string,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    let queryParameters = new HttpParams({
      encoder: new HttpUrlEncodingCodec()
    });
    if (source !== undefined && source !== null) {
      queryParameters = queryParameters.set('source', source as any);
    }

    let headers = this.defaultHeaders;

    headers = headers.set('Accept', ['application/json']);

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.request<LatestResponse>(
      'get',
      `${this.basePath}/confirmed`,
      {
        params: queryParameters,
        headers,
        observe,
        reportProgress
      }
    );
  }

  /**
   * Get Location By Id
   * Getting specific location by id.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getLocationByIdV2LocationsIdGet(
    id: number,
    source?: string,
    timelines?: boolean,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<LocationResponse>;
  public getLocationByIdV2LocationsIdGet(
    id: number,
    source?: string,
    timelines?: boolean,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<LocationResponse>>;
  public getLocationByIdV2LocationsIdGet(
    id: number,
    source?: string,
    timelines?: boolean,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<LocationResponse>>;
  public getLocationByIdV2LocationsIdGet(
    id: number,
    source?: string,
    timelines?: boolean,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling getLocationByIdV2LocationsIdGet.'
      );
    }

    let queryParameters = new HttpParams();
    if (source !== undefined && source !== null) {
      queryParameters = queryParameters.set('source', source as any);
    }
    if (timelines !== undefined && timelines !== null) {
      queryParameters = queryParameters.set('timelines', timelines as any);
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    headers = headers.set('Accept', ['application/json']);

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.request<LocationResponse>(
      'get',
      `${this.basePath}/v2/locations/${encodeURIComponent(String(id))}`,
      {
        params: queryParameters,
        headers,
        observe,
        reportProgress
      }
    );
  }

  /**
   * Get Locations
   * Getting the locations.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public getLocationsV2LocationsGet(
    source?: string,
    countryCode?: string,
    province?: string,
    county?: string,
    timelines?: boolean,
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<LocationsResponse>;
  public getLocationsV2LocationsGet(
    source?: string,
    countryCode?: string,
    province?: string,
    county?: string,
    timelines?: boolean,
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<LocationsResponse>>;
  public getLocationsV2LocationsGet(
    source?: string,
    countryCode?: string,
    province?: string,
    county?: string,
    timelines?: boolean,
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<LocationsResponse>>;
  public getLocationsV2LocationsGet(
    source?: string,
    countryCode?: string,
    province?: string,
    county?: string,
    timelines?: boolean,
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    let queryParameters = new HttpParams();
    if (source !== undefined && source !== null) {
      queryParameters = queryParameters.set('source', source as any);
    }
    if (countryCode !== undefined && countryCode !== null) {
      queryParameters = queryParameters.set('country_code', countryCode as any);
    }
    if (province !== undefined && province !== null) {
      queryParameters = queryParameters.set('province', province as any);
    }
    if (county !== undefined && county !== null) {
      queryParameters = queryParameters.set('county', county as any);
    }
    if (timelines !== undefined && timelines !== null) {
      queryParameters = queryParameters.set('timelines', timelines as any);
    }

    let headers = this.defaultHeaders;

    // to determine the Accept header
    headers = headers.set('Accept', ['application/json']);

    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.request<LocationsResponse>(
      'get',
      `${this.basePath}/v2/locations`,
      {
        params: queryParameters,
        headers,
        observe,
        reportProgress
      }
    );
  }

  /**
   * Sources
   * Retrieves a list of data-sources that are availble to use.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public sourcesV2SourcesGet(
    observe?: 'body',
    reportProgress?: boolean
  ): Observable<ModelObject>;
  public sourcesV2SourcesGet(
    observe?: 'response',
    reportProgress?: boolean
  ): Observable<HttpResponse<ModelObject>>;
  public sourcesV2SourcesGet(
    observe?: 'events',
    reportProgress?: boolean
  ): Observable<HttpEvent<ModelObject>>;
  public sourcesV2SourcesGet(
    observe: any = 'body',
    reportProgress: boolean = false
  ): Observable<any> {
    let headers = this.defaultHeaders;

    // to determine the Accept header
    headers = headers.set('Accept', ['application/json']);


    // to determine the Content-Type header
    const consumes: string[] = [];

    return this.httpClient.request<ModelObject>(
      'get',
      `${this.basePath}/sources`,
      {
        headers,
        observe,
        reportProgress
      }
    );
  }
}
