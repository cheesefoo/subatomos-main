import type { SNSType } from './SNS';

export interface Credit{
	name:string;
	sns:SNSType|undefined;
	url:string|undefined;
	sns2:SNSType|undefined;
	url2:string|undefined;
	avatar:string|undefined;
}