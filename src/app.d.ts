declare namespace App {
	interface Locals {}


	  interface Platform {
					env?: {
/*							YOUR_KV_NAMESPACE: KVNamespace;
							YOUR_DURABLE_OBJECT_NAMESPACE: DurableObjectNamespace;*/
						};
		      context: {
			          waitUntil(promise: Promise<any>): void;
			      };
		      caches: CacheStorage & { default: Cache }
		  }

/*export async function POST({ request, platform }) {
  const x = platform.env.YOUR_DURABLE_OBJECT_NAMESPACE.idFromName('x');
}*/

	interface Session {}


	interface Stuff {}
}

