interface RetryOptions {
  timeout?: number;
  maxRetries?: number;
  baseDelay?: number;
  maxDelay?: number;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchWithRetry(
  url: string,
  option: RequestInit = {},
  config: RetryOptions = {},
): Promise<Response> {
  const {
    timeout = 1500,
    maxRetries = 3,
    baseDelay = 1000,
    maxDelay = 10000,
  } = config;
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    console.log('Requst time: ', attempt);
    const abortController = new AbortController();
    const timeoutID = setTimeout(() => {
      console.log('abort');
      abortController.abort();
    }, timeout);
    try {
      const response = await fetch(url, {
        ...option,
        signal: abortController.signal,
      });
      if (response.status !== 429 && response.status < 500) {
        return response;
      }
      if (attempt === maxRetries) {
        return response;
      }
    } catch (error) {
      const err = error as Error;
      console.error(err.message);
      if (attempt === maxRetries) {
        throw error;
      }
    } finally {
      console.log('clear timer');
      clearTimeout(timeoutID);
    }

    const exponentialDelay = Math.min(baseDelay * 2 ** attempt, maxDelay);
    console.log('begin to sleep: ', exponentialDelay);
    await sleep(exponentialDelay);
  }
  throw new Error('Request failed');
}

globalThis.fetch = async (_url, options) => {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      resolve(new Response('Success', { status: 200 }));
    }, 1000);

    options?.signal?.addEventListener(
      'abort',
      () => {
        console.log('Mock fetch received abort');

        clearTimeout(timer);

        reject(new DOMException('The operation was aborted', 'AbortError'));
      },
      { once: true },
    );
  });
};
(async () => {
  try {
    const response = await fetchWithRetry('https://example.company.com/api');
    console.log(response);
  } catch (error) {
    const err = error as Error;
    console.error(err.message);
  }
})();

// export {}
