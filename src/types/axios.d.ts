export declare global {
	type AxiosRequestData = AxiosRequestParams | FormData;
	type AxiosRequestParams = Record<number | string, any>;
}
